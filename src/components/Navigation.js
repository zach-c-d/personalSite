import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default class NavigationBar extends Component {
    render() {
        return (
            <NavBarContainer>
                <ul>
                    <li><NavLink exact to="/">About Me</NavLink></li>
                    <div></div>
                    <li><NavLink to="/pages/Projects">Projects</NavLink></li>
                </ul>
            </NavBarContainer>
        );
    }
}

const NavBarContainer = styled.div`
    ul{
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        div{
            width:10px; 
        }
        li{
            display: inline;
            list-style-type: none;
            background-color:white;
            margin: 0;
            a{
                color: #FFF;
                font-weight: bold;
                text-decoration: none;
                color: black;
                padding: 20px;
                display: inline-block;
            }
            .active{
                background-color: #0099FF;
                color:white;
            }
        }
    }
`