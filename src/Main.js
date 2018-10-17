import React, { Component } from "react";
import {
    HashRouter
} from "react-router-dom";
import Navigation from './components/Navigation.js'
import Content from './components/Content.js'
import styled from 'styled-components'

class Main extends Component {
    render() {
        return (
            <backgroundContainer>
            <HashRouter>
                <navBar>
                    <Navigation></Navigation>
                    <Content></Content>
                </navBar>
            </HashRouter>
            </backgroundContainer>
        );
    }
}
export default Main;

const backgroundContainer = styled.div`
    width:100vw;
    height:100vh;
    position: static;
    background-color: black;
`

