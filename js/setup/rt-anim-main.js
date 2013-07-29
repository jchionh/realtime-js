/**
 * User: jchionh
 * Date: 7/29/13
 * Time: 5:33 PM
 */

/**
 * init our app
 */
function mainInit() {
    console.log("main init.");

    // call our mainloop the first time with a current timestamp
    mainLoop(Date.now());
};

/**
 * this is our mainloop, that will be called with requestAnimationFrame
 * @param {number} timestamp
 */
function mainLoop(timestamp) {
    // calculate our delta

    //console.log('reqAnimFrame main loop run.');
};

function needsRequestAnimFrame() {
    // request anim for the next loop call
    window.requestAnimFrame(mainLoop, rt.gCanvasElement);
};
