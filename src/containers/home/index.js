import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

import ProductCard from '../../components/ProductCard';
import ContentArray from './Content';
import Header from '../../components/Header';
import axios from 'axios';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(226,226,226);
`;

const CardWrapper = styled.div`
  padding-top: 72px;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
  height: 100%;
`;

class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <Wrapper>
        <Header />
        <CardWrapper>
          {ContentArray.map((el) =>
            <ProductCard
              key={el.titleLabel}
              titleLabel={el.titleLabel}
              actionLabel={el.actionLabel}
              onAddIconClick={el.onAddIconClick}
            />
          )}
          <ProductCard
            titleLabel="Apuração de notícias"
            onAddIconClick={() => { history.push('/search') }}
          />
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(Home);
