import React, { Component } from "react";
// import { parse } from "querystring";
import { Button } from "reactstrap";

class DetailBuah extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <div>ini detail buah</div>
        <div>
          <Button
            color={"primary"}
            onClick={() => console.log("pencet tombol")}
          >
            Ini button reactstrap
          </Button>
          <Button color={"danger"}>Ini button reactstrap</Button>
        </div>
      </div>
    );
  }
}

export default DetailBuah;
