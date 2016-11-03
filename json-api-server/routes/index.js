'use strict';

// import handler functions
// const FindActionItemsHandlerFunction = require('../handlers/FindActionItemsHandlerFunction');

const cfenv = require('cfenv');
const express = require('express');
const multer = require('multer'); // a middleware for file upload handling
const logger = require('../modules/logger');

const appEnv = cfenv.getAppEnv();

let uploadedFiles = null;

if (appEnv.isLocal) {
    //local environment
    uploadedFiles = multer({
        dest: './upload'
    });
} else {
    //Bluemix or CloudFoundry environment
    uploadedFiles = multer({
        dest: process.env.TMPDIR
    });
}

//Express4 Router
const router = express.Router();

/**
 * Common Middleware function
 */
router.use((req, res, next) => {
    //console.log('Something is happening.');
    next(); //ミドルウェア関数において、後続のルーティング処理を呼び出すためにこのnext()は必須。
});

/**
 * @swagger
 * /api/test:
 *   get:
 *     description: api for testing. response a fixed message.
 *     produces:
 *       - application/json
 *     parameters: []
 *     responses:
 *       200:
 *         description: ok
 */
router.get('/api/test', (req, res) => {
    logger.info('/api/test is called.');
    res.json({
        message: 'Successfully Posted a test message.'
    });
});


/**
 * @swagger
 * /api/google/calendarLists:
 *   get:
 *     description: list calendar events
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: calendarId
 *         in: path
 *         description: calendar unique id.
 *         required: true
 *     responses:
 *       200:
 *         description: ok
 */
//router.get('/api/google/calendars/:calendarId/events', ensureAuthenticatedMiddleWareFunction, GoogleCalendarEventListHandlerFunction);


//export the Router instance
module.exports = router;
