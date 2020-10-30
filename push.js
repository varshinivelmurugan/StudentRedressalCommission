var Pusher = require('pusher')
var pusher = new Pusher({
  appId: '1092276',
  key: 'd864412408a9edab87a0',
  secret: '63a3d264c0187063c2bf',
  cluster: 'ap2',
  encrypted: true
});
pusher.trigger('my-channel', 'my-event', {
  'message': 'hello world'
});
