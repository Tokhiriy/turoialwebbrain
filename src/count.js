import React from "react";
import './App.css';
class Count extends React.Component{
    constructor(){
        super();
        this.state ={
            count:0,
            adding:`Qo'shamiz ayiramiz`,
            gender:'',
            chek:'',
            name:'',
            surname:''
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

       
        const onChange = (e) => {
            console.log(e.target.value);
            this.setState({[e.target.name]:e.target.value})
        }

        const findGender = (e)=>{
            this.setState({gender:e.target.value})
                       
        }

        const onCheck =(e)=>{
            console.log(e.target.checked);
            this.setState({chek:e.target.checked})
        }
        return(
            <div className="state">
                <div className="count">
                <h1>{this.state.adding}</h1>
                 <h2>Sanoq:{this.state.count}</h2>
                 <button onClick={plus}>+</button>
                 <button onClick={minus}>-</button>
                </div>
                <div className="inp">
                    <h1>Name: {this.state.name}</h1>
                    <h1>Surname: {this.state.surname}</h1>
                    <h1>Jinsi: {this.state.gender}</h1>
                    <input name="name"  onChange={(e)=>{onChange(e)}} type="text" placeholder="Write your Name" /> <br /><br />
                    <input name="surname" onChange={(e)=>{onChange(e)}} type="text" placeholder="Write your Surname" /> <br /><br />

                  <label htmlFor="Jins">Jins:  
                  <select onChange={findGender} name="Jins" id=""> 
                    <option selected disabled value="">Tanlov</option>
                    <option value="Erkak">Erkak</option>
                    <option value="Ayol">Ayol</option>
                   </select>
                   
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