/**
 * Audio
 * @class Audio
 * @export
 */
class Audio {

  /**
   * @constructor
   */
  constructor() {

    /**
     * Audio res path
     * @type {String}
     */
    this.path = "assets/audio/";

    /**
     * Noises
     * @type {Array}
     */
    this.noises = [];

  }

  /**
   * Play a sound
   * @param {String} name
   * @param {Number} vol
   * @param {Number} x
   * @param {Number} y
   */
  playSound(name, vol, x, y) {
    let path = this.path + `${name}.ogg`;
    var sound = new Howl({
      urls: [path],
      autoplay: true,
      loop: false,
      pos3d: [x, y, vol / 1e3]
    });
  }

  /**
   * Play a song
   * @param {String}  name
   * @param {Number}  vol
   * @param {Boolean} fadeIn
   */
  playSong(name, vol, fadeIn) {
    vol = vol / 1e2;
    let path = this.path + `${name}.ogg`;
    var song = new Howl({
      urls: [path],
      autoplay: true,
      loop: true,
      volume: fadeIn ? 0 : vol
    });
    if (fadeIn) {
      song.fadeIn(vol, 2e3);
    }
  }

  /**
   * Play a noise
   * @param  {String} name
   * @param  {Number} vol
   * @param  {Number} x
   * @param  {Number} y
   * @return {Object}
   */
  playNoise(name, vol, x, y) {
    let path = this.path + `${name}.ogg`;
    var noise = new Howl({
      urls: [path],
      autoplay: true,
      loop: true,
      volume: vol / 1e2,
      pos3d: [x, y, vol / 1e3]
    });
    this.noises.push(noise);
    /** This is for smooth out/in fading noise range area */
    noise.isInView = true;
    noise.fadingIn = false;
    noise.fadingOut = false;
    return (noise);
  }

}

export default Audio = new Audio();