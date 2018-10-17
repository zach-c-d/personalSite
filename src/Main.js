import React, { Component } from "react";
import {
    HashRouter
} from "react-router-dom";
import Navigation from './components/Navigation.js'
import Content from './components/Content.js'
import styled from 'styled-components'
import BackgroundImage from './components/backgroundImage/BackgroundImage.js'

class Main extends Component {
    render() {
        return (
            <MainContainer>
            <BackgroundImage></BackgroundImage>
            <HashRouter>
                <navBar>
                    <Navigation></Navigation>
                    <Content></Content>
                </navBar>
            </HashRouter>
            </MainContainer>
        );
    }
}
export default Main;

const MainContainer = styled.div`
    background-color: black;
    width: 100vw;
    height:100vh;
    margin: 0; padding: 0;
    display: flex;
    justify-content: center;
`