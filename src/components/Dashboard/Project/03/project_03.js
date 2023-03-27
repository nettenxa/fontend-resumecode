import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import AUCC2021 from "../../Image/ORALPOSTER-AWARDS_by-RMUTR_page-0001.jpg";

const back = () => {
  window.location.href = "/project";
};

class project_03 extends Component {
  render() {
    return (
      <div className="project_03 App">
        <button className="btn btn-outline-danger blue btn-left" onClick={back}>
          Back
        </button>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>2021 Feb</h1>
              <h5>
                co-author of a paper receiving the Very Good Paper award at The
                Asia Undergraduate Conference in Computing (AUCC) <br></br>
                <br></br>
                <b>Project: </b>Thai Rice Price Prediction Model based on Long
                Short-Term Memory (a team of two students)
              </h5>
              {/* <br></br> */}
              {/* <a
                class="btn btn-success"
                href="https://ieeexplore.ieee.org/document/9744161"
                target="_blank"
              >
                Click to Link
              </a> */}
            </div>
            <img src={AUCC2021} alt="hpc" />
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default project_03;
