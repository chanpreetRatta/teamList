import "./print.css";
import { PrintHeader } from "./PrintHeader";
import PrintBody from "./PrintBody";
import { useEffect, useState } from "react";
import type { GroundFormInputs, Player } from "../types";

export const PrintList = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [groundInfo, setGroundInfo] = useState<GroundFormInputs>({
    date: "",
    matchNumber: 0,
    division: "",
    home: "",
    away: "",
  });

  useEffect(() => {
    const ground = localStorage.getItem("groundInfo");
    const team = localStorage.getItem("teamList");

    setGroundInfo(ground ? JSON.parse(ground) : {});
    setPlayers(team ? JSON.parse(team) : {});
  }, []);
  return (
    <div className="container-fluid w-100 print">
      <div className="row">
        <div className="col">
          <PrintHeader groundInfo={groundInfo}></PrintHeader>
          <PrintBody players={players} />
        </div>
        <div className="col">
          <PrintHeader groundInfo={groundInfo}></PrintHeader>
          <PrintBody players={players} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <PrintHeader groundInfo={groundInfo}></PrintHeader>
          <PrintBody players={players} />
        </div>
        <div className="col">
          <PrintHeader groundInfo={groundInfo}></PrintHeader>
          <PrintBody players={players} />
        </div>
      </div>
    </div>
  );
};
