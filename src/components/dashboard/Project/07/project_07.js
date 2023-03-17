import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import nsc from "../../Image/NSC20202_24p13n0083.jpg";

const back = () => {
  window.location.href = "/project";
};

class project_07 extends Component {
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
        console.log("Error from project_07");
      });
  }

  render() {
    const team = this.state.teams;
    // console.log("AA+>",team)
    let teamList;

    return (
      <div className="project_07">
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
