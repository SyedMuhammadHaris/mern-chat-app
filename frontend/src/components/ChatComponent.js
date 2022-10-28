import { ChatState } from "../context/ChatProvider";
import { useAuthContext } from "../hooks/useAuthContext";
import ChatBox from "./ChatBox";
import MyChat from "./MyChat";

const ChatComponent = () => {
  const { user } = useAuthContext();
  return (
    <div className="chatComp">
      {user && <MyChat />}
      {user &&  <ChatBox />}
    </div>
  )
}

export default ChatComponent