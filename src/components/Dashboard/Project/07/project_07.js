import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import nsc from "../../Image/NSC20202_24p13n0083.jpg";

const back = () => {
  window.location.href = "/project";
};

class project_07 extends Component {
  render() {
    return (
      <div className="project_07 App">
        <button className="btn btn-outline-danger blue btn-left" onClick={back}>
          Back
        </button>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>2022 March</h1>
              <h5>
                a member of a team to reach the final round in the Thailand
                National Software Contest (NSC 2022)
                <br></br>
                <br></br>
                <br></br>
                <b>Project: </b>ElCare: Multi-purpose Walking Stick for Elderly
                and Visually Impaired
              </h5>
            <br></br>
            </div>
            <img src={nsc} alt="hpc" />
          </div>
        </div>
      </div>
    );
  }
}

export default project_07;
