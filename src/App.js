// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import {
  useReducer,
  createContext,
  useEffect
} from "react";
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
  MyPageComList,
  NotFound,
} from './pages';
import {
  Header,
} from './components';

export const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        token: action.token,
        id: action.id,
        loginId: action.loginId,
      };
    case "logout":
      return {
        token: null,
        id: null,
        loginId: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    token: null,
    id: null,
    loginId: null,
  });

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("loggedInfo")));

    const initUserInfo = async () => {
      const loggedInfo = await JSON.parse(
        localStorage.getItem("loggedInfo")
      );
      console.log("-------------새로 고침------------");
      console.log(loggedInfo);

      if (loggedInfo) {
        const { token, id, loginId } = loggedInfo;
        await dispatch({
          type: "login",
          token: token,
          id: id,  // 유저 고유 id
          loginId: loginId,  // 유저 아이디
        });
      } else {
        await dispatch({
          type: "logout",
        });
      }
    };
    initUserInfo();
  }, [state.token]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ state, dispatch }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/community" element={<Community />} />
          <Route path="/write" element={<Post />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/mypage/community/:id" element={<MyPageComList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
