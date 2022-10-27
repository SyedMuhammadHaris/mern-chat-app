import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/home" element={<Homepage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
