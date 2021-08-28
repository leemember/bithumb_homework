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
