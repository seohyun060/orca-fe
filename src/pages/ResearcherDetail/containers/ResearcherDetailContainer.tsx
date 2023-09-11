import React from 'react';
import ResearcherDetail from '../ResearcherDetail';
import { useLocation, useNavigate } from 'react-router-dom';
type Props = {};

const ResearcherDetailContainer = ({}: Props) => {
  const publist = [1, 2, 3, 4, 5, 6, 7];
  const location = useLocation();
  const navigate = useNavigate();
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
      publist={publist}
      navigate={navigate}
    />
  );
};

export default ResearcherDetailContainer;
