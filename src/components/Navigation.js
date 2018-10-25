import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
    LightWhite,
    LightWhite_Selected
} from '../utilities/colors'
// import PageButton from "./page_button.js"

export default class NavigationBar extends Component {
    render() {
        return (
            <NavBarContainer>
                <ul>
                  <NavLink exact to="/">
                    <PageButton color="red"></PageButton>
                  </NavLink>
                  <NavLink to="/pages/Projects">
                    <PageButton color="green"></PageButton>
                  </NavLink>
                  <NavLink to="/pages/Blog">
                    <PageButton color="yellow"></PageButton>
                  </NavLink>
                </ul>
            </NavBarContainer>
        );
    }
}

const button_diameter = 33;
const PageButton = styled.div`
  background-color: ${props => props.color};
  width: ${button_diameter}px;
  height: ${button_diameter}px;
  border-radius: 50%;
`
const NavBarContainer = styled.div`
    background: linear-gradient(90deg, rgba(28, 28, 28, 0) -800.5%, #1E1E1E 30%);
    border-radius: 0px 2px 2px 0px;
    width: 100px;
    padding-top: ${button_diameter}px;
    ul{
        display:flex;
        flex-direction: column;
        height: 200px;
        justify-content: space-around;
        align-items: center;
        }
    }
`
