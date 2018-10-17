
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
    background-color: white;
    ul{
        background-color: black;
        padding: 0;
        li{
            display: inline;
            list-style-type: none;
            margin: 0;
            a{
                color: #FFF;
                font-weight: bold;
                text-decoration: none;
                padding: 20px;
                display: inline-block;
            }
            .active{
                background-color: #0099FF;
            }
        }
        
    }

`