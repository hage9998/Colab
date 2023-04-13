import { FC } from "react";
import ButtonAppBar from "./components/appBar";
import Routes from "./routes";

const App: FC = () => {
  return (
    <>
      <ButtonAppBar />
      <Routes />
    </>
  );
};

export default App;
