import React, {Component} from "react";
import styled from "styled-components";

export default class Projects extends Component{
    render(){
        return(
            <BlogContainer>
                <h1>Bananza</h1>
            </BlogContainer>
        );
    }
}

const BlogContainer = styled.div`
  width:100%;
  height:100vh;
  background: linear-gradient(180deg, #E4C000 0%, rgba(0, 0, 0, 0.62) 119.23%);
`
