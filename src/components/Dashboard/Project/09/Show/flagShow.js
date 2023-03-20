import React from "react";
import Flag from "react-world-flags";

const FlagShow = (props) => {
  const team = props.book;
  // // console.log("team-------------55", team)
  return (
    // <div>
      <Flag code={team.code} height="100" />
    // </div>
  );
};

export default FlagShow;
