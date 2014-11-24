'use strict';
describe('Test game', function() {
    var main = element(by.id('main'));
    var returnButton = element(by.id('return'));
    var startButton = element(by.id('start'));
    var optionsButton = element(by.id('options'));
    var creditsButton = element(by.id('credits'));
    var verifyButton = element(by.id('verify'));
    var _protractor;

    beforeEach(function() {
        _protractor = protractor.getInstance();
        _protractor.ignoreSynchronization = true;
        _protractor.waitForAngular();
        browser.driver.manage().window().maximize();
        browser.get('http://localhost/tictac/build/#/');
        _protractor.sleep(1000);
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Apprendre à lire l\'heure en CE2');
    });

    it('should click button options and containing the chain', function() {
        var expectedUrl = _protractor.baseUrl + '/#/options';
        optionsButton.click();
        expect(main.getText()).toContain('Choix de la pendule');
        _protractor.sleep(2500);
    });

    it('should popup failure', function() {
        startButton.click();
        verifyButton.click();
        _protractor.sleep(2500);
    });

});