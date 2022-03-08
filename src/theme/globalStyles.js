import { withStyles } from "@material-ui/styles";

const GlobalStyles = withStyles((theme) => ({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    html: {
      width: "100%",
      height: "100%",
      "-ms-text-size-adjust": "100%",
      "-webkit-overflow-scrolling": "touch",
    },
    body: {
      width: "100%",
      height: "100%",
      fontFamily: "Amarante !important",
      backgroundColor: "#fff !important",
    },
    "#root": {
      width: "100%",
      height: "100%",
    },
    label: {
      fontFamily: "Amarante !important",
      fontWeight: "400 !important",
      lineHeight: "20px !important",
      color: "#000 !important",
      fontSize: "16px !important",
      letterSpacing: "normal !important",
      position: "relative !important",
      transform: "none !important",
    },
    // input: {
    //   backgroundColor: "#fff",
    //   border: "2px solid #000000",
    //   fontFamily: "Amarante",
    //   borderRadius: "6px",
    //   paddingLeft: "10px",
    //   fontWeight: "400",
    //   color: "#000",
    //   height: "auto",
    // },
    a: {
      textDecoration: "none",
      color: theme.palette.secondary.main,
    },
  },
}))(() => null);

export default GlobalStyles;
