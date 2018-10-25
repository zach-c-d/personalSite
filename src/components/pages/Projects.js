import React, {Component} from "react";
import styled from "styled-components";

export default class Projects extends Component{
    render(){
        return(
            <ProjectsContainer>
                <h1>Gorgonzola</h1>
            </ProjectsContainer>
        );
    }
}

const ProjectsContainer = styled.div`
  width:100%;
  height:100vh;
  background: linear-gradient(180deg, rgba(82, 255, 0, 0.59) 0%, rgba(0, 0, 0, 0.62) 119.23%);
`
