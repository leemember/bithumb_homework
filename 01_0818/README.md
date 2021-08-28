# 🌅 함수 메서드를 활용해보자 (8/18 수)

## 👉 과제 미션

```
- map
- concat
- filter
- 화살표 함수
```

<br />

## 📂 폴더 구조

```
📦 src
 ┣ 📂components
 ┃ ┃ ┣ 📜 Arrow.js
 ┃ ┃ ┣ 📜 Concat.js
 ┃ ┃ ┣ 📜 Filter.js
 ┃ ┃ ┗ 📜 Map.js
 ┃ ┣ 📜 App.js
 ┗ ┗ 📜 index.js
```

<br />

## map 함수란 ?

```
import React from "react";

class Map extends React.Component {

  //📍현재 상태
  state = {
    movieName: ["루카", "소울", "인사이드 아웃", "업"],
    img: [
      "https://i.ytimg.com/vi/D6eGQ9pZOiM/maxresdefault.jpg",
      "http://image.kmib.co.kr/online_image/ 2021/0106/611815110015394239_2.jpg",
      "https://nimage.g-enews.com/phpwas/restmb_allidxmake.php? idx=5&simg=201507151659497219517_20150715170143_01.jpg",
      "https://vana.kr/wp/wp-content/uploads/2016/07/pixar_up.jpg",
    ],
  };

  render() {
    //📍초기값 선언
    let arr = this.state.movieName;
    let str = [];

    //📍1. 고전적인 방법의 반복문이다.
    // 배열의 길이를 arr.length를 사용하여 반복문을 돌려준다.
    for (let i = 0; i < arr.length; i++) {
      str.push(
        <b key={i} style={{ marginRight: "200px", color: "skyblue" }}>
          {arr[i]}
        </b>
      );
    }

    //📍최산방법 : map 함수
    // 이미지가 있는 만큼 이미지 배열을 뿌려준다.
    let movieArr = this.state.img.map((item, i) => {
      return <img key={i} src={item} width="300" height="200" alt={item} />;
    });

    return (
      <div style={{ fontSize: "2rem" }}>
        {movieArr} <br />
        <p>{str}</p>
      </div>
    );
  }
}

export default Map;
```

> 🙆🏻‍♀️ 이처럼 map 함수는 반복문의 기능을 합니다.

```
   let movieArr = this.state.img.map((item, i) => {
      return <img key={i} src={item} width="300" height="200" alt={item} />;
    });
```

<br />

## concat 함수란 ?

```
import React from "react";

class Concat extends React.Component {
  state = {
    iceCream: ["돼지바", "캔디바", "수박바", "구구콘"],
    snack: ["꼬북칩", "새우깡", "라면땅", "수박젤리"],
  };
  render() {
    let iceArr = this.state.iceCream;
    let snackArr = this.state.snack;
    let total = iceArr.concat(snackArr);

    let str = [];

    for (let i = 1; i < total.length; i++) {
      str.push(<b key={i}>{total[i]} &nbsp; </b>);
    }
    return <div>{str}</div>;
  }
}

export default Concat;
```

> 🙆🏻‍♀️ 이처럼 concat 함수는 배열간에 연결해주는 메서드 입니다.

```
  let iceArr = this.state.iceCream;
  let snackArr = this.state.snack;
  let total = iceArr.concat(snackArr);
```

<br />

## filter 함수란 ?

```
import React from "react";

class HomeFilter extends React.Component {
  render() {
    const names = [
      "Leehyunju",
      "Leemember",
      "KimJava",
      "KimPython",
      "ParkHyunju",
      "LeeSuhyun",
    ];
    return (
      <>
        <h3>이름에 알파벳 L이 포함된 사람들만 필터링 하기</h3>
        <ul style={{ fontSize: "1.5rem" }}>
          {names
            .filter((name) => name.includes("L"))
            .map((item) => (
              <li>{item}</li>
            ))}
        </ul>
      </>
    );
  }
}

export default HomeFilter;
```

> 🙆🏻‍♀️ 이처럼 filter 함수는 배열에서 특정 조건만 주어 조건에 해당하는 값들만 걸러내줍니다.

<br />

## 화살표 함수란 ?

```
const Arrow = () => {
  return "화살표 함수 입니다!";
};

export default Arrow;
```

> 🙆🏻‍♀️  화살표 함수의 기본 공식 입니다. const 함수명 = () => { return }

<br />


## 🖥 화면 결과물

![](https://images.velog.io/images/leemember/post/d776c3be-4e2d-48be-8b11-1ca26c3a28be/1%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8D%E1%85%A2%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A6_%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%86%AF.png)