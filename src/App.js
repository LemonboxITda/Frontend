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
  UsersList,
  CommuList,
  UserInfo,
  PostInfo,
} from './pages/admin';
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
        role: action.role,
      };
    case "logout":
      return {
        token: null,
        id: null,
        loginId: null,
        role: null,
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
    role: null,
  });

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("loggedInfo")));

    const initUserInfo = async () => {
      const loggedInfo = await JSON.parse(
        localStorage.getItem("loggedInfo")
      );
      // console.log("-------------새로 고침------------");
      // console.log(loggedInfo);

      if (loggedInfo) {
        const { token, id, loginId, role } = loggedInfo;
        await dispatch({
          type: "login",
          token: token,
          id: id,  // 유저 고유 id
          loginId: loginId,  // 유저 아이디
          role: role, // 관리자일 경우 'ROLE_ADMIN', 일반 'ROLE_USER'
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
          <Route path="/community/page=:page" element={<Community />} />
          <Route path="/community/page=:page/keyword=:keyword" element={<Community />} />
          <Route path="/write/:type/:id" element={<Post />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/mypage/community/:id" element={<MyPageComList />} />
          <Route path="/admin/users" element={<UsersList />} />
          <Route path="/admin/community" element={<CommuList />} />
          <Route path="/admin/user/:id" element={<UserInfo />} />
          <Route path="/admin/post/:id" element={<PostInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
