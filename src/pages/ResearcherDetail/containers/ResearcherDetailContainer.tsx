import React from 'react';
import ResearcherDetail from '../ResearcherDetail';
import { useLocation } from 'react-router-dom';
type Props = {};

const ResearcherDetailContainer = ({}: Props) => {
  // const { state } = useLocation();
  // const { name, profile, department, project } = state;
  const location = useLocation();
  const name = location.state.Name;
  const profile = location.state.Profile;
  const department = location.state.Department;
  const project = location.state.Project;
  return (
    <ResearcherDetail
      name={name}
      profile={profile}
      department={department}
      project={project}
    />
  );
};

export default ResearcherDetailContainer;
