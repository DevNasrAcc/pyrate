import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../protectedRoutes";
import ActivityFeed from "../../screens/private/activityFeed";
import MyProfile from "../../screens/private/myProfile";
import Search from "../../screens/private/search";
import Messages from "../../screens/private/messages";
import Notifications from "../../screens/private/notifications";
import Inbox from "../../screens/private/messages/inbox";
import EditInfo from "../../screens/private/myProfile/editInfo";
// Profile Screens
import MyGroup from "../../screens/private/profileScreens/myGroup";
import MyPage from "../../screens/private/profileScreens/myPage";
import Page from "../../screens/private/profileScreens/pages";
import Group from "../../screens/private/profileScreens/groups";
import CreateGroup from "../../screens/private/profileScreens/myGroup/createGroup";
import CreatePage from "../../screens/private/profileScreens/myPage/createPage";
// Channels
import PageChannel from "../../screens/private/channels/pages";
import GroupChannel from "../../screens/private/channels/groups";
import GroupVideoChannel from "../../screens/private/channels/groupVideos";
import PageVideoChannel from "../../screens/private/channels/pageVideos";
import CreateChannel from "../../screens/private/channels/createChannel";
// Album
import CreateAlbum from "../../screens/private/album/createAlbum";
// Feedback
import Feedback from "../../screens/private/feedback";
// Settings
import Settings from "../../screens/private/settings";
// Photo View
import PhotoView from "../../screens/private/myProfile/photoView";
// Video View
import VideoView from "../../screens/private/myProfile/videoView";
// Activity Groups
import ActivityGroup from "../../screens/private/activityGroup";
import AdvancedActivity from "../../screens/private/activityGroup/advancedActivity";
// Search
import Members from "../../screens/private/search/memberSearch";
import Groups from "../../screens/private/search/groupSearch";
import Pages from "../../screens/private/search/pageSearch";
import MyGroups from "../../screens/private/search/myGroupSearch";
import MyPages from "../../screens/private/search/myPageSearch";
import Photos from "../../screens/private/search/photoSearch";
import Videos from "../../screens/private/search/videoSearch";

const PrivateRoutes = () => {
  return (
    <Switch>
      <Route exact path="/activity-feed" component={ActivityFeed} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/notifications" component={Notifications} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/my-profile" component={MyProfile} />
      <Route exact path="/inbox" component={Inbox} />
      <Route exact path="/edit-info" component={EditInfo} />
      {/* Profile Screens */}
      <Route exact path="/my-group" component={MyGroup} />
      <Route exact path="/my-page" component={MyPage} />
      <Route exact path="/page" component={Page} />
      <Route exact path="/group" component={Group} />
      <Route exact path="/create-group" component={CreateGroup} />
      <Route exact path="/create-page" component={CreatePage} />
      {/* Channels */}
      <Route exact path="/page-channel" component={PageChannel} />
      <Route exact path="/group-channel" component={GroupChannel} />
      <Route exact path="/group-video" component={GroupVideoChannel} />
      <Route exact path="/page-video" component={PageVideoChannel} />
      <Route exact path="/create-channel" component={CreateChannel} />
      {/* Album */}
      <Route exact path="/create-album" component={CreateAlbum} />
      {/* Feedback */}
      <Route exact path="/feedback" component={Feedback} />
      {/* Settings */}
      <Route exact path="/setting" component={Settings} />
      {/* Photo View */}
      <Route exact path="/photo-view" component={PhotoView} />
      {/* Video View */}
      <Route exact path="/video-view" component={VideoView} />
      {/* Warning */}
      <Route exact path="/warning" component={ActivityGroup} />
      <Route exact path="/advanced" component={AdvancedActivity} />
      {/* Search */}
      <Route exact path="/members" component={Members} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/pages" component={Pages} />
      <Route exact path="/my-groups" component={MyGroups} />
      <Route exact path="/my-pages" component={MyPages} />
      <Route exact path="/photos" component={Photos} />
      <Route exact path="/videos" component={Videos} />
    </Switch>
  );
};

export default PrivateRoutes;
