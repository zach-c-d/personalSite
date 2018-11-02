import React, {Component} from "react";
import styled from "styled-components";
import ContentCard from "../ContentCard.js"
export default class Projects extends Component{
    render(){
        return(
            <ProjectsContainer>
              <ContentCard>
                HellO!
              </ContentCard>
            </ProjectsContainer>
        );
    }
}

const ProjectsContainer = styled.div`
  width:100%;
  height:100vh;

  display: flex;
  justify-content: center;
  padding-top: 40px;
`
