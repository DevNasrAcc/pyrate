import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material";

import { OverlayButton } from "../../../../components/overlayButton";
import Footer from "../../../../components/footer";
import Header from "../../../../components/header";
import ProfileHeader from "../../../../components/profileHeader";
import Link from "../../../../components/profileScreenLinks";
import BgImage from "../../../../assets/profileScreens/bgimage.png";
import ProfileIamge from "../../../../assets/profileScreens/profile-img.png";
import Icon from "../../../../assets/profileScreens/add-group.png";
import Info from "./info";
import Video from "./video";

const useStyles = makeStyles(() => ({}));

const MyGroup = () => {
  const history = useHistory();

  const [proifileScreen] = useState(true);
  const [page] = useState(true);
  const [state, setState] = useState({
    feed: false,
    info: true,
    photos: false,
    videos: false,
    subscribers: false,
  });
  const { feed, info, photos, videos, subscribers } = state;
  return (
    <Box>
      <Header />
      <div style={{ position: "relative", top: "60px", paddingBottom: "75px" }}>
        <ProfileHeader
          bgImage={BgImage}
          ProfileImage={ProfileIamge}
          name="Page Name"
          bio="Here’s where they can type something about themselves if they want. They can leave links and emojis and all kinds of things."
          page={page}
        />

        <Link
          setState={setState}
          feed={feed}
          info={info}
          photos={photos}
          videos={videos}
          subscribers={subscribers}
          page={page}
        />

        <Box>{info ? <Info /> : videos ? <Video /> : null}</Box>
      </div>
      <div>
        <OverlayButton
          icon={Icon}
          proifileScreen={proifileScreen}
          onClick={() => history.push("/create-page")}
        />
      </div>

      <Footer />
    </Box>
  );
};
export default MyGroup;
