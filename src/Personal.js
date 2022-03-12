import React,{Component} from 'react';
import { Departamento } from './Departamento.js';

import {variables} from './Variables.js';

export class Personal extends Component{
    constructor (props){
        super(props);

        this.state={
            personas:[],
            departamentos:[],
            modalTitulo:"",
            PersonalId:0,
            PersonalNombre:"",
            PersonalApellido:"",
            PersonalFecha_de_nacimiento:"0",
            PersonalLugar_de_nacimiento:"",
            PersonalFecha_de_alta_de_registro:"",
            PersonalDepartamento:"",
            PersonalidDepartamento:0
        }
    }

    refresList(){
        fetch(variables.API_URL+'Personal')
        .then(Response=>Response.json())
        .then(data=>{
            this.setState({personas:data});
        });

        fetch(variables.API_URL+'Departamento')
        .then(Response=>Response.json())
        .then(data=>{
            this.setState({departamentos:data});
        });
    }

    componentDidMount(){
        this.refresList();
    }
    ChangePersonalNombre=(e)=>{
        this.setState({PersonalNombre:e.target.value});
    }
    ChangePersonalApellido=(e)=>{
        this.setState({PersonalApellido:e.target.value});
    }
    ChangePersonalFecha_de_nacimiento=(e)=>{
        this.setState({PersonalFecha_de_nacimiento:e.target.value});
    }
    ChangePersonalLugar_de_nacimiento=(e)=>{
        this.setState({PersonalLugar_de_nacimiento:e.target.value});
    }
    ChangePersonalFecha_de_alta_de_registro=(e)=>{
        this.setState({PersonalFecha_de_alta_de_registro:e.target.value});
    }
    ChangePersonalid_Departamento=(e)=>{
        this.setState({PersonalidDepartamento:e.target.value});
    }
    

    addClick(){
        this.setState({
            modalTitulo:"Nuevo Personal",
            PersonalId:0,
            PersonalNombre:"",
            PersonalApellido:"",
            PersonalFecha_de_nacimiento:"",
            PersonalLugar_de_nacimiento:"",
            PersonalFecha_de_alta_de_registro:"",
            PersonalDepartamento:"",
            PersonalidDepartamento:1
        });
    }

    editClick(per){
        this.setState({
            modalTitulo:"Editar Personal",
            PersonalId:per.id,
            PersonalNombre:per.nombre,
            PersonalApellido:per.Apellido,
            PersonalFecha_de_nacimiento:per.Fecha_de_nacimiento,
            PersonalLugar_de_nacimiento:per.Lugar_de_nacimiento,
            PersonalFecha_de_alta_de_registro:per.Fecha_de_alta_de_registro,
            PersonalidDepartamento:per.id_Departamento
        });
    }

    createCLick(){
        fetch(variables.API_URL+'Personal',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/Json'
            },
            body:JSON.stringify({
                Nombre:this.state.PersonalNombre,
                Apellido:this.state.PersonalApellido,
                Fecha_de_nacimiento:this.state.PersonalFecha_de_nacimiento,
                Lugar_de_nacimiento:this.state.PersonalLugar_de_nacimiento,
                id_Departamento:this.state.PersonalidDepartamento
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refresList();
        },(error)=>{
            alert('error');
        })
    }

    updateCLick(){
        fetch(variables.API_URL+'Personal',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/Json'
            },
            body:JSON.stringify({
                id:this.state.PersonalId,
                Nombre:this.state.PersonalNombre,
                Apellido:this.state.PersonalApellido,
                Fecha_de_nacimiento:this.state.PersonalFecha_de_nacimiento,
                Lugar_de_nacimiento:this.state.PersonalLugar_de_nacimiento,
                id_Departamento:this.state.PersonalidDepartamento
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refresList();
        },(error)=>{
            alert('error');
        })
    }

    deleteteCLick(id){
        if(window.confirm('Confirmar Eliminacion')){
        fetch(variables.API_URL+'personal/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/Json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refresList();
        },(error)=>{
            alert('error');
        })
    }
    }

    render(){
        const{
            personas,
            departamentos,
            modalTitulo,
            PersonalId,
PersonalNombre,
PersonalApellido,
PersonalFecha_de_nacimiento,
PersonalLugar_de_nacimiento,
PersonalFecha_de_alta_de_registro,
PersonalDepartamento,
PersonalidDepartamento
        }=this.state;
        return(
            <div>
                <h4>Personal</h4>

                <button type='button' className='btn btn-primary m2 float-end' 
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
                onClick={()=>this.addClick()}> Añadir Nuevo</button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>edad</th>
                            <th>Lugar_de_nacimiento</th>
                            <th>Fecha_de_alta_de_registro</th>
                            <th>departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map(per=>
                            <tr key={per.id}>
                                <td>{per.id}</td>
                                <td>{per.nombre}</td>
                                <td>{per.Apellido}</td>
                                <td>{per.edad}</td>
                                <td>{per.Lugar_de_nacimiento}</td>
                                <td>{per.Fecha_de_alta_de_registro}</td>
                                <td>{per.nombre_Departamento}</td>
                                
                                <td>
                                    <button type='button' className='btn btn-warning'
                                    data-bs-toggle='modal'
                                    data-bs-target='#exampleModal'
                                    onClick={()=>this.editClick(per)}>
                                        editar

                                    </button>
                                    <button type='button'
                                    onClick={()=>this.deleteteCLick(per.id)}
                                    className='btn btn-danger'>
                                        eliminar

                                    </button>
                                </td>
                            </tr>
                            
                            )}
                    </tbody>
                </table>

                <div className='modal fade' id='exampleModal' tabIndex='-1' arial-hidden='true'>
                    <div className='modal-dialog modal-lg modal-dialog-centered'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title'>{modalTitulo}</h5>
                                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                            </div>
                            <div className='modal-body'>
                                <div className='input-group-text mb-3'>
                                    <span className='input-group-text'>Nombre</span>
                                    <input type='text' className='form-control' value={PersonalNombre}
                                    onChange={this.ChangePersonalNombre}/>
                                </div>

                                <div className='input-group-text mb-3'>
                                    <span className='input-group-text'>Apellido</span>
                                    <input type='text' className='form-control' value={PersonalApellido}
                                    onChange={this.ChangePersonalApellido}/>
                                </div>

                                <div className='input-group-text mb-3'>
                                    <span className='input-group-text'>Fecha_de_nacimiento</span>
                                    <input type='date' className='form-control' value={PersonalFecha_de_nacimiento}
                                    onChange={this.ChangePersonalFecha_de_nacimiento}/>
                                </div>

                                <div className='input-group-text mb-3'>
                                    <span className='input-group-text'>Lugar_de_nacimiento</span>
                                    <input type='text' className='form-control' value={PersonalLugar_de_nacimiento}
                                    onChange={this.ChangePersonalLugar_de_nacimiento}/>
                                </div>

                                <div className='input-group-text mb-3'>
                                    <span className='input-group-text'>Departamento</span>
                                    <select className='form-select'
                                    onChange={this.ChangePersonalid_Departamento}
                                    value={PersonalidDepartamento}>
                                        {departamentos.map(dep=><option  value={dep.id} key={dep.id}>
                                            {dep.Nombre}                                            
                                        </option>)}
                                    </select>
                                    
                                </div>
                                
                                {PersonalId==0?
                                <button type='button' className='btn btn-primary float-start'
                                onClick={()=>this.createCLick()}
                                >Nuevo</button>
                                :null}
                                {PersonalId!=0?
                                <button type='button' className='btn btn-primary float-start'
                                onClick={()=>this.updateCLick()} >Actualizar</button>
                                :null}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}