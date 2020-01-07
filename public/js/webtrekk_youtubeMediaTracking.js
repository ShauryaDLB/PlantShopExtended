var playerInfoList = [
  {
    id: "video1",
    height: "390",
    width: "640",
    videoId: "B8xHukKq1Uk",
    wtParams: {
      // ck3: "event parameter 3 value",
      // mg1: "YouTube Video - Media Category",
      // cs1: "Session parameter 1 value",
      // cb1: "eCommerce parameter 1 value",
      // ck1: "ck1 value",
      // ck2: "ck2 value"
    }
  },
  {
    id: "video2",
    height: "390",
    width: "640",
    videoId: "A4pmZ45BY1I",
    wtParams: {}
  },
  {
    id: "video3",
    height: "390",
    width: "640",
    videoId: "R0BPcvlguJA",
    wtParams: {}
  }
];

var wt_ytPlayerInfo = {};

var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  if (!playerInfoList) return;

  for (var i = 0; i < playerInfoList.length; i++) {
    var curplayer = createPlayer(playerInfoList[i], i);
  }
}
function createPlayer(playerInfo, index) {
  window["wt_ytPlayerInfo"]["a" + playerInfo.id] = {};
  window["wt_ytPlayerInfo"]["a" + playerInfo.id]["sourceIndex"] = index;
  window["wt_ytPlayerInfo"]["a" + playerInfo.id]["isInit"] = false;
  return new YT.Player(playerInfo.id, {
    height: playerInfo.height,
    width: playerInfo.width,
    videoId: playerInfo.videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // console.log("onPlayerReady: ", event)
}

// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
  wt_webtrekk_youtube(event);
}

function wt_webtrekk_youtube(eventData) {
  if (eventData.data > -1 && eventData.data < 3) {
    window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["thisRequest"] = {
      mi: eventData.target.getVideoData().title,
      mt1: eventData.target
        .getCurrentTime()
        .toString()
        .split(".")[0],
      mt2: eventData.target
        .getDuration()
        .toString()
        .split(".")[0],
      para:
        window["playerInfoList"][
          window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["sourceIndex"]
        ]["wtParams"],
      bw: "",
      vol: eventData.target
        .getVolume()
        .toString()
        .split(".")[0],
      mut: (function(m) {
        return m ? "1" : "0";
      })(eventData.target.isMuted())
    };

    if (!window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["isInit"]) {
      window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["thisRequest"][
        "mk"
      ] = "init";

      window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["isInit"] = true;

      // webtrekk send media init
      var r =
        window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["thisRequest"];
      wt_sendinfo_media(r.mi, r.mk, r.mt1, r.mt2, r.para, r.bw, r.vol, r.mut);
    }
    var r =
      window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["thisRequest"];
    clearInterval(window["wt_ytPlayerInfo"]["pos"]);
    switch (eventData.data) {
      case 1: {
        window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["thisRequest"][
          "mk"
        ] = "play";
        window["wt_ytPlayerInfo"]["pos"] = setInterval(function() {
          wt_sendinfo_media(
            r.mi,
            "pos",
            Math.floor(eventData.target.getCurrentTime()) + "",
            r.mt2,
            r.para,
            r.bw,
            r.vol,
            r.mut
          );
        }, 15000);
        if (
          window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["lastRequest"]
        ) {
          var requestDiff = Math.abs(
            window["wt_ytPlayerInfo"]["a" + eventData.target.a.id][
              "thisRequest"
            ]["mt1"] -
              window["wt_ytPlayerInfo"]["a" + eventData.target.a.id][
                "lastRequest"
              ]["mt1"]
          );
          if (requestDiff !== 0) {
            wt_sendinfo_media(
              r.mi,
              "seek",
              window["wt_ytPlayerInfo"]["a" + eventData.target.a.id][
                "lastRequest"
              ]["mt1"],
              r.mt2,
              r.para,
              r.bw,
              r.vol,
              r.mut
            );
          }
        }
        break;
      }
      case 2: {
        window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["thisRequest"][
          "mk"
        ] = "pause";
        break;
      }
      case 0: {
        window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["thisRequest"][
          "mk"
        ] = "eof";
        break;
      }
    }

    setTimeout(function() {
      wt_sendinfo_media(r.mi, r.mk, r.mt1, r.mt2, r.para, r.bw, r.vol, r.mut);
      window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["lastRequest"] =
        window["wt_ytPlayerInfo"]["a" + eventData.target.a.id]["thisRequest"];
      window["wt_ytPlayerInfo"]["a" + eventData.target.a.id][
        "thisRequest"
      ] = {};
    }, 300);
  }
}
