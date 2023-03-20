import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const back = () => {
  window.location.href = "/project";
};

class project_06 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/teams")
      .then((res) => {
        this.setState({
          teams: res.data,
        });
        console.log("res", res);
      })
      .catch((err) => {
        console.log("Error from project_06");
      });
  }

  render() {
    const team = this.state.teams;
    // console.log("AA+>",team)
    let teamList;

    return (
      <div className="project_06 App">
        <button className="btn btn-outline-danger blue btn-left" onClick={back}>
          Back
        </button>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>2022 Feb</h1>
              <h5>
                a co-author of a paper receiving the Excellence paper award at
                the Asia Undergraduate Conference in Computing (AUCC)
                <br></br>
                <br></br>
                <br></br>
                <b>Project: </b>Walk A Go: Multi-purpose Walking Stick to Assist
                and Track Users via LINE Application (the team of one students)
              </h5>
              <br></br>
              <a
                class="btn btn-success"
                href="https://ph02.tci-thaijo.org/index.php/RJST/article/view/246316/167874"
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

export default project_06;
