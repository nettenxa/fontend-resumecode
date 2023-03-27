import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import nsc from "../../Image/Poster final final final.jpg";

const back = () => {
  window.location.href = "/project";
};

class project_04 extends Component {
  render() {
    return (
      <div className="project_04 App">
        <button className="btn btn-outline-danger blue btn-left" onClick={back}>
          Back
        </button>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>2021 March</h1>
              <h5>
                a member of a team to reach the final round in the Thailand
                National Software Contest (NSC 2021)
                <br></br>
                <br></br>
                <br></br>
                <b>Project: </b>Prediction Model for Rice Yield and Price in
                Thailand<br></br>(Passed to the final round, the team of two
                students).
              </h5>
              {/* <br></br>
              <a
                class="btn btn-success"
                href="https://ieeexplore.ieee.org/document/9744161"
                target="_blank"
              >
                Click to Link
              </a> */}
            </div>
            <img src={nsc} alt="hpc" />
          </div>
        </div>
      </div>
    );
  }
}

export default project_04;
