import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ProfileHeader from "../../../components/profileHeader";
import ProfileLinks from "../../../components/profileLinks";
import Feed from "./feed";
import Info from "./info/info";
import Friends from "./friends";
import Video from "./videos";
import Photos from "./photos";
import Likes from "./likes";

import BgImage from "../../../assets/images/bg-image.png";
import ProfileImage from "../../../assets/images/profile-img.png";

const useStyles = makeStyles(() => ({}));

const Profile = () => {
  const imagePost = true;
  const classes = useStyles();
  const [group] = useState(true);
  const [state, setState] = useState({
    feed: true,
    info: false,
    friends: false,
    photos: false,
    videos: false,
    likes: false,
  });
  const { feed, info, friends, photos, videos, likes } = state;

  return (
    <Box>
      <Header />

      <Box sx={{ position: "relative", top: "60px", paddingBottom: "75px" }}>
        <div>
          <ProfileHeader
            bgImage={BgImage}
            ProfileImage={ProfileImage}
            bio=" Here’s where they can type something about themselves if they want. They can leave links and emojis and all kinds of things."
            name="Tyler Nix"
            group={group}
          />
        </div>

        <div>
          <ProfileLinks
            setState={setState}
            feed={feed}
            info={info}
            friends={friends}
            photos={photos}
            videos={videos}
            likes={likes}
          />
        </div>
        {feed ? (
          <Feed imagePost={imagePost} name="Tyler Nix" />
        ) : info ? (
          <Info />
        ) : friends ? (
          <Friends />
        ) : videos ? (
          <Video />
        ) : photos ? (
          <Photos />
        ) : likes ? (
          <Likes />
        ) : null}
      </Box>

      <Footer />
    </Box>
  );
};

export default Profile;
