/**
 *  The controller for the input configuration for PigDice
 *
 * Created by kurmasz on 5/22/15.
 */
PigGameConfig.Controller = (function () {

    /**
     * Constructor.  (This is also where the instance data and instance methods are defined.)
     */
    var init = function () {

        // This is a private method.
        // This is the method called when the form is submitted.
        var formSubmitted = function (event) {
            event.preventDefault();
            var names = view.getPlayerNames();
            var targetScore = view.getTargetScore();
            for (var i = 0; i < names.length; i++)
                console.log(targetScore);

            // After submitting the configuration form, then we can 
            // create the MVC triad that actually plays the game.
            PigGame.Controller.init(names, targetScore);

            // We are now done with the configuration form, so hide it.
            view.hideConfiguration();
        };

        // event handler for updating slider value
        var scoreUpdated = function(event) {
          view.showSliderValue();
        };

        // This is where the "constructor code" goes.
        // (This is analogous to the code you would put in a Java constructor.)

        var view = PigGameConfig.View.init();
        view.setFormHandler(formSubmitted);
        view.setRangeHandler(scoreUpdated);
        view.showSliderValue();
    };

    // This sets up the class/static methods.  In this case, the constructor is the only class method.
    return {
        init: init
    }

})();

