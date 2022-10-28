import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import { ChatState } from "../context/ChatProvider";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState , useEffect} from "react";

const MyChat = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { user } = useAuthContext();

  const { setSelectedChat, chats, setChats } = ChatState();
  const handleSearch = async () => {
    if (!search) {
      console.log("no ");
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat/", config);
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchChats();
  // }, []);

  const accessChat = async (userId) => {
    console.log(userId);

    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/api/chat/`, { userId }, config);
       fetchChats()
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      console.log(chats);
    } catch (error) {
       console.log(error);
    }
  };
  return (
    <Grid
      container
      component={Paper}
      sx={{
        chatSection: {
          width: "100%",
          height: "80vh",
        },
      }}
    >
      <Grid item xs={12} style={{ padding: "10px" }}>
        <TextField
          id="outlined-basic-email"
          label="Search"
          variant="outlined"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch} variant="contained">
          Go
        </Button>
      </Grid>
      <Divider />
      {loading ? (
        <div>Loading</div>
      ) : (
        searchResult?.map((user) => (
          // <UserListItem
          //   key={user._id}
          //   user={user}
          //   handleFunction={() => accessChat(user._id)}
          // />

          <List>
            <ListItemButton key={user.id}  onClick={() => accessChat(user._id)}>
              <ListItemText>{user.email}</ListItemText>
            </ListItemButton>
          </List>
        ))
      )}
      {loadingChat && <div>Loading Chat</div>}
    </Grid>
  );
};

export default MyChat;
