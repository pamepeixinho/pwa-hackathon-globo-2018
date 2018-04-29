import React, { Component } from 'react';
import styled from 'styled-components';

const SideWrapper = styled.div`
  background-color: black;
  width: 275px;
  position: absolute;
  right: 0;
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 30px;
  background-color: rgb(66,66,66);
  padding: 15px;
  color: white;
`;


class SideMenu extends Component {
  render() {
    return (
      <SideWrapper>
        <Header>
          Menu Apuração
        </Header>
      </SideWrapper>
    );
  }
}

export default SideMenu;
