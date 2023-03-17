import React from 'react';

const ShowName = (props) => {
    const team = props.book;
    // // console.log("team-------------55", team)
    return (
        <div className="card-container-team">
            <br></br>
            <h3 className='textcenter'>
                {team.Team}
                <br></br>
                <br></br>
                <h6>Total Score</h6>
                <h5>Goal: {team.Goal}</h5>
                <h5>Lost: {team.Lost}</h5>
            </h3>
        </div>
    )
};

export default ShowName;