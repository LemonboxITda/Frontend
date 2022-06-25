// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { 
  Home,
  Login,
  Signup,
  Logout,
  Calendar, 
  Community, 
  MyPage,
  Post,
  PostDetail,
  NotFound,
} from './pages';
import {
  Header,
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/community" element={<Community />} />
            <Route path="/post" element={<Post />} />
            <Route path="/postdetail/:id" element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
