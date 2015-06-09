"use strict";
/**
 * Created by kurmasz on 2/16/15.
 */

PigGame.View = (function () {

    /**
     * Constructor
     * @returns {{setRollHandler: setRollHandler, setPassHandler: setPassHandler,
     * showBoard: showBoard, initScoreList: initScoreList,
     * updatePlayerScores: updatePlayerScores, updateCurrentPoint:
     * updateCurrentPoint, updateCurrentPlayer: updateCurrentPlayer,
     * displayBustedMessage: displayBustedMessage}}
     */
    var init = function () {

        // roll & pass buttons
        var rollBtn = document.getElementById("roll");
        var passBtn = document.getElementById("pass");

        // add click handler to roll button
        var setRollHandler = function(handler) {
            rollBtn.addEventListener("click", handler);
        };

        // add click handler to pass button
        var setPassHandler = function(handler) {
            passBtn.addEventListener("click", handler);
        };

        // displays the board and stats div
        var showBoard = function(players, targetScore) {
            document.getElementById("game").className = "show";
            document.getElementById("stats").className = "show";

            // update progress bars
            initScoreList(players, targetScore);

            // show current player
            updateCurrentPlayer(0, true);
        };

        // displays the winner
        var showWinner = function(winner) {
            document.getElementById("dice").innerHTML = winner + " wins!";
            rollBtn.setAttribute("disabled", true);
            passBtn.setAttribute("disabled", true);


            // restart the game after 5 seconds
            setTimeout(function() {
                window.location.reload();
            }, 5000);
        };

        var initScoreList = function(names, maxVal) {

            // reset each players progress bar
            var pScore = document.getElementsByClassName("player");

            // set playerScore to visible and reset progress bar
            for (var i = 0; i < names.length; i++) {

                // get player progress bar
                var progressBar = pScore[i].getElementsByClassName("progress-bar")[0];

                // update width & attribute values
                progressBar.setAttribute("style", "width: 0%");
                progressBar.setAttribute("aria-valuenow", "0");
                progressBar.setAttribute("aria-valuemax", maxVal.toString());

                // set player name
                pScore[i].getElementsByClassName("title")[0].innerHTML =
                    '<span class="glyphicon glyphicon-arrow-right"></span>' +
                    + names[i].getName();

                var text = '<span class="glyphicon glyphicon-arrow-right"></span>';
                text += names[i].getName();
                pScore[i].getElementsByClassName('title')[0].innerHTML = text;

                // make players progress bar visible
                pScore[i].setAttribute("style", "display: block");
            }
        };

        var updatePlayerScores = function(index, score) {

            // get div location of current player
            var progress = document.getElementsByClassName("player")[index];

            // get actual progress element
            progress = progress.getElementsByClassName("progress-bar")[0];

            // update current score
            progress.setAttribute("aria-valuenow", score.toString());

            // convert score to a percent
            var max = parseInt(progress.getAttribute("aria-valuemax"));
            var size = score / max * 100;
            size = size.toString() + "%;";

            // update the current score width
            progress.setAttribute("style", "width:" + size);
            progress.innerHTML = score.toString() + "/" + max.toString();
        };
        var updateCurrentPoint = function(point) {
            document.getElementById("points").innerHTML = point.toString();
        };

        var updateCurrentPlayer = function(index, on) {

            // get current player element
            var player = document.getElementsByClassName("player")[index];

            // get progress bar
            var progress = player.getElementsByClassName("progress-bar")[0];

            // get arrow element
            var arrow = player.getElementsByClassName("glyphicon-arrow-right")[0];

            // update arrow & add animation to the progress bar
            arrow.style.visibility = on ? "visible" : "hidden";
            if (on)
                progress.className += " active";
            else
                progress.className = progress.className.replace("active", "");
        };

        var displayBustedMessage = function() {

            // show error message after rolling a 1
            var elements = document.getElementsByClassName("red");
            elements[1].style.visibility = "visible";
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color = "red";
                elements[i].style.fontWeight = "bold";
            }
            window.setTimeout(function(){
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style.color = "";
                    elements[i].style.fontWeight = "";
                }
                elements[1].style.visibility = "hidden";
            }, 2000);
        };

        return {
            setRollHandler: setRollHandler,
            setPassHandler: setPassHandler,
            showBoard: showBoard,
            initScoreList: initScoreList,
            updatePlayerScores: updatePlayerScores,
            updateCurrentPoint: updateCurrentPoint,
            updateCurrentPlayer: updateCurrentPlayer,
            displayBustedMessage: displayBustedMessage,
            showWinner: showWinner
        }
    };
    return {
        init: init
    }
})();