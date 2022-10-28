import { Routes , Route} from 'react-router-dom';
import ChatComponent from './components/ChatComponent';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/chat" element={<ChatComponent />}/>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
