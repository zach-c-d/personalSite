import React, {Component} from "react";
import styled from "styled-components";
import ContentCard from "../ContentCard.js";
import background_Green from '../../utilities/colors.js';

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
  background: ${background_Green};
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
`
