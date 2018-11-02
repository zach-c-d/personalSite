import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
        background_Red,
        background_Green,
        background_Yellow
      } from '../utilities/colors.js'

export default class NavigationBar extends Component {
  render(props) {
    return (
      <NavBarContainer>
          <ul>
            <NavLink exact to="/">
              <PageButton color="red" onClick={() => this.props.changeBackground(background_Red)}></PageButton>
            </NavLink>
            <NavLink to="/pages/Projects">
              <PageButton color="green" onClick={() => this.props.changeBackground(background_Green)}></PageButton>
            </NavLink>
            <NavLink to="/pages/Blog">
              <PageButton color="yellow" onClick={() => this.props.changeBackground(background_Yellow)}></PageButton>
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
