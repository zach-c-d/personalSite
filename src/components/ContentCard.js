import React, { Component } from "react";
import styled from "styled-components";

export default class ContentCard extends Component {
    render(props) {
        return (
            <ContentCardContainer>
              <Content></Content>
            </ContentCardContainer>
        );
    }
}

const PotatoBox = styled.div`
  position: absolute;
  width: 183px;
  height: 242px;
  left: 133px;
  top: 101px;

  background: linear-gradient(
              206.66deg, #7E7E7E 1.95%,
              rgba(84, 84, 84, 0.61) 40.4%,
              rgba(0, 0, 0, 0) 92.71%);
  border-radius: 13px;
`
const ContentCardContainer = styled.div`
  width: 1000px;
  height: 600px;

  margin-top: 20px;
  display:flex;
  flex-direction: column;
  background: #333;
  box-shadow: rgba(255,255,255,.25) 0 1px 0,
              inset rgba(255,255,255,.25) 0 1px 0,
              inset rgba(0,0,0,.5) 0 0 0,
              inset rgba(255,255,255,.08) 0 150px 0,
              inset rgba(0,0,0,.3) 0 -1.25rem 1.25rem,
              inset rgba(255,255,255,.1) 0 1.25rem 1.25rem;
  border: 1px solid #242424;
`
// const TopBar = styled.div`
//   height: 30px;
//   width: 100%;
//   border-radius: 10px 10px 0 0;
//   background: linear-gradient(180deg, #353744 0%, #000000 100%);
//
// `

const Content = styled.div`
`
