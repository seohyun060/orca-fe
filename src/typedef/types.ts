export type GNBTableTypes = {
  label: string;
  path: string;
};

export type EChange = React.ChangeEvent<HTMLInputElement>;

export type Researchers = {
  profile: string;
  name: string;
  department: string;
  project: string;
};

export type Insight = {
  type: string;
  title: string;
  date: string;
};
export type ResearcherList = Researchers[];
