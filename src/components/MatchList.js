import React from "react";
import matchData from "../data/matchData";
import Match from "./Match";

function MatchList(props) {
  return (
    <section className='PlayerList MatchList'>
      <h1>Match List</h1>
      <Match />
    </section>
  )
}

export default MatchList