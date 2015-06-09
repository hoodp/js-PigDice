"use strict";

/**
 * The view of a GameDie
 * Created by kurmasz on 2/11/15.
 */


GameDie.View = (function () {

    /**
     * Constructor
     * @param container_in  The DOM element that will contain this Die.
     * @returns {{update: update}}
     */
    //var init = function (container_in) {
    var init = function () {
        //TODO:  Add any necessary instance variables and instance methods
        // Note:  There are a number of ways you can implement the view of a GameDie.  For example:
        // * Draw pips on an HTML5 Canvas
        // * Show and hide different images.
        //

        // update the dice value
        var updateDice = function(value) {
            document.getElementById("dice").innerHTML = value.toString();
        };

        return {
            updateDice : updateDice
        }
    } // end init

    return {
        init: init
    };
})();
