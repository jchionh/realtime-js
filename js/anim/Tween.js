/**
 * User: jchionh
 * Date: 6/24/13
 * Time: 12:20 PM
 */

// namespace
rt.anim = rt.anim || {};

/**
 * Linear tweening
 * @param {number} startValue
 * @param {number} endValue
 * @param {number} progress
 * @returns {number}
 */
rt.anim.tweenLinear = function(startValue, endValue, progress) {
    var deltaValue = endValue - startValue;
    return startValue + deltaValue * progress;
}


/**
 *
 * @param {number} startValue
 * @param {number} endValue
 * @param {number} progress
 * @returns {number}
 */
rt.anim.tweenEaseInQuad = function(startValue, endValue, progress) {
    var deltaValue = endValue - startValue;
    return startValue + deltaValue * (progress * progress);
};

/**
 *
 * @param {number} startValue
 * @param {number} endValue
 * @param {number} progress
 * @returns {number}
 */
rt.anim.tweenEaseOutQuad = function(startValue, endValue, progress) {
    var deltaValue = endValue - startValue;
    return startValue + deltaValue * (progress * (2 - progress));
};

/**
 *
 * @param {number} startValue
 * @param {number} endValue
 * @param {number} progress
 * @returns {number}
 */
rt.anim.tweenEaseInCubic = function(startValue, endValue, progress) {
    var deltaValue = endValue - startValue;
    return startValue + deltaValue * progress * progress * progress;
};

/**
 *
 * @param {number} startValue
 * @param {number} endValue
 * @param {number} progress
 * @returns {number}
 */
rt.anim.tweenEaseOutCubic = function(startValue, endValue, progress) {
    var deltaValue = endValue - startValue;
    var invProgress = progress - 1.0;
    return startValue + (deltaValue * (invProgress * invProgress * invProgress + 1.0));
};