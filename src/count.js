import React from "react";
import './App.css';
class Count extends React.Component{
    constructor(){
        super();
        this.state ={
            count:0,
            name:`Qo'shamiz ayiramiz`,
            changing:'input to change',
            gender:'',
            chek:''
        }
    }
    render(){
        const plus = ()=>{
            if(this.state.count<10){
                this.setState({count:this.state.count+1})                
            }
        }
        const minus = ()=>{
            if(this.state.count>1){
                this.setState({count:this.state.count-1})
            }
        }

        const changingInput = (e) =>{
            console.log(e.target.value);
            this.setState({changing:e.target.value})
        }

        const findGender = (e)=>{
            this.setState({gender:e.target.value})
            console.log(e.target.value);
        }

        const onCheck =(e)=>{
            console.log(e.target.checked);
            this.setState({chek:e.target.checked})
        }
        return(
            <div className="state">
                <div className="count">
                <h1>{this.state.name}</h1>
                 <h2>Sanoq:{this.state.count}</h2>
                 <button onClick={plus}>+</button>
                 <button onClick={minus}>-</button>
                </div>
                <div className="inp">
                    <h1>Input handling: {this.state.changing}</h1>
                    <input onChange={changingInput} type="text" placeholder="tap to change" /> <br /><br />

                  <label htmlFor="Jins">Jins:  
                  <select onChange={findGender} name="Jins" id=""> 
                    <option value="male">male</option>
                    <option value="female">female</option>
                   </select>
                    <h1>Jinsi: {this.state.gender}</h1>
                  </label>

                  <label htmlFor="Check"> Check
                  <input onChange={onCheck} type="checkbox" name="" id="" />
                  </label>
                  {this.state.chek ? "Tanlandi":"Tanlanmadi"}
                </div>
            </div>
        )
    }
}

export default Count;