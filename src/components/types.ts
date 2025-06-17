export type Player = {
  "CC Player Id": number;
  "Player Name": string;
  "Series And Division": string;
  "Team Name": string;
  "Jersey Number": number;
};

export type GroundFormInputs = {
  date: Date;
  matchNumber: number;
  division: string;
  home: string;
  away: string;
};

