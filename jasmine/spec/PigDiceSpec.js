/**
 * Created by kurmasz on 2/16/15.
 */
describe("PigGame", function(){

    // pig game model for testing & random score
    var model;
    var players = [];
    for (var i = 1; i <= 4; i++)
        players.push(Player.init("p" + i.toString()));
    var targetScore;
    beforeEach(function() {

        // random target score between 10-100
        targetScore = Math.floor(Math.random() * 100 + 10);
        model = PigGame.Model.init(players, targetScore);
        model.setGameDie(GameDie.Model.init());
    });

    describe("::init", function() {
        it("current player starts 0", function() {
            expect(model.getCurrentPlayer()).toBe(0);
        });
        it("winner should be null", function() {
            expect(model.getWinner()).toBeNull();
        });
        it("start point set to 0", function() {
            expect(model.getCurrentPoint()).toBe(0);
        });
        it("matching target scores", function() {
            expect(model.getTargetScore()).toBe(targetScore);
        });
    });

    describe("#setGameDie", function() {
        it("check initial setting of game die", function() {
            expect(model.gameDie).toBeUndefined();
        });
        it("setting of game die", function() {
            model.setGameDie(GameDie.Model.init());
            model.roll();
            expect(model.currentDieValue()).toBeDefined();
        });
    });
    describe("#pass", function() {
        it("updates current player after passing", function() {
            for (var i = 0; i < 3; i++) {
                model.pass();
                expect(model.getCurrentPlayer()).toBe(i + 1);
            }
            expect(model.getCurrentPlayer()).toBe(3);
            model.pass();
            expect(model.getCurrentPlayer()).toBe(0);
        });
        it("updates score", function() {
            model.roll();
            var currPlayer = model.getCurrentPlayer();
            var playerScore = model.getPlayerScore(currPlayer);
            var currPoint = model.getCurrentPoint();
            model.pass();
            expect(model.getPlayerScore(currPlayer))
                .toBe(playerScore + currPoint);
        });
    });
    describe("#roll", function() {
        it("reset points or add", function() {
            model.roll();
            if (model.currentDieValue() > 1)
                expect(model.getCurrentPoint()).toBeGreaterThan(0);
            else
                expect(model.getCurrentPoint()).toBe(0);
        });
    });
});