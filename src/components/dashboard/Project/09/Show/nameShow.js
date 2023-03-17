import React from 'react';

const NameShow = (props) => {
    const team = props.book;
    // // console.log("team-------------55", team)
    return (
        <div>
            <h3>{team.Team}</h3>
        </div>
    )
};

export default NameShow;