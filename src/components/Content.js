
import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import About from "../AboutMe"
import Projects from "../Projects"

export default class Content extends Component {
    render() {
        return (
            <ContentBox>
                <div className="content">
                    <Route exact path="/" component={About} />
                    <Route path="/Stuff" component={Projects} />
                </div>
            </ContentBox>

        );
    }
}

const ContentBox = styled.div`
    width:90vw;
    height:100px;
    ul{
        background-color: #111;
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