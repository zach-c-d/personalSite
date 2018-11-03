import React, { Component } from "react";
import styled from "styled-components";
import ContentCard from "../ContentCard.js"
export default class AboutMe extends Component {
    render() {
        return (
            <AboutContainer>
            <ContentCard></ContentCard>
            </AboutContainer>
        );
    }
}

const AboutContainer = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: center;
`
