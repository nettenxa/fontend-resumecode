import React, { Component } from 'react';
import '../../../../App.css';
import axios from 'axios';
import TeamCard from './Show/TeamCard';

const back = () => {
  window.location.href = "/project";
};

class project_09 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/teams')
      .then(res => {
        this.setState({
          teams: res.data
        })
        console.log("res",res)
      })
      .catch(err => {
        console.log('Error from project_09');
      })
  };


  render() {
    const team = this.state.teams;
    console.log("AA+>",team)
    let teamList;

    if (!team) {
      teamList = "there is no recored!";
    } else {
      teamList = team.map((team, k) =>
        <TeamCard team={team} key={k} />
      );
    }

    return (
      <div className="App">
        <button className="btn btn-outline-danger blue btn-left"  onClick={back}>Back</button>
           
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Team List</h2>
            </div>
            
          </div>
          <div className="list">
            {teamList}
          </div>
        </div>
      </div>
    );
  }
}

export default project_09;
