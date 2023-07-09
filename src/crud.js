import React from "react";
import { students } from "./mock";


class Crud extends React.Component{
    constructor(){
        super();
        this.state ={
            data: students,
            id:'id',
            name:'',
            status:'',
            selected:'',
            active:null
        }
    }

    render(){

        const onFilter =(e)=>{
            let res = students.filter(item => `${item[this.state.selected]}`.toLowerCase().includes(e.target.value.toLowerCase()));
            console.log(res);
            this.setState({data:res})           
        }

        const onDelete = (id)=>{
            let res = this.state.data.filter(item => item.id !==id)
            this.setState({data:res})
        }

        const onAdd = () =>{
            let newUser = {
                id:this.state.data.at(-1).id+1,
                name:this.state.name,
                status: this.state.status
            }

            if(newUser.name && newUser.status){
                
                this.setState({
                    data:[...this.state.data,newUser],
                    name:'',
                    status:''
                })        
            }

        }

        const onChange = (e) => {
            this.setState({[e.target.name]:e.target.value})
        }

        const onSelect = (e)=>{
            this.setState({selected:e.target.value})
        }

        const onEdit = ({id,name,status},isSave) =>{
            if(isSave){
                let res = this.state.data.map(value => value.id === this.state.active.id ? {...value, name:this.state.name, status:this.state.status}:value)
                this.setState({active:null, data:res})
            }else{
                console.log({id,name,status},isSave);
                this.setState({
                    
                    name:name,
                    status,
                    active:{id,name,status},
                   
                })
            }

        }


        return(
            <div>
                <input
                name="name" 
                onChange={(e)=>{onChange(e)}}
                value={this.state.name}
                type="text" 
                placeholder="name"/>
                <input
                name="status" 
                onChange={(e)=>{onChange(e)}}
                value={this.state.status}  
                type="text" 
                placeholder="status"/>
                <button onClick={onAdd}>Add</button>
                <br /><br />
                <select onChange={onSelect} name="" id="">
                    <option value="id">id</option>
                    <option value="name">name</option>
                    <option value="status">status</option>
                </select>
                <input onChange={(e)=>{onFilter(e)}} type="text" placeholder='Filter' /> <br /><br />
                <table border={1} width="80%">
                    <thead>
                        <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    { this.state.data.length?
                    this.state.data.map(({id,name,status})=>(
            <tr key={id}>
                <td>{id}</td>
                <td>
                    {this.state.active?.id === id ? 
                    <input
                    onChange={onChange}
                    name='name' 
                    value={this.state.name} 
                    type="text" /> 
                    : name}
                </td>
                <td>
                    {this.state.active?.id === id ? 
                    <input
                    onChange={onChange}
                    name='status'
                    value={this.state.status} 
                    type="text" /> : status}
                </td>
                <td><button onClick = {()=>onDelete(id)}>Delete</button></td>
                <td>
                    <button onClick = {()=>onEdit({id,name,status},this.state.active?.id === id)}>
                    {this.state.active?.id === id ? 'Save': 'Edit'}
                    </button></td>
            </tr>
           )):<tr><th colSpan='5' rowSpan={3}><h1>No Data</h1></th></tr>}                   
          
                        
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Crud;