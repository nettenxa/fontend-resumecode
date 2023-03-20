import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import ICT from "../../Image/308875612_391953276485206_4057868143431358982_n.jpg";

const back = () => {
  window.location.href = "/project";
};

class project_01 extends Component {
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
        console.log("Error from project_01");
      });
  }

  render() {
    const team = this.state.teams;
    // console.log("AA+>",team)
    let teamList;

    return (
      <div className="project_01 App">
        <button className="btn btn-outline-danger blue btn-left" onClick={back}>
          Back
        </button>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>2020</h1>
              <h5>
                <b>APAC HPC-AI Competition 2021</b>
                {/* <br></br>
                <br></br> */}
                International Collegiate Programming Contest at Mahidol
University
              </h5>
              <br></br>
              <br></br>
              <br></br>

            </div>
            <img src={ICT} alt="hpc" />
          </div>
        </div>
      </div>
    );
  }
}


export default project_01;
