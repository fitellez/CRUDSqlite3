import React, { Component } from 'react';
import $ from 'jquery';
import '../../assets/styles/Menu.scss';
import Logotipo from '../../assets/Images/logo.svg';
import Home from './Home';
export class Menu extends Component {
    render() {
        return (
            <>
                <div className='row'>
                    <div className='col-3 d-none d-md-block   Menu_menuVertical px-0'>
                        <div className='text-left'>
                            <a href='/'>
                                <img src={Logotipo} alt='' className='w-75 ml-3 mt-4 mb-5' />
                            </a>
                        </div>
                        <div className='text-white mt-5 ml-3'>
                            <h5 className=''>Menú</h5>
                        </div>

                        <ul id='tabsJustified' className='nav nav-pills flex-column'>
                            <li className='nav-item  Menu-menu mt-4 ml-3'>
                                <a
                                    href='#Mensajes'
                                    data-target='#Mensajes'
                                    data-toggle='tab'
                                    className=' Menu_subMenu nav-link text-white py-4 active'
                                >
                                    <h6 className='mb-0'>CRUD</h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-9 tab-content'>
                        <div id='Mensajes' className='tab-pane fade active show'>
                            <Home />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Menu;
