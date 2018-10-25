import React, { Component } from "react";
import {
    HashRouter,
    navBar
} from "react-router-dom";
import Navigation from './components/Navigation.js'
import Content from './components/Content.js'
import styled from 'styled-components'
import BackgroundImage from './assets/amsterdamStreet.jpg'

class Main extends Component {
    render() {
        return (
            <MainContainer>
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
background: white;
  navBar{
    display:flex;
    flex-direction: row;
  }
`
