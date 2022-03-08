import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

import { store } from "./redux";
import ThemeConfig from "./theme";
import Navigations from "./routes";
import SplashScreen from "./screens/splash";

import "./assets/css/main.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <ThemeConfig>{isLoaded ? <Navigations /> : <SplashScreen />}</ThemeConfig>
    </Provider>
  );
};

export default App;
