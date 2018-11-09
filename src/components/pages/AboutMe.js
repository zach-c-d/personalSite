import React, { Component } from "react";
import styled from "styled-components";
import ContentCard from "../ContentCard.js"
import {
  background_Red
} from '../../utilities/colors.js'

export default class AboutMe extends Component {
    render() {
        return (
              <ContentContainer>
                <ContentCard></ContentCard>
              </ContentContainer>
        );
    }
}

const ContentContainer = styled.div`
  background: ${background_Red};
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: center;
`
