export type GNBTableTypes = {
	label: string;
	path: string;
};

export type EChange = React.ChangeEvent<HTMLInputElement>;

export type Researchers = {
	id: number;
	profile: string;
	name: string;
	department: string;
	project: string;
	location: number;
	isStored: boolean;
};

export type Insight = {
	id: number;
	type: string;
	title: string;
	date: Date;
	link: string;
	isStored: boolean;
	views: number;
};
export type ResearcherList = Researchers[];

export type Publication = {
	link: string;
	title: string;
	author: string;
	pubYear: string;
	journal: string;
	conference: string;
	volume: string;
	//editable: boolean;
};
