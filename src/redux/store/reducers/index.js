import { combineReducers } from "redux";
import authReducer from "./authReducer";
// Music
import messageReducer from "./messageReducer";
import musicReducer from "./musicReducers/songReducer";
import albumMusicReducer from "./musicReducers/albumReducer";
import artistMusicReducer from "./musicReducers/artistReducer";
import manageMusicReducer from "./musicReducers/manageReducer";
import playlistMusicReducer from "./musicReducers/playlistReducer";
// Settings
import generalReducer from "./settingReducer/generalReducer";
import mainSettingReducer from "./settingReducer/mainSettingReducer";
import networkReducer from "./settingReducer/networkReducer";
import settingNotificationReducer from "./settingReducer/notificationReducer";
import passwordReducer from "./settingReducer/passwordReducer";
import privacyReducer from "./settingReducer/privacyReducer";
// Video
import videoArtistReducer from "./videoReducers/artistReducer";
import videoChannelReducer from "./videoReducers/channelReducer";
import manageVideoReducer from "./videoReducers/manageReducer";
import videoPlaylistReducer from "./videoReducers/playlistReducer";
import videoReducer from "./videoReducers/videoReducer";

import albumReducer from "./albumReducer";

import articleReducer from "./articleReducer";

import businessReducer from "./businessReducers";

import commonReducer from "./commonReducers";

import contestReducer from "./contestReducer";

import eventReducer from "./eventReducers";

import feedReducer from "./feedReducer";

import groupReducer from "./groupReducer";

import memberReducer from "./memberReducer";

import notificationReducer from "./notificationReducer";

import pageReducer from "./pageReducers";

import prayerReducer from "./prayerReducers";

import statusReducer from "./statusReducer";

import textReducer from "./textReducer";

export default combineReducers({
  auth: authReducer,
  message: messageReducer,

  music: musicReducer,
  albumMusic: albumMusicReducer,
  artistMusic: artistMusicReducer,
  manageMusic: manageMusicReducer,
  musicPlaylist: playlistMusicReducer,

  genealSettings: generalReducer,
  mainSetting: mainSettingReducer,
  networkSetting: networkReducer,
  notifySettings: settingNotificationReducer,
  passwordSetting: passwordReducer,
  privacySetting: privacyReducer,

  videoArtist: videoArtistReducer,
  videoChannel: videoChannelReducer,
  manageVideo: manageVideoReducer,
  videoPlaylist: videoPlaylistReducer,
  video: videoReducer,

  album: albumReducer,

  article: articleReducer,

  business: businessReducer,

  common: commonReducer,

  contest: contestReducer,

  event: eventReducer,

  feed: feedReducer,

  group: groupReducer,

  member: memberReducer,

  notification: notificationReducer,

  page: pageReducer,

  prayer: prayerReducer,

  status: statusReducer,

  text: textReducer,
});
