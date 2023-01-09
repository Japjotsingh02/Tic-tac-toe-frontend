import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import EntryPage from './pages/EntryPage/EntryPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Homepage from './pages/Homepage/Homepage';
import {StreamChat} from "stream-chat";
import { useState } from 'react';
import Cookies from 'universal-cookie';

function App() {
  const api_key=process.env.STREAM_CHAT_API_KEY;
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  };

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        setIsAuth(true);
      });
  }
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<EntryPage/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/home' element={<Homepage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
