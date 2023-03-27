import React, { Component } from "react";
import "../../App.css";
import hpc_1 from "./Image/122986610_10224198535936454_6023256008870043173_n.jpg";
import hpc_2 from "./Image/122905494_10224198773222386_4169555480780171494_n.jpg";
import nsc from "./Image/163302744_859034681347680_1540784160584173380_n.jpg";
import nrct_1 from "./Image/260324704_3859286600841529_4993595969629028283_n.jpg";
import nrct_2 from "./Image/260880470_1574408639576660_8027272059323680193_naa.png";

import axios from "axios";

const back = () => {
  window.location.href = "/project";
};

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    axios
      .get("/teams")
      .then((res) => {
        this.setState({
          teams: res.data,
        });
        console.log("res", res);
      })
      .catch((err) => {
        console.log("Error from Image");
      });
  }

  render() {
    const team = this.state.teams;
    // console.log("AA+>",team)
    let teamList;

    return (
      <div className="Image">
        <button className="btn btn-outline-danger blue btn-left" onClick={back}>
          Back
        </button>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Image</h1>
              <h5>2020</h5>
              <h7>HPC-AI</h7>
              <br></br>
              <img src={hpc_1} alt="hpc" /> <img src={hpc_2} alt="hpc" />
              <h5>2021</h5>
              <h7>NSC</h7>
              <br></br>
              <img src={nsc} alt="nsc" /> 
              <br></br>
              <h7>NRCT</h7>
              <br></br>
              <img src={nrct_1} alt="nrct" />  
              <img src={nrct_2} alt="nrct" /> 
              <h5>2022</h5>
              <h7>AUCC</h7>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
