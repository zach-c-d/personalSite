import React, { Component } from "react";
import styled from "styled-components";
import {HashRouter, Route } from "react-router-dom";
import About from "./pages/AboutMe.js"
import Projects from "./pages/Projects.js"
import Blog from "./pages/Blog.js"

export default class Content extends Component {
    render() {
        return (
            <HashRouter>
            <ContentBox>
                <div >
                    <Route exact path="/" component={About} />
                    <Route path="/pages/Projects" component={Projects} />
                    <Route path="/pages/Blog" component={Blog} />
                </div>
            </ContentBox>
            </HashRouter>

        );
    }
}

const ContentBox = styled.div`
    width: 100%;
    height 100vh;
`
