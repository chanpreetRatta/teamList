export type Player = {
  "CC Player Id": number;
  "Player Name": string;
  "Series And Division": string;
  "Team Name": string;
  "Jersey Number": number | string;
};

export type GroundFormInputs = {
  date: string;
  matchNumber: number;
  division: string;
  ground: string; 
  home: string;
  away: string;
};

