import React from "react";
import './Home.css'
import {Link} from 'react-router-dom'
export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className="navbar">
                    <ul>
                        <li><Link to ="/" target="_blank">Home</Link></li>
                        <li> <Link to="/about" target="_blank">About</Link></li>
                        <li><Link to="/Features" target="_blank">Features</Link></li>
                        <li><Link to="/blog" target="_blank">Blog</Link></li>
                        <input type="text" className="Search" placeholder="Search here"/>
                    </ul>
                </div>
            </div>
        )
    }
}
export class Front extends React.Component{
    state={
        white:"white",
        black:"black",
        click:0
    }
    animation=()=>{

            if(this.state.click==0){
                // alert(1)
            this.setState({white:"black"})
            this.setState({black:"white"})
            this.setState({click:1})
                                   }
        if(this.state.click==1){
            // alert(2)
            this.setState({white:"white"})
            this.setState({black:"black"})
            this.setState({click:0})
                               }

    }
    componentDidMount(){
        this.animation()
    }

render(){
    return(
        <div>
            <div className="Front">
            <img src="https://www.ritechpune.com/backend/courseicon/ReactJS.png" alt="this is a react image" className="logo"/>
            <div className="content">
                <h1>This Is A React Website</h1>
                <p >React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript libraryReact code is made of entities called components. These components are reusable and must be formed in the SRC folder following the Pascal Case as its naming convention (capitalize camelCase). Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass the values between components through "props" for more detail you can easily click here and know more <Link to="/Wikipedia">React</Link> or <a href="https://www.google.com/" target="_blank">Read</a></p>
            </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,224L16,197.3C32,171,64,117,96,96C128,75,160,85,192,112C224,139,256,181,288,170.7C320,160,352,96,384,90.7C416,85,448,139,480,154.7C512,171,544,149,576,154.7C608,160,640,192,672,224C704,256,736,288,768,266.7C800,245,832,171,864,149.3C896,128,928,160,960,149.3C992,139,1024,85,1056,101.3C1088,117,1120,203,1152,208C1184,213,1216,139,1248,144C1280,149,1312,235,1344,250.7C1376,267,1408,213,1424,186.7L1440,160L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>
            <div class="parent">
            <div class="div1" style={{backgroundColor:this.state.black,color:this.state.white}}>Fast</div>
            <div class="div2" style={{backgroundColor:this.state.white,color:this.state.black}}>Light</div> 
            <div class="div3" style={{backgroundColor:this.state.black,color:this.state.white}}>Demanding</div>
            </div>
        </div>
    )
}
}