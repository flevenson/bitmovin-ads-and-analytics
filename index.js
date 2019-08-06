var loginButton = document.querySelector('.login-button')

var config = {
  key: '15f3c647-18b6-4ba6-a58e-d6a61355cbcc',
  analytics: {
    key: '9f434e50-8d3a-408b-a6da-e89060f4719f',
    cdnProvider: bitmovin.analytics.CdnProviders.AKAMAI,
    userId: 'user1',
    videoId: 'video1',
    videoTitle: 'A descriptive video title',
    customData1: 'some metadata'
  },
  "advertising": {
    "adBreaks": [
      {
        "tag": {
          "url": "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/32573358/skippable_ad_unit&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=http%3A%2F%2Freleasetest.dash-player.com%2Fads%2F&description_url=[description_url]&correlator=[random]",
          "type": "vast"
        },
        "id": "preRollAd",
        "position": "pre"
      }
    ]
  }
};

var source = {
  dash: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
  hls: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  progressive: [{
    url: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
    type: 'video/mp4'
  }],
  analytics: {
    title: 'video-title',
    videoId: 'video-one'
  },
  poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
};

bitmovin.player.Player.addModule(bitmovin.analytics.PlayerModule);

var playerContainerEl = document.getElementById('player');
var player = new bitmovin.player.Player(playerContainerEl, config);

player.load(source);

var user = false;

var loginUser = function(){
  user = !user
  if(user === true) {
    config.advertising = '';
    player.load(source);
    loginButton.innerText = 'Log Out'
  } else {
    player.ads.schedule({
      tag: {
        url: "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/32573358/skippable_ad_unit&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=http%3A%2F%2Freleasetest.dash-player.com%2Fads%2F&description_url=[description_url]&correlator=[random]",
        type: "vast"
      },
      id: 'preRollAd',
      position: 'pre'
    })
    player.load(source)
    loginButton.innerText = 'Log In'
  }
}

loginButton.addEventListener('click', loginUser)