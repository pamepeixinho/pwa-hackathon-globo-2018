import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideWrapper = styled.div`
  background-color: black;
  width: 275px;
  position: absolute;
  right: 0;
  height: 100%;
`;

const Header = styled.div`
  height: 40px;
  background-color: rgb(66,66,66);
  padding: 15px 0 0 22px;
  color: white;
  vertical-align: center;
  font-weight: bold;
`;

const Links = styled.div`
  margin-left: 22px;
  font-size: 13 px;
`;

const NoLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

class SideMenu extends Component {
  render() {
    return (
      <SideWrapper>
        <Header>
          Menu Apuração
        </Header>
        <Links>
          <NoLink to="search"><p>Busca</p></NoLink>
          <NoLink to="font"><p>Fonte</p></NoLink>
          <NoLink to="mix"><p>Combinações</p></NoLink>
        </Links>
      </SideWrapper>
    );
  }
}

export default SideMenu;
