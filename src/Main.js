import React, { Component } from "react";
import {
    HashRouter,
    navBar
} from "react-router-dom";
import Navigation from './components/Navigation.js'
import Content from './components/Content.js'
import styled from 'styled-components'
// import Img from 'react-images'
import Image from './assets/amsterdamStreet.jpg'

class Main extends Component {
    render() {
        return (
            <MainContainer>
                <img src={Image} alt="background"/>
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
    display:flex;
    justify-content: center;
    align-content: center;
    width:100vw;
    height:100vh;
    background: url({Image});
`

