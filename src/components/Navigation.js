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
                    <li><NavLink exact to="/"></NavLink></li>
                    <div></div>
                    <li><NavLink to="/pages/Projects"></NavLink></li>
                </ul>
            </NavBarContainer>
        );
    }
}

const NavBarContainer = styled.div`
    background: linear-gradient(90deg, rgba(28, 28, 28, 0) -400.5%, #1E1E1E 50%);
    border-radius: 0px 2px 2px 0px;
    height: 100vh;
    width: 100px;
    ul{
        display:flex;
        flex-direction: column;
        height: 100px;
        justify-content: space-around;
        align-items: center;
        div{
            width:10px; 
        }
        li{
            list-style-type: none;
            transition: background-color 0.5s;
            width:33px;
            height:33px;
            border-radius:50%;
            background: white;
            a{
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