import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";

import { OverlayButton } from "../../../../components/overlayButton";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import ProfileHeader from "../../../../components/profileHeader";
import Link from "../../../../components/profileScreenLinks";
import BgImage from "../../../../assets/profileScreens/bgimage.png";
import ProfileIamge from "../../../../assets/profileScreens/profile-img.png";
import Icon from "../../../../assets/profileScreens/add-group.png";
import Info from "./info";
import Video from "./video";

const useStyles = makeStyles(() => ({}));

const Group = () => {
  const [proifileScreen] = useState(true);
  const [group] = useState(true);
  const [state, setState] = useState({
    feed: false,
    info: true,
    photos: false,
    videos: false,
    members: false,
  });
  const { feed, info, photos, videos, members } = state;
  return (
    <Box>
      <Header />
      <div style={{ position: "relative", top: "60px", paddingBottom: "75px" }}>
        <ProfileHeader
          bgImage={BgImage}
          ProfileImage={ProfileIamge}
          name="Group Name"
          bio="Here’s where they can type something about themselves if they want. They can leave links and emojis and all kinds of things."
        />
        <Link
          setState={setState}
          feed={feed}
          info={info}
          photos={photos}
          videos={videos}
          members={members}
          group={group}
        />

        <Box>{info ? <Info /> : videos ? <Video /> : null}</Box>
      </div>

      <Footer />
    </Box>
  );
};
export default Group;
