import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const back = () => {
    window.location.href = "/project";
  };

class project_05 extends Component {
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
        console.log("Error from project_05");
      });
  }

  render() {
    const team = this.state.teams;
    // console.log("AA+>",team)
    let teamList;

    return (
        <div className="project_05 App">
        <button className="btn btn-outline-danger blue btn-left"  onClick={back}>Back</button>
           
        <div className="container">
          <div className="row">
            <div className="col-md-12">
        <h1>2021 April</h1>
        <h5>
        a participant of the Build Data Skills
                    Online with DataCamp
          <br></br>
          <br></br>
          <br></br>

          Training in the introduction to Python and SQL
        </h5>
        <br></br>
        <a
          class="btn btn-success"
          href="https://www.datacamp.com/profile/atibodeemah-c719913b-7b1a-4d61-81be-f78fecf4571a"
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

export default project_05;
