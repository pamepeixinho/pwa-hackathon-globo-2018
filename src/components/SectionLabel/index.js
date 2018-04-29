import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  padding: 16px 0 0 16px;
`;

const LineSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: grey;
`;

class SectionLabel extends Component {
  render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
        <LineSeparator />
      </div>
    );
  }
}

export default SectionLabel;
