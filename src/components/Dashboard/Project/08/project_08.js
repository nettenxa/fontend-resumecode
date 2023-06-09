import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const back = () => {
    window.location.href = "/project";
  };

class project_08 extends Component {
  render() {
    return (
        <div className="project_08 App">
        <button className="btn btn-outline-danger blue btn-left"  onClick={back}>Back</button>
           
        <div className="container">
          <div className="row">
            <div className="col-md-12">
        <h1>2022 March</h1>
        <h5>
          a co-author of a paper accepted to present at the IEEE <br></br>
          International Conference on Cybernetics and Innovations 2022 (ICCI)
          <br></br>
          <br></br>
          <br></br>

          <b>Project: </b>Hybrid ARIMAX and LSTM Model to Predict Rice Export
          Price in Thailand (three authors)
        </h5>
        <br></br>
        <a
          class="btn btn-success"
          href="https://ieeexplore.ieee.org/document/9744161"
          target="_blank"
        >
          Click to Link
        </a>
        {/* https://ieeexplore.ieee.org/document/9744161 */}
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default project_08;
