import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const refs = {
  iframe: document.body.querySelector(`#vimeo-player`),
};
const KEY_NAME = 'videoplayer-current-time';
const player = new Player(refs.iframe);

player.setCurrentTime(localStorage.getItem(KEY_NAME)).catch(error => {
  console.log(error.name);
  return;
});
player.on('timeupdate', throttle(updateVideoCurrentTime, 1000));

function updateVideoCurrentTime(e) {
  console.log(e);
  console.log(JSON.stringify(e.seconds));

  localStorage.setItem(KEY_NAME, JSON.stringify(e.seconds));
}
