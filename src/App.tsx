import { FC } from "react";
import UserAppBar from "./components/appBar";
import Routes from "./routes";

const App: FC = () => {
  return (
    <>
      <UserAppBar />
      <Routes />
    </>
  );
};

export default App;
