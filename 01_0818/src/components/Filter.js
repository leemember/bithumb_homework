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
