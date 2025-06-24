import "./print.css";
import { PrintHeader } from "./PrintHeader";
import PrintBody from "./PrintBody";

export const PrintList = () => {
  const groundInfo = {
    date: "2025-05-23",
    matchNumber: 600,
    division: "6",
    home: "North Vancouver",
    away: "Abotsford",
  };

  const players = [
    {
      "CC Player Id": 1241972,
      "Player Name": "Syril Gakhar",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 24,
    },
    {
      "CC Player Id": 1592470,
      "Player Name": "Daler Gill",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 95,
    },
    {
      "CC Player Id": 2137274,
      "Player Name": "Chanpreet Ratta",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 37,
    },
    {
      "CC Player Id": 2137277,
      "Player Name": "Amanpreet Singh Sidhu",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": "",
    },
    {
      "CC Player Id": 2137279,
      "Player Name": "Gurwinder Singh",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": "",
    },
    {
      "CC Player Id": 2137282,
      "Player Name": "Harjeet Singh Hans",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": "",
    },
    {
      "CC Player Id": 2137283,
      "Player Name": "Jagdeep Singh",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": "",
    },
    {
      "CC Player Id": 2137285,
      "Player Name": "Karanveer Singh",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": "09",
    },
    {
      "CC Player Id": 2137286,
      "Player Name": "Ranjeet Singh",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": "",
    },
    {
      "CC Player Id": 2137289,
      "Player Name": "Vishal Singh",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": 26,
    },
    {
      "CC Player Id": 2623311,
      "Player Name": "Jaspreet Khakh",
      "Series And Division": "Sixth Division",
      "Team Name": "North Vancouver  IV",
      "Jersey Number": "",
    },
  ];
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
