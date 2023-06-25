import React from "react";
import './App.css';
class Student extends React.Component{
    render(){
        return(
            <div className="student">
                 <h1>{this.props.value.id}.{this.props.value.name}</h1>
                 <h2>yoshi {this.props.value.age}</h2> 
            </div>
        )
    }
}

export default Student;