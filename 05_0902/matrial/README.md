# material-UI

## 👉 과제 미션

- 미션 - material 템플릿을 이용하여 화면 구성하기 5페이지 이상

<br>

## ⚙️ install

```
yarn add @material-ui/core
yarn add @material-ui/icon
yarn add react-router-dom
```

<br>

## 📂 폴더 구조

```
📦 src
 ┣ 📂pages
 ┃ ┃ ┣ 📜 login.js 👉 로그인 템플릿
 ┃ ┃ ┣ 📜 signInSide.js 👉 사이드 로그인 템플릿
 ┃ ┃ ┣ 📜 signup.js 👉 회원가입 템플릿
 ┃ ┃ ┣ 📜 pricing.js 👉 가격 템플릿
 ┃ ┃ ┗ 📜 album.js 👉 사진 앨범 템플릿
 ┃ ┣ 📜 App.js
 ┃ ┗ 📜 index.js
```

<Br />

## 🖥 화면 결과물

<br />

### 👉 로그인 템플릿

![](https://images.velog.io/images/leemember/post/c7c4421d-f031-4cc2-9e4a-57daa6989218/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-03%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.52.22.png)

<br />

### 👉 사이드 로그인 템플릿

![](https://images.velog.io/images/leemember/post/051439c8-bf87-450a-8490-73c9dd063688/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-03%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.52.32.png)

<br />

### 👉 회원가입 템플릿

![](https://images.velog.io/images/leemember/post/e0706786-62c2-4ab6-9b87-95bbc4677320/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-03%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.52.35.png)

<br />

### 👉 사진 앨범 템플릿

![](https://images.velog.io/images/leemember/post/bd0f523f-0507-4e08-9d4b-93d7249cfd71/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-03%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.52.38.png)

<br />

### 👉 가격 템플릿

![](https://images.velog.io/images/leemember/post/fef5d43d-bdec-460f-8fe4-8bc6423c1314/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-03%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.52.41.png)

<br />

### 👉 App.js 코드

```
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

```

> 🔍 import { Route, Link, BrowserRouter } from "react-router-dom"을 이용하여 네비게이션바를 생성해 해당 링크에 맞게 페이지가 나올 수 있도록 작업했습니다.
