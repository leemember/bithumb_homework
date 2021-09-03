import { Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Album from "./pages/album";
import SignInSide from "./pages/signInSide";
import Signup from "./pages/signup";
import Pricing from "./pages/pricing";

function App() {
  return (
    <>
      <BrowserRouter>
        <ul className="menu">
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/signInSide">사이드 로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <Link to="/album">나의 갤러리</Link>
          </li>
          <li>
            <Link to="/pricing">가격</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" component={Login} exact />
        <Route path="/album" component={Album} />
        <Route path="/signInSide" component={SignInSide} />
        <Route path="/signup" component={Signup} />
        <Route path="/pricing" component={Pricing} />
      </BrowserRouter>
    </>
  );
}

export default App;
