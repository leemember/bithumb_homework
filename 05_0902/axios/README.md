# Axios

## 👉 과제 미션

- JSON 데이터 : https://jsonplaceholder.typicode.com/photos
- axios 응용
- id, title, url, thumbnailUrl 데이터 정보 표시하기

<br>

## ⚙️ install

```
yarn add axios
yarn add styled-components
```

<br>

## 📂 폴더 구조

```
📦 src
 ┣ 📂components
 ┃ ┃ ┗ 📜 Photo.js
 ┗ ┗ 📜 App.js
```

<Br />

## 📜 사용한 자료

### 배경색

- https://uigradients.com/#BrokenHearts

### api 주소

- https://jsonplaceholder.typicode.com/photos

<br />

## 🖥 화면 결과물

![](https://images.velog.io/images/leemember/post/de85b0c6-9d06-47f9-a0fe-a03fc6c563b5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-07%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.32.33.png)

![](https://images.velog.io/images/leemember/post/80815b4a-f5e2-4e85-a982-06e7548d15c5/axios.gif)

<br />

## 🐥 App.js 코드 설명

```
import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import Photo from "./components/Photo";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => setPhotos(data));
  }, []);

  console.log(photos);

  return (
    <main>
      <Title>😊 현주의 컬러 박스 모음집 🎁</Title>
      <Container>
        <GlobalStyle />

        {photos.map((photo, index) => (
          <Photo
            key={index}
            id={photo.id}
            title={photo.title}
            thumbnailUrl={photo.thumbnailUrl}
          />
        ))}
      </Container>
    </main>
  );
}

export default App;

```

> 👇🏻 axios를 통해 HTTP요청을 보내는 코드. 이렇게하면 컴포넌트가 렌더링(화면에 그려지는 것)될 때마다 useEffect가 실행됩니다. then()에서는 HTTP요청을 통해 받아온 데이터를 처리할 수 있습니다. <br /><br />
> 이 때, useEffect 내부에서 state을 변경시킨 결과로 인해 컴포넌트의 재렌더링이 일어나게 되는데, 렌더링시에는 다시 useEffect가 실행되니 아래와 같이 무한렌더링이 일어나게 됩니다. ⭐️ 이를 해결하기 위해 **useEffect에 두번째 인자를 전달**합니다. 두 번째 인자로 배열을 전달하면 렌더링시에 배열 내의 요소가 변화될 때에만 useEffect를 실행합니다. 빈 배열( [] )을 전달하면 변화를 감지할만한 요소 자체가 없으므로 useEffect는 최초 렌더링시에 한번만 실행되는 것이 보장됩니다.

```
const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
  📍.then(({ data }) => setPhotos(data));
  }, 👉 []);

  console.log(photos);
```

> 👇🏻 Photo 박스 출력 ! photos에 저장된 값을 화면에 출력해줍니다. photos안에 있는 여러개의 데이터 요소를 모~~두 출력하기 위해 자바스크립트의 Array.map() 메서드를 사용했습니다. 배열함수인 map을 사용할 때에는 key 값을 부여해주는 것은 필수조건 입니다. 그러므로 Photo 컴포넌트에 key값을 넣어주었습니다.

```
{photos.map((photo, index) => (
    <Photo
      key={index}
      id={photo.id}
      title={photo.title}
      thumbnailUrl={photo.thumbnailUrl}
    />
  ))}
```

<br />

## 🐥 컴포넌트 Photo.js 코드 설명

```
const Photo = ({ title, id, thumbnailUrl }) => {
  return (
    <Post>
      <Title>
        <p>{id}</p>
        <h4>{title}</h4>
      </Title>
      <Body>
        <img src={thumbnailUrl} alt={id} />
      </Body>
    </Post>
  );
};
```

> 내가 불러온 data에 값들을 부모컴포넌트로 props로 받아오기 위해 설정해줍니다. `{ title, id, thumbnailUrl }`이 명칭은 https://jsonplaceholder.typicode.com/photos
> 여기에 담긴 data의 value 값 이름 입니다.
