/**
 * The view for the input form of a game of Pig Dice.
 * *
 * Created by kurmasz on 5/22/15.
 */


PigGameConfig.View = (function () {

    /**
     *
     * * Constructor.  (This is also where the instance data and instance methods are defined.)
     *
     * @returns {{setFormHandler: setFormHandler, getPlayerNames: getPlayerNames, getTargetScore: getTargetScore, hideConfiguration: hide}}
     */
    var init = function () {

        // There is no instance data for this object, just instance methods.

        var setFormHandler = function (handler) {
            // TODO:  Add handler as a submit listener on the for 
        };

        var getPlayerNames = function () {
            // TODO:  Retrieve the player names from the form.  Ignore empty fields.  
        };

        var getTargetScore = function () {
            // TODO:  Retrieve the target score from the form.   
        };

        var hide = function () {
            // TODO:  Hide the input configuration part of the page.
            var config = document.getElementById("configuration");
            config.style.display = "none";
            // # end m4 marco => ')
        };

        // Set up the object to have instance methods.        
        return {
            setFormHandler: setFormHandler,
            getPlayerNames: getPlayerNames,
            getTargetScore: getTargetScore,
            hideConfiguration: hide
        }
    }; // end init

    // This sets up the class/static methods.  In this case, the constructor is the only class method.
    return {
        init: init
    }
})();
