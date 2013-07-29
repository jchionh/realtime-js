/**
 * User: jchionh
 * Date: 6/23/13
 * Time: 10:10 AM
 */

// namespace
rt.anim = rt.anim || {};

/**
 * anim manager handles the running of animations
 * @constructor
 */
rt.anim.AnimManager = function() {
    // list of animations
    this.animations = [];
};

/**
 * add an anim to the list
 * @param {rt.anim.Anim} animation
 */
rt.anim.AnimManager.prototype.addAnim = function(animation) {
    this.animations.push(animation);
    animation.onStart();
};

/**
 * called up update with a delta time to update all existing
 * animations
 * @param {number} dt
 */
rt.anim.AnimManager.prototype.update = function(dt) {

    //console.log('anim manager update: ' + dt + ' ms');

    var lastIndex = this.animations.length - 1;
    var i = 0;
    for (i = lastIndex; i >= 0; --i) {
        var animation = this.animations[i];
        animation.onUpdate(dt);
        //now, if after an update, our anim has ended
        // we'll remove it
        if (animation.hasEnded()) {
            this.removeBySwappingLast(i);
            animation.onStop();
        }
    }
};

/**
 * we implement a O(1) removal by swapping the position of the anim
 * we want to remove to the last, then resize the array down by 1
 *
 * @param {number} i the position of the anim we want to remove
 */
rt.anim.AnimManager.prototype.removeBySwappingLast = function(i) {
    var numAnims = this.animations.length;
    var lastIndex = numAnims - 1;

    // now swap the wated anim to the last position
    var swap = this.animations[lastIndex];
    this.animations[lastIndex] = this.animations[i];
    this.animations[i] = swap;

    // after the swap, we can safely resize the array down -1;
    this.animations.length = numAnims - 1;
};

/**
 * how many anims do we have running?
 * @returns {Number}
 */
rt.anim.AnimManager.prototype.getNumAnims = function() {
    return this.animations.length;
};
