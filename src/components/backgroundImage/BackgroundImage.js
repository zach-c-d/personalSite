import {React, Component} from 'react';
// import img from 'amsterdamStreet.jpg'
export default class BackgroundImage extends Component{
    render(){
        return(        
            <div>
                <img src="{require{./amsterdamStreet.jpg}}" alt=""/>
            </div>        
        );
    }
}
