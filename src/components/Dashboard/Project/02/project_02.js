import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import hpc_1 from "../../Image/122986610_10224198535936454_6023256008870043173_n.jpg";

const back = () => {
  window.location.href = "/project";
};

class project_02 extends Component {
  render() {
    return (
      <div className="project_02 App">
        <button className="btn btn-outline-danger blue btn-left" onClick={back}>
          Back
        </button>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>2020</h1>
              <h5>
                <b>APAC HPC-AI Competition 2021</b>
                <br></br>
                <br></br>
                Joining the other 12 students of Thammasat University (TU),
                Lampang team to benchmarking HPC and AI models on the National
                Supercomputer Centre of Singapore, responsible in natural
                language processing model (BERT)
              </h5>
            </div>
            <img src={hpc_1} alt="hpc" />
          </div>
        </div>
      </div>
    );
  }
}

export default project_02;
