import React, { Component } from 'react';
import '../../assets/styles/Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import $ from 'jquery';
import { db } from '../../Firebase/Firebase';

export class SendSms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idPersona: '',
            nombre: '',
            apellidos: '',
            direccion: '',
            telefono: '',
            Persona: [],
            mensajeAlerta: '',
            loading: true
        };
        this.onChange = this.onChange.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        $('#successAlert').hide();
        const persona = [];
        let idPersona;
        await db
            .collection('Persona')
            .get()
            .then((response) => {
                response.forEach(async (doc) => {
                    idPersona = {
                        ...doc.data(),
                        id: doc.id
                    };
                    persona.push(idPersona);
                });
                this.setState({
                    Persona: persona
                });
            });
    }

    async onCreate(e) {
        e.preventDefault();
        const { nombre, apellidos, direccion, telefono } = this.state;
        const body = {
            nombre,
            apellidos,
            direccion,
            telefono
        };

        await db
            .collection('Persona')
            .doc()
            .set(body)
            .then((response) => {
                $('#successAlert').show();
                this.setState({ mensajeAlerta: 'Registro Agregado' });
                setTimeout(() => {
                    $('#successAlert').hide();
                    window.location.reload(false);
                }, 1500);
            });
    }
    async onGetPersonByID(id) {
        this.setState({ idPersona: id });
        await db
            .collection(`Persona`)
            .doc(id)
            .get()
            .then((response) => {
                this.setState({
                    nombre: response.data().nombre,
                    apellidos: response.data().apellidos,
                    direccion: response.data().direccion,
                    telefono: response.data().telefono
                });
            });
    }
    async onUpdate(e) {
        const { nombre, apellidos, direccion, telefono, idPersona } = this.state;
        e.preventDefault();
        await db
            .collection(`Persona`)
            .doc(idPersona)
            .update({
                nombre: nombre,
                apellidos: apellidos,
                direccion: direccion,
                telefono: telefono
            })
            .then((response)  =>{
                $('#successAlert').show();
                this.setState({ mensajeAlerta: 'Registro Actualizado' });
                setTimeout(() => {
                    $('#successAlert').hide();
                    window.location.reload(false);
                }, 1500);
            });
    }
    async onDelete(e) {
        e.preventDefault();
        const { idPersona } = this.state;
        await db.collection(`Persona`).doc(idPersona).delete().then((response)  =>{
          $('#successAlert').show();
          this.setState({ mensajeAlerta: 'Registro Eliminado' });
          setTimeout(() => {
              $('#successAlert').hide();
              window.location.reload(false);
          }, 1500);
      });;
    }

    render() {
        const { Persona, mensajeAlerta, nombre, apellidos, direccion, telefono } = this.state;
        return (
            <>
                <div className='mx-4 mx-lg-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='alert alert-success hideAlert' id='successAlert' role='alert'>
                                {mensajeAlerta}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 Menu-BgColor'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h4 className='my-3'>Personas</h4>
                                </div>
                                <div className='col-6 text-right'>
                                    <button
                                        type='button'
                                        className='my-3 btn btn-success'
                                        data-toggle='modal'
                                        data-target='#AgregarPersona'
                                    >
                                        {' '}
                                        Agregar Persona
                                        <FontAwesomeIcon icon={faUserPlus} className='ml-2 text-white' />
                                    </button>
                                </div>
                            </div>

                            <div className='table-responsive'>
                                <table className='table table-striped table-hover'>
                                    <thead>
                                        <tr className='text-center'>
                                            <th>Nombre</th>
                                            <th>Apellidos</th>
                                            <th>Direccion</th>
                                            <th>Telefono</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Persona.map((item, i) => {
                                            return (
                                                <tr key={i} className='text-center'>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.apellidos}</td>
                                                    <td>{item.direccion}</td>
                                                    <td>{item.telefono}</td>
                                                    <td>
                                                        <div>
                                                            <button
                                                                className='btn btn-warning px-1 py-1'
                                                                data-toggle='modal'
                                                                data-target='#EditarPersona'
                                                                onClick={() => this.onGetPersonByID(item.id)}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faUserEdit}
                                                                    className='text-white ml-1'
                                                                />
                                                            </button>

                                                            <button
                                                                className='btn btn-danger px-1 py-1 ml-1 ml-md-2 mt-3 mt-sm-0'
                                                                data-toggle='modal'
                                                                data-target='#EliminarPersona'
                                                                onClick={() => this.setState({ idPersona: item.id })}
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faUserTimes}
                                                                    className='text-white ml-1'
                                                                />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Agregar */}
                <div
                    className='modal fade'
                    id='AgregarPersona'
                    tabIndex='-1'
                    role='dialog'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                >
                    <div className='modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content Menu-ModalShadow'>
                            <div className='text-center modal-header border-bottom-0'>
                                <h4 className='w-100' id='exampleModalLabel'>
                                    Agregar Persona
                                </h4>
                            </div>
                            <form className='Categoria-form' onSubmit={this.onCreate}>
                                <div className='modal-body px-5'>
                                    <div className='form-group'>
                                        <label htmlFor='nombre'>Nombre:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='nombre'
                                            name='nombre'
                                            required
                                            onChange={this.onChange}
                                            placeholder='Nombre'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='apellidos'>Apellido:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='apellidos'
                                            name='apellidos'
                                            required
                                            onChange={this.onChange}
                                            placeholder='Apellidos'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='direccion'>Dirección:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='direccion'
                                            name='direccion'
                                            required
                                            onChange={this.onChange}
                                            placeholder='Dirección'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='telefono'>Teléfono:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='telefono'
                                            name='telefono'
                                            required
                                            onChange={this.onChange}
                                            placeholder='Teléfono'
                                        />
                                    </div>
                                </div>
                                <div className='modal-footer'>
                                    <div className='row text-center'>
                                        <div className='col-6'>
                                            <button className='btn btn-info px-5 py-2 mt-1' data-dismiss='modal'>
                                                Cancelar
                                            </button>
                                        </div>
                                        <div className='col-6'>
                                            <button type='submit' className='btn btn-success px-5 py-2 mt-1'>
                                                Agregar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Editar */}
                <div
                    className='modal fade'
                    id='EditarPersona'
                    tabIndex='-1'
                    role='dialog'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                >
                    <div className='modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content Menu-ModalShadow'>
                            <div className='text-center modal-header border-bottom-0'>
                                <h4 className='w-100' id='exampleModalLabel'>
                                    Editar Persona
                                </h4>
                            </div>
                            <form className='Categoria-form' onSubmit={this.onUpdate}>
                                <div className='modal-body px-5'>
                                    <div className='form-group'>
                                        <label htmlFor='nombre'>Nombre:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='nombre'
                                            name='nombre'
                                            required
                                            defaultValue={nombre}
                                            onChange={this.onChange}
                                            placeholder='Nombre'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='apellidos'>Apellido:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='apellidos'
                                            name='apellidos'
                                            required
                                            defaultValue={apellidos}
                                            onChange={this.onChange}
                                            placeholder='Apellidos'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='direccion'>Dirección:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='direccion'
                                            name='direccion'
                                            required
                                            defaultValue={direccion}
                                            onChange={this.onChange}
                                            placeholder='Dirección'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='telefono'>Teléfono:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='telefono'
                                            name='telefono'
                                            required
                                            defaultValue={telefono}
                                            onChange={this.onChange}
                                            placeholder='Teléfono'
                                        />
                                    </div>
                                </div>
                                <div className='modal-footer'>
                                    <div className='row text-center'>
                                        <div className='col-6'>
                                            <button className='btn btn-info px-5 py-2 mt-1' data-dismiss='modal'>
                                                Cancelar
                                            </button>
                                        </div>
                                        <div className='col-6'>
                                            <button type='submit' className='btn btn-success px-5 py-2 mt-1'>
                                                Actualizar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Eliminar */}
                <div
                    className='modal fade'
                    id='EliminarPersona'
                    tabIndex='-1'
                    role='dialog'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                >
                    <div className='modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content Categoria-inputShadow Categoria-modal'>
                            <div className='text-center modal-header border-bottom-0'>
                                <h5 className='w-100 Categoria-Titulo modal-title' id='exampleModalLabel'>
                                    Eliminar Persona
                                </h5>
                            </div>
                            <form className='Categoria-form' onSubmit={this.onDelete}>
                                <div className='modal-footer'>
                                    <div className='row text-center'>
                                        <div className='col-12'>
                                            <p>¿Está seguro que desea eliminar esta Persona?</p>
                                        </div>
                                        <div className='col-12'>
                                            <button type='submit' className='btn btn-danger px-5 py-2 mt-1'>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SendSms;
