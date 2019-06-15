/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// import { load } from 'opentype.js';

// var opentype = require('opentype.js');
// var computeLayout = require('opentype-layout');

import * as opentype from '../node_modules/opentype.js/dist/opentype.js';
// ================================
// START YOUR APP HERE
// ================================
//TODO: outsource text
window.onload = function () {

    const textContainer = document.getElementById('textContainerMobile');
    const dreckText = textContainer.textContent;
    const nameText = " SOEREN MEYERHOFER"
    const titelText = " DER DRECK"

    //Split text into Words/Letters
    const TextArray = dreckText.split("\n")
    const NameArray = nameText.split("")
    const titelArray = titelText.split("")

    //TODO: Make Responisve
    // Viewheight variables
    const width = window.innerWidth / 2
    const textHeight = window.innerheight / 300;

    //TODO: did could be done in the index.html
   //HZML Elemnts
    const sideBar = document.getElementById('artist');

    const headline = document.getElementById('headline');

    const iDiv = document.createElement('div');
    iDiv.className = 'container';
    document.getElementsByTagName('row')[0].appendChild(iDiv);


    //prototype Function to map values like in Processing
    Number.prototype.map = function (in_min, in_max, out_min, out_max) {
        return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

// Mouse Events listeners
    //TODO: maybe scroll event listeners would be better = mobile first

    document.addEventListener('mousemove', onMouseUpdate, false);
    document.addEventListener('mouseenter', onMouseUpdate, false);

    function onMouseUpdate(e) {
        xM = e.pageX;
        yM = e.pageY;
        // console.log(e.pageX);
    }

    function getMouseX() {
        return xM;
    }

    function getMouseY() {
        return yM;
    }

//

    // snapVariables
    var snapPath = null;
    var snapStrength = 0;
    var snapDistance = 100;
    var snapX = 0;
    var snapY = 0;


    //Those 3 loops create the Canvases
    TextArray.forEach(function (value, index) {

        var innerDiv = document.createElement('canvas');
        innerDiv.className = 'snapGrid';
        innerDiv.id = "inner" + index;
        innerDiv.setAttribute('width', '' + width*4  + '');
        innerDiv.setAttribute('height', '50px');
        // The variable iDiv is still good... Just append to it.
        iDiv.appendChild(innerDiv);
    });
    NameArray.forEach(function (value, index) {

        var innerDiv = document.createElement('canvas');
        innerDiv.className = 'sideSnap';
        innerDiv.id = "side" + index;
        innerDiv.setAttribute('width', '' + width / 10  + '');
        innerDiv.setAttribute('height', '60px');
        // The variable iDiv is still good... Just append to it.
        sideBar.appendChild(innerDiv);
    });
    titelArray.forEach(function (value, index) {

        var innerDiv = document.createElement('canvas');
        innerDiv.className = 'headerSnap';
        innerDiv.id = "head" + index;
        innerDiv.setAttribute('width', '' + width / 7  + '');
        innerDiv.setAttribute('height', '220px');
        // The variable iDiv is still good... Just append to it.
        headline.appendChild(innerDiv);
    });

    function onMouseUpdate(e) {
        var xM = null;
        var yM = null;

        xM = e.pageX;
        yM = e.pageY;

        function getMouseX() {
            return xM;
        }

        function getMouseY() {
            return yM;
        }

        var limitStrength = getMouseX().map(0, 2500, -50, 30);
        var limitDistance = getMouseY().map(0, 2000, -50, 90);

        snapStrength = limitStrength;
        snapDistance = limitDistance;

        opentype.load('./assets/fonts/Pragmata.otf', function (err, font) {

            function snap(v, distance, strength) {
                return (v * (1.0 - strength)) + (strength * Math.round(v / distance) * distance);
            }

            function doSnap(path, offset, offset2) {
                var i;
                var strength = (snapStrength/offset*3) / 100.0;
                if(offset2){
                    var strength = (snapStrength/offset2) / 100.0;

                }
                // var snapDistance = (snapDistance /10) * offset;
                for (i = 0; i < path.commands.length; i++) {
                    var cmd = path.commands[i];
                    if (cmd.type !== 'Z') {
                        cmd.x = snap(cmd.x + snapX, snapDistance, strength) - snapX;
                        cmd.y = snap(cmd.y + snapY, snapDistance, strength) - snapY;
                    }
                    if (cmd.type === 'Q' || cmd.type === 'C') {
                        cmd.x1 = snap(cmd.x1 + snapX, snapDistance, strength) - snapX;
                        cmd.y1 = snap(cmd.y1 + snapY, snapDistance, strength) - snapY;
                    }
                    if (cmd.type === 'C') {
                        cmd.x2 = snap(cmd.x2 + snapX, snapDistance, strength) - snapX;
                        cmd.y2 = snap(cmd.y2 + snapY, snapDistance, strength) - snapY;
                    }
                }
            }


            TextArray.forEach(function (value, index) {

                snapPath = font.getPath(value, 0, 30, 30);
                var xedni = Math.round(TextArray.length / index);

                doSnap(snapPath,index, xedni);
                var snapCtx = document.getElementById('inner' + index).getContext('2d');
                snapCtx.setTransform(1, 0, 0, 1, 0, 0);
                snapCtx.clearRect(0, 0, width*4*getMouseY()/index*5, getMouseX()*index);
                snapPath.draw(snapCtx);
            })
            NameArray.forEach(function (value, index) {
                snapPath = font.getPath(value, 0, 55, 55);
                doSnap(snapPath, index);
                var snapCtx = document.getElementById('side' + index).getContext('2d');
                snapCtx.setTransform(1, 0, 0, 1, 0, 0);
                snapCtx.clearRect(0, 0, getMouseX()*index, getMouseX());
                snapPath.draw(snapCtx);
            })
            titelArray.forEach(function (value, index) {
                snapPath = font.getPath(value, 0, 200, 200);
                doSnap(snapPath, index/4);
                var snapCtx = document.getElementById('head' + index).getContext('2d');
                snapCtx.setTransform(1, 0, 0, 1, 0, 0);
                snapCtx.clearRect(0, 0, getMouseX()*index, getMouseX());
                snapPath.draw(snapCtx);
            })
            // snapPath = font.getPath(dreckText, 0, 200, 12);
            // doSnap(snapPath);
            // var snapCtx = document.getElementById('snap').getContext('2d');
            // snapCtx.clearRect(0, 0, 800, 50);
            // snapPath.draw(snapCtx);

        });
    }
}
