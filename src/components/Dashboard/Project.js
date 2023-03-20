import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Box from "@mui/material/Grid";

const project_1 = () => {
  window.location.href = "/project_01";
};
const project_2 = () => {
  window.location.href = "/project_02";
};
const project_3 = () => {
  window.location.href = "/project_03";
};
const project_4 = () => {
  window.location.href = "/project_04";
};
const project_5 = () => {
  window.location.href = "/project_05";
};
const project_6 = () => {
  window.location.href = "/project_06";
};
const project_7 = () => {
  window.location.href = "/project_07";
};
const project_8 = () => {
  window.location.href = "/project_08";
};
const project_9 = () => {
  window.location.href = "/project_09";
};

const image = () => {
  window.location.href = "/image";
};

class Project extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="row">
            <div className="landing-copy col s12">
              <h1 style={{ color: "green" }}>Project</h1>
              <h3 style={{ color: "red" }}>Ordered-Lists in Project</h3>

              <div style={{ display: "inline", float: "left" }}>
                <br></br>
                {/* <h5 style={{ color: 'red' }}>List-Decimal</h5> */}
                <ol style={{ listStyleType: "decimal" }}>
                  <li onClick={project_1}>
                    <b>2018: </b>International Collegiate Programming Contest at
                    Mahidol University{" "}
                  </li>
                  <li onClick={project_2}>
                    <b>2020: </b>APAC HPC-AI Competition 2021
                    <br></br>
                    Joining the other 12 students of Thammasat University (TU),
                    Lampang team to benchmarking HPC and AI models on the
                    National Supercomputer Centre of Singapore, responsible in
                    natural language processing model (BERT)
                  </li>
                  <li onClick={project_3}>
                    <b>2021 Feb: </b>co-author of a paper receiving the Very
                    Good Paper award at The Asia Undergraduate Conference in
                    Computing (AUCC)
                    <br></br>
                    <b>Title: </b>Thai Rice Price Prediction Model based on Long
                    Short-Term Memory (a team of two students)
                  </li>
                  <li onClick={project_4}>
                    <b>2021 March: </b>a member of a team to reach the final
                    round in the Thailand National Software Contest (NSC 2021)
                    <br></br>
                    <b>Project: </b>Prediction Model for Rice Yield and Price in
                    Thailand (Passed to the final round, the team of two
                    students).
                  </li>
                  <li onClick={project_5}>
                    <b>2021 April: </b>a participant of the Build Data Skills
                    Online with DataCamp
                    <br></br>
                    Training in the introduction to Python and SQL
                  </li>
                  <li onClick={project_6}>
                    <b>2022 Feb: </b>a co-author of a paper receiving the
                    Excellence paper award at the Asia Undergraduate Conference
                    in Computing (AUCC)
                    <br></br>
                    <b>Title: </b>Walk A Go: Multi-purpose Walking Stick to
                    Assist and Track Users via LINE Application (the team of one
                    students)
                  </li>
                  <li onClick={project_7}>
                    <b>2022 Feb: </b>a member of a team to reach the final round
                    in the Thailand National Software Contest (NSC 2022)
                    <br></br>
                    <b>Project: </b>ElCare: Multi-purpose Walking Stick for
                    Elderly and Visually Impaired
                  </li>
                  <li onClick={project_8}>
                    <b>2022 March: </b>a co-author of a paper accepted to
                    present at the IEEE International Conference on Cybernetics
                    and Innovations 2022 (ICCI)
                    <br></br>
                    <b>Project: </b>Hybrid ARIMAX and LSTM Model to Predict Rice
                    Export Price in Thailand (three authors)
                  </li>
                  <li onClick={project_9}>Football Predict</li>
                </ol>
              </div>

              <button
                className="btn btn-outline-danger blue btn-left"
                onClick={image}
              >
                Image
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Project);
