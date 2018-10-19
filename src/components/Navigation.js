import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
    LightWhite,
    LightWhite_Selected
} from '../utilities/colors'

export default class NavigationBar extends Component {
    render() {
        return (
            <NavBarContainer>
                <ul>
                    <li><NavLink exact to="/">Page One</NavLink></li>
                    <div></div>
                    <li><NavLink to="/pages/Projects">Page Two</NavLink></li>
                </ul>
            </NavBarContainer>
        );
    }
}

const NavBarContainer = styled.div`
    ul{
        display:flex;
        margin-top: 10px;
        margin-bottom: 10px;
        div{
            width:10px; 
        }
        li{
            list-style-type: none;
            background-color: rgba(255,255,255,0.1);
            border-bottom: white solid 4px;
            transition: background-color 0.5s;
            a{
                font-family: roboto, Arial, Helvetica, sans-serif;
                color: white;
                font-weight: bold;
                text-decoration: none;
                padding: 20px 20px 1px 0;
                display: inline-block;
            }
            /* larger font when landscape */
            @media screen and (orientation:landscape){
                a{
                    font-size: 2em;
                }
            }
            @media screen and (orientation:portrait){
                a{
                    font-size: 1.5em;
                }
            }
            /* colors the active page item */
            .active{
                background-color: ${LightWhite_Selected};
                color:white;
            }
            :hover{
                background-color: rgba(255,153,255,0.3);
                a{color:white;}
            }
        }
    }
`