'use strict';
exports.config = {
    seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
    baseUrl: 'http://localhost/tictac/build/#/',
    maxSessions: 1,
    multiCapabilities: [
        { browserName: 'chrome' }
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        includeStackTrace: true,
        isVerbose: true
    }
};