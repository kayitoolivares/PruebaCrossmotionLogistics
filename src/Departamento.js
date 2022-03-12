import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Departamento extends Component{
    constructor (props){
        super(props);
        this.state={
            departamentos:[]
        }
    }

    refresList(){
        fetch(variables.API_URL+'Departamento')
        .then(Response=>Response.json())
        .then(data=>{
            this.setState({departamentos:data});
        });
    }

    componentDidMount(){
        this.refresList();

    }

    render(){
        const{
            departamentos
        }=this.state;
        return(
            <div>
                <h4>Departamento</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departamentos.map(dep=>
                            <tr key={dep.id}>
                                <td>{dep.id}</td>
                                <td>{dep.Nombre}</td>
                                
                            </tr>
                            
                            )}
                    </tbody>
                </table>
                
            </div>
        )
    }
}