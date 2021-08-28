import React from "react";

class Map extends React.Component {
  state = {
    movieName: ["루카", "소울", "인사이드 아웃", "업"],
    img: [
      "https://i.ytimg.com/vi/D6eGQ9pZOiM/maxresdefault.jpg",
      "http://image.kmib.co.kr/online_image/2021/0106/611815110015394239_2.jpg",
      "https://nimage.g-enews.com/phpwas/restmb_allidxmake.php? idx=5&simg=201507151659497219517_20150715170143_01.jpg",
      "https://vana.kr/wp/wp-content/uploads/2016/07/pixar_up.jpg",
    ],
  };

  render() {
    let arr = this.state.movieName;
    let str = [];
    for (let i = 0; i < arr.length; i++) {
      str.push(
        <b key={i} style={{ marginRight: "200px", color: "skyblue" }}>
          {arr[i]}
        </b>
      );
    }
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
