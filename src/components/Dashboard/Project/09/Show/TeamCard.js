import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = (props) => {
    const team = props.team;
    // console.log("team",team)
    return (
        <div>
            <Link to={`/show-team/${team._id}`}>
                <div className="card-container">
                    <br></br>
                    <h4 className='textcenter'>
                        {team.Team}
                    </h4>
                </div>
            </Link>
        </div >
    )
};

export default TeamCard;