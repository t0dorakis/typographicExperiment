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
    var dreckText = "\n—— ——— ——— ——— —— ——— ——— ————— ——— ——— ————— ——— ——— ————— ——— ——— ————— ——— ——— ———\n" +
        "Sehen sie den Dreck? fragte er. Nicht nur in den Ritzen, nicht nur versteckt hinterm\n" +
        "Schrank usf. sozusagen nicht nur im Geheimen. Nein, ganz offensichtlich liegt er\n" +
        "hier... in all seiner grausamen Unendlichkeit. Wir k\u00e4mpfen ja seit je her gegen den\n" +
        "Dreck und im Grunde mittlerweile eigentlich nur noch gegen den Staub und den Dreck,\n" +
        "wie er ganz offensichtlich ganz von alleine, ohne jedwedes Zutun immer\n" +
        "und immer wieder \u00fcberall liegt. Man wischt. Man wischt ja im Grunde immerzu und\n" +
        "der Dreck kommt gleich wieder. Ich wische \u00fcber den Flurboden und denke: jetzt ist\n" +
        "der Dreck weg... aber wissen Sie... der Dreck ist eigentlich nicht weg, ist nie weg\n" +
        "und selbst wenn wir fest davon \u00fcberzeugt sind, der Dreck sei beseitigt, sei fort, ist\n" +
        "der Dreck noch immer da und vor allem nach k\u00fcrzester Zeit auch wieder\n" +
        "offensichtlich da. Heute haben wir mehr Dreck als fr\u00fcher, auch wenn das alle\n" +
        "abstreiten. Die Leute streiten ja ab, dass wir heute mehr Dreck als fr\u00fcher haben\n" +
        "und behaupten allen Ernstes, der Dreck habe sich verringert, w\u00e4hrenddessen man\n" +
        "zugeben muss, dass der Dreck sich im Grunde nur verschlimmert habe. Sehen sie,\n" +
        "ich wische hier \u00fcber den Tisch und verschmiere den Dreck eigentlich nur. Der\n" +
        "Lumpen saugt den Dreck gar nicht mehr auf, sondern verwischt ihn bestenfalls,\n" +
        "schlimmstenfalls aber hat der Lumpen auf den Dreck \u00fcberhaupt keine Wirkung. \n" +
        "\n" +
        "     Wir alle ersticken ja am Dreck, f\u00fchren ein dreckiges Leben im Dreck und in\n" +
        "Kooperation mit dem Dreck, mit dem wir uns abgefunden haben. Daher erscheint\n" +
        "uns der Dreck nicht mehr bedeutend. Der Dreck aber ist das absolut bedeutenste\n" +
        "und war es immer. Ich wische also und wische und der Dreck ist nach der\n" +
        "k\u00fcrzesten Zeit einfach wieder da... Man erstickt ja im Dreck. Man wischt ja im\n" +
        "Grunde nur noch gegen den Schmutz an und nennt das Leben. Es wird nichts\n" +
        "mehr geschaffen, sondern nur wiederhergestellt... aber im Kern verfault alles und\n" +
        "am Ende hat man nichts. Man k\u00e4mpft ja um die eigene Existenz, also gegen den\n" +
        "Schmutz aber der Schmutz gewinnt immer und wir f\u00fchren eine f\u00fcrchterliche\n" +
        "Existenz im Dreck oder versuchen am Dreck vorbei zu leben. Ich kann aber nicht\n" +
        "am Dreck vorbei leben und lebe dadurch jeden Tag f\u00fcr den Dreck. EIn Leben f\u00fc̈r\n" +
        "den Schmutz! Das solle ich mir mal vorstellen, sagte er lachend. Wir stehen ja\n" +
        "morgens fr\u00fch auf f\u00fcr den Dreck. Wischen hier und dort, versuchen uns am Leben\n" +
        "zu halten, f\u00fcr den Dreck, dass wir ihn wischen können, also im Grunde gegen den\n" +
        "Dreck. Man lebt nicht mehr f\u00fcr etwas, man lebt im Grunde nur noch gegen etwas\n" +
        "und dieses Etwas, das ist der Dreck. Man lebt quasi gegen den Dreck an und in\n" +
        "jeden neuen Tag hinein und immer f\u00fcr den Schmutz in den Ritzen, im Spalt, in den\n" +
        "Löchern usf. aber auch auf der Fl\u00e4che, sagte er. Im Grunde aber mache man sich\n" +
        "ja zum Affen f\u00fcr den Dreck. Das sei eine entsetzliche Vorstellung, wie er finde...\n" +
        "ein Affe des Drecks zu sein. Es stink immer, sagte er. Es stinkt drinnen, es\n" +
        "stinkt draußen... da könne man sich das L\u00fcften gleich sparen und immer im Kampfe\n" +
        "gegen den Dreck und immer im \u00dcberlebenskampfe gegen den Erstickungstod.\n" +
        "Wolle er jede Ecke, jeden Winkel abstauben und das t\u00e4glich, gr\u00fcndlich, br\u00e4uchte er\n" +
        "am Tage mehr Stunden als einem der Tag \u00dcberhaupt naturgemäß bereitstellt. Die\n" +
        "Einrichtungen werden ja immer reduzierter. Hier ein Schemel, da noch ein Tisch,\n" +
        "darauf eine Vase. Das muss heutzutage reichen, wo der Dreck unbesiegbar\n" +
        "geworden ist. Der Minimalismus und Purismus, das seien ja Gegenmaßnahmen,\n" +
        "seien Versuche gegen den Dreck... aber der Dreck gewinnt immer. Wo man\n" +
        "hinkommt, es wimmelt der Schmutz und alles ist mir ekelhaft geworden und ich\n" +
        "verlasse das Haus kaum noch... habe meine ganze Existenz ins Aufwischen\n" +
        "geworfen, hinein in den Dreck geworfen, dem Dreck alles gewidmet und geopfert...\n" +
        "aber auch um zu \u00dcberleben.\n" +
        "—— ——— ——— ——— —— ——— ——— ————— ——— ——— ————— ——— ——— ————— ——— ——— ————— ——— "
    var nameText = " SOEREN MEYERHOFER"
    var titelText = " -DER DRECK-"

    //Split text into Words/Letters
    var TextArray = dreckText.split("\n")
    var NameArray = nameText.split("")
    var titelArray = titelText.split("")

    //TODO: Make Responisve
    // Viewheight variables
    var width = window.innerWidth / 2
    var textHeight = window.innerheight / 200;

    //TODO: did could be done in the index.html
   //HZML Elemnts
    var sideBar = document.createElement('div');
    sideBar.className = 'sidebar';
    document.getElementsByTagName('row')[0].appendChild(sideBar);

    var headBar = document.createElement('div');
    headBar.className = 'container';
    document.getElementsByTagName('header')[0].appendChild(headBar);

    var iDiv = document.createElement('div');
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

    var font = "";
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
        innerDiv.setAttribute('height', '55px');
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
        headBar.appendChild(innerDiv);
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
                console.log(" xedni " + xedni)
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
