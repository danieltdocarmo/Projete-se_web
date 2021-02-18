import LeftMenu from 'components/LeftMenu';
import ProjeteseSimpleNameFooter from 'components/ProjeteseSimpleNameFooter';
import React from 'react';

import { Container } from './styles';

const UserProjectsLayout: React.FC = () => {
  return (
    <Container>
      <LeftMenu />
    </Container>
  );
};

export default UserProjectsLayout;
