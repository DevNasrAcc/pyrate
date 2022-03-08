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
import Videos from "./videos";

const useStyles = makeStyles(() => ({}));

const Group = () => {
  const [proifileScreen] = useState(true);
  const [page] = useState(true);
  const [type] = useState(true);
  const [state, setState] = useState({
    feed: false,
    info: false,
    photos: false,
    videos: true,
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
          type={type}
          pageType="Page Type"
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

        <Box>{videos && <Videos />}</Box>
      </div>
      <div>
        <OverlayButton icon={Icon} proifileScreen={proifileScreen} />
      </div>

      <Footer />
    </Box>
  );
};
export default Group;
