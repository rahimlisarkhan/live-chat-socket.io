import { Fragment } from "react";
import { ChatContainer } from "../feature/chat/ChatContainer";
import GlobalStyle from "../style/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ChatContainer/>
    </Fragment>
  );
}

export default App;
