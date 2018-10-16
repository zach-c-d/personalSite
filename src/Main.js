import React, { Component } from "react";
import {
    HashRouter
} from "react-router-dom";
import Navigation from './components/Navigation.js'
import Content from './components/Content.js'

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <navBar>
                    <Navigation></Navigation>
                    <Content></Content>
                </navBar>
            </HashRouter>
        );
    }
}
export default Main;

