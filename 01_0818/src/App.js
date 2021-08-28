import React from "react";
import Map from "./components/Map";
import Concat from "./components/Concat";
import Filter from "./components/Filter";
import Arrow from "./components/Arrow";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>1. Map</h1>
        <Map />
        <br />
        <h1>2. concat</h1>
        <p> concat은 배열을 연결해주는 메서드입니다.</p> <Concat />
        <br />
        <br />
        <br />
        <h1>3. filter</h1>{" "}
        <p>
          filter는 배열에서 특정 조건만 주어 조건에 해당하는 값들만 걸러줍니다.
        </p>
        <Filter />
        <br />
        <br />
        <br />
        <h1>4. 화살표 함수</h1> <Arrow />
      </div>
    );
  }
}

export default App;
