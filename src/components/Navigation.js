import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default class NavigationBar extends Component {
    render() {
        return (
            <NavBarContainer>
                <ul className="header">
                    <li><NavLink exact to="/">About Me</NavLink></li>
                    <li><div></div></li>
                    <li><NavLink to="/pages/Projects">Projects</NavLink></li>
                </ul>
            </NavBarContainer>
      );
    }
}

const NavBarContainer = styled.div`
margin: 20px;
    ul{
        display:flex;
        flex-direction: row;
        padding: 0;
        li{
            list-style-type: none;
            margin: 0;

            div{
                width:10px;
            }
            a{
                background-color: rgba(255,255,255,0.8);
                border-bottom: 2px solid white;
                color: black;
                font-weight: bold;
                text-decoration: none;
                width: 80px;
                padding: 20px;
                
                display: inline-block;
            }
            .active{
                color: white;
                background-color: rgba(0,153,255,100);
            }
        }
        
    }
`