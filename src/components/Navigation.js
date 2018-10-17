import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default class NavigationBar extends Component {
    render() {
        return (
            <NavBarContainer>
                <ul className="header">
                    <li><NavLink exact to="/">About Me</NavLink></li>
                    <div></div>
                    <li><NavLink to="/pages/Projects">Projects</NavLink></li>
                </ul>
            </NavBarContainer>

        );
    }
}

const NavBarContainer = styled.div`
    width:90vw;
    height:100px;
    ul{
        background-color: #111;
        padding: 0;
        div{
            width:10px;
        }
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