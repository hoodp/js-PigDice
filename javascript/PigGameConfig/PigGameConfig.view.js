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

            // submit listener for the configuration form
            window.addEventListener("submit", handler);
        };

        var getPlayerNames = function () {

            // get inputs from form
            var inputs = document.getElementById("configuration");
            inputs = inputs.getElementsByTagName("input");
            var names = [];

            // get all inputs except for score field
            for (var i = 0; i < inputs.length; i++) {

                // check for range type or id name
                if (inputs[i].type === "text" && inputs[i].id !== "score") {

                    // check input box is not empty
                    if (inputs[i].value !== "")
                        names.push(inputs[i].value);
                }

            }
            return names;
        };

        var getTargetScore = function () {

            // get score input
            var score = document.getElementById("score").value;
            return parseInt(score);
        };

        var hide = function () {
            var config = document.getElementById("configuration");
            config.className = "form-horizontal hidden";
        };

        // shows the value of the score slider
        var setRangeHandler = function(handler) {

            // get the score slider & add event listener from model
            var slider = document.getElementById("score");
            slider.addEventListener("change", handler);
        };

        // update slider score
        var showSliderValue = function () {

            // get value from slider
            var sliderVal = document.getElementById("score").value;
            document.getElementById("sliderVal").innerHTML = sliderVal;
        };

        // Set up the object to have instance methods.        
        return {
            setFormHandler: setFormHandler,
            getPlayerNames: getPlayerNames,
            getTargetScore: getTargetScore,
            hideConfiguration: hide,
            setRangeHandler: setRangeHandler,
            showSliderValue: showSliderValue
        }
    }; // end init

    // This sets up the class/static methods.  In this case, the constructor is the only class method.
    return {
        init: init
    }
})();
