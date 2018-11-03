import React, { Component } from "react";
import {
    HashRouter,
    navBar
} from "react-router-dom";
import NavigationBar from './components/Navigation.js'
import Content from './components/Content.js'
import styled from 'styled-components'
import {
        background_Red,
        background_Green,
        background_Yellow
      } from './utilities/colors.js'

class Main extends Component {
  state = {
    background : background_Red
  }
  changeBackground = (set_color) => {
    this.setState({background : set_color});
    console.log(this.state.background);
  }
    render() {
        return (
            <MainContainer renderBackground={this.state.background}>
                <HashRouter>
                    <navBar>
                        <NavigationBar changeBackground={this.changeBackground}></NavigationBar>
                        <Content></Content>
                    </navBar>
                </HashRouter>
            </MainContainer>
        );
    }
}
export default Main;

const MainContainer = styled.div`

background: ${props => props.renderBackground};
  navBar{
    display:flex;
    flex-direction: row;
  }
`
