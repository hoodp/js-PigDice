"use strict";

/**
 * Represents a Pig Dice player.
 *
 * Created by kurmasz on 2/11/15.
 */
var Player = (function () {

    var init = function (name_in) {
        var name = name_in;
        var score = 0;

        var getName = function() {
            return name;
        };

        var getScore = function() {
            return score;
        };

        var incScore = function(value) {
            score += value;
        };

        return {
            getName : getName,
            getScore : getScore,
            add : incScore
        };
    };

    return {
        init: init
    };
})();