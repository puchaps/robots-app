import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import setGettingData from "./redux/thunks/robots-thunk/robotsThunk";

import Loader from "./components/custom-components/loader/Loader";
import Header from "./components/header-components/header/Header";
import SwitchPages from "./pages/switch-pages/SwitchPages";

const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.robots.loader);

  const handleUseEffect = useCallback(() => {
    dispatch(setGettingData());
  }, [dispatch]);

  useEffect(() => {
    handleUseEffect();
  }, [handleUseEffect]);

  return (
    <Loader onLoader={loader}>
      <Header />
      <SwitchPages />
    </Loader>
  );
};

export default App;
