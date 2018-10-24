
import React, { Component } from "react";
import styled from "styled-components";
import {HashRouter, Route } from "react-router-dom";
import About from "./pages/AboutMe.js"
import Projects from "./pages/Projects.js"

export default class Content extends Component {
    render() {
        return (
            <HashRouter>
            <ContentBox>
                <div >
                    <Route exact path="/" component={About} />
                    <Route path="/pages/Projects" component={Projects} />
                </div>
            </ContentBox>
            </HashRouter>

        );
    }
}

const ContentBox = styled.div`
    background: white;
    width: 100px;
    height 100px;
`