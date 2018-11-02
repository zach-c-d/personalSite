import React, { Component } from "react";
import styled from "styled-components";

export default class ContentCard extends Component {
    render(props) {
        return (
            <ContentCardContainer>
              <TopBar></TopBar>
              <Content></Content>
            </ContentCardContainer>
        );
    }
}

const ContentCardContainer = styled.div`
  background: linear-gradient(180deg, #393939 0%, #000000 100%);
  width: 1000px;
  height: 600px;
  border-radius: 10px;

  display:flex;
  flex-direction: column;
`
const TopBar = styled.div`
  height: 30px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #353744 0%, #000000 100%);
`

const Content = styled.div`
`
