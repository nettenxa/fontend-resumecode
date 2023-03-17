import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
// import {PythonShell} from 'python-shell';
import { Link } from "react-router-dom";
import NameShow from "./Show/nameShow";
import FlagShow from "./Show/flagShow";

class predict extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "NetteN",
      teams: [],
      select: "NetteN",
      win: "",
      lose: "",
    };
  }

  back = () => {
    const { state } = this.props.location;
    const football = state.split(",");
    let teamOne = football[0];

    console.log("AA>>> ", teamOne);
    window.location.href = "/show-team/" + teamOne;
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/teams")
      .then((res) => {
        this.setState({
          teams: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowTeamList");
      });
  }

  pythonExec(result) {
    if (result != "NetteN") {
      console.log(result, "result");
      var winer = result.split(",")[0];
      var loser = result.split(",")[1];
      this.state.win = winer;
      this.state.lose = loser;
      // console.log(this.state.win,"-",this.state.lose)
      return (
        <div>
          <h4>{winer}</h4>
          <h4>{loser}</h4>
        </div>
      );
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { state } = this.props.location;
    const input = this.state.teams;
    const football = state.split(",");
    let teamOne = football[0];
    let teamTwo = football[1];
    let teamListOne = input.filter((team) => {
      return team._id == teamOne;
    });
    let teamListTwo = input.filter((team) => {
      return team._id == teamTwo;
    });
    var win = teamListOne.map((team) => {
      return team.Team;
    })[0];
    var lose = teamListTwo.map((team) => {
      return team.Team;
    })[0];
    console.log(win, "-", lose);
    const res = {
      win,
      lose,
    };
    console.log(res, "res");
    axios
      .post("/predict", res)
      .then((out) => {
        this.setState({
          posts: out.data,
        });
        console.log("-->", out.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const post = this.state.posts;
    console.log(post);
    const { state } = this.props.location;
    const input = this.state.teams;

    const football = state.split(",");
    let teamOne = football[0];
    let teamTwo = football[1];
    let teamListOne = input.filter((team) => {
      return team._id == teamOne;
    });
    let teamListTwo = input.filter((team) => {
      return team._id == teamTwo;
    });

    let showOne = teamListOne.map((book, k) => (
      <NameShow book={book} key={k} />
    ));
    let showTwo = teamListTwo.map((book, k) => (
      <NameShow book={book} key={k} />
    ));
    let play = teamListOne.map((book, k) => <FlagShow book={book} key={k} />);
    let playtwo = teamListTwo.map((book, k) => (
      <FlagShow book={book} key={k} />
    ));

    return (
      <div className="ShowTeamList">
        <button
          className="btn btn-outline-danger blue btn-left"
          onClick={this.back}
        >
          Back
        </button>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <br />
                <h2 className="text-center">
                  <b>Predict the Winner</b>
                </h2>
                <h5 className="text-center">
                  {showOne} VS {showTwo}
                </h5>
                <form onSubmit={this.handleSubmit}>
                  <button className="btn btn-success button-size" type="submit">
                    Please Click!!
                  </button>
                </form>
                <h1 className="text-center">{this.pythonExec(post)}</h1>
                <br></br>
                <div className="center">
                  {play}
                  <h5>VS</h5>
                  {playtwo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default predict;
