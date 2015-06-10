"use strict";
describe("GameDie", function() {
    var model;
    beforeEach(function() {
       model = GameDie.Model.init();
    });
    describe("::init", function() {
        it("random returns undefined", function() {
            expect(model.random()).toBeUndefined();
        });
    });
    describe("#random", function() {
        it("random sets value", function() {
            model.random();
            expect(model.value()).toBeGreaterThan(0);
        });
        it("random between 1 & 6", function() {
            for (var i = 0; i < 100; i++) {
                model.random();
                expect(model.value()).toBeGreaterThan(0);
                expect(model.value()).toBeLessThan(7);
            }
        });
    });
    describe("#spellValue", function() {
        it("converts value to css class name", function() {
            var names = ["one", "two", "three", "four", "five", "six"];
            for (var i = 1; i <= 6; i++)
                expect(model.spellValue(i)).toBe(names[i - 1]);
        });
    });
});