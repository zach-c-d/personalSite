import React, { Component } from "react";
import styled from "styled-components";

export default class AboutMe extends Component {
    render() {
        return (
            <AboutContainer>
                <h1>Hello</h1>
            </AboutContainer>
        );
    }
}

const AboutContainer = styled.div`
  width: 100%;
  height:100vh;
  background: linear-gradient(180deg, rgba(255, 0, 0, 0.59) 0%, rgba(255, 153, 0, 0.62) 119.23%);
`
