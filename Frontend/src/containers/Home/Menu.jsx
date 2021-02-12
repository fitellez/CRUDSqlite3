import React, { Component } from 'react';
import $ from 'jquery';
import '../../assets/styles/Menu.scss';
import Logotipo from '../../assets/Images/logo.svg';
import Home from './Home';
import Animacion1 from './Animacion1';
import Animacion2 from './Animacion2';
import Animacion3 from './Animacion3';
import Animacion4 from './Animacion4';
import Animacion5 from './Animacion5';
import Animacion6 from './Animacion6';
$('#tabsJustified a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
export class Menu extends Component {
    render() {
        return (
            <>
                <div className='row'>
                    <div className='col-3 d-none d-md-block Menu_menuVertical px-0'>
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
                                    className=' Menu_subMenu nav-link py-4 active'
                                >
                                    <h6 className='mb-0'>CRUD</h6>
                                </a>
                            </li>
                            <li className='nav-item  Menu-menu mt-4 ml-3'>
                                <a
                                    href='#Animacion1'
                                    data-target='#Animacion1'
                                    data-toggle='tab'
                                    className=' Menu_subMenu nav-link py-4'
                                >
                                    <h6 className='mb-0'>Animacion 1</h6>
                                </a>
                            </li>
                            <li className='nav-item  Menu-menu mt-4 ml-3'>
                                <a
                                    href='#Animacion2'
                                    data-target='#Animacion2'
                                    data-toggle='tab'
                                    className=' Menu_subMenu nav-link py-4'
                                >
                                    <h6 className='mb-0'>Animacion 2</h6>
                                </a>
                            </li>
                            <li className='nav-item  Menu-menu mt-4 ml-3'>
                                <a
                                    href='#Animacion3'
                                    data-target='#Animacion3'
                                    data-toggle='tab'
                                    className=' Menu_subMenu nav-link py-4'
                                >
                                    <h6 className='mb-0'>Animacion 3</h6>
                                </a>
                            </li>
                            <li className='nav-item  Menu-menu mt-4 ml-3'>
                                <a
                                    href='#Animacion4'
                                    data-target='#Animacion4'
                                    data-toggle='tab'
                                    className=' Menu_subMenu nav-link py-4'
                                >
                                    <h6 className='mb-0'>Animacion 4</h6>
                                </a>
                            </li>
                            <li className='nav-item  Menu-menu mt-4 ml-3'>
                                <a
                                    href='#Animacion5'
                                    data-target='#Animacion5'
                                    data-toggle='tab'
                                    className=' Menu_subMenu nav-link py-4'
                                >
                                    <h6 className='mb-0'>Animacion 5</h6>
                                </a>
                            </li>
                            <li className='nav-item  Menu-menu mt-4 ml-3'>
                                <a
                                    href='#Animacion6'
                                    data-target='#Animacion6'
                                    data-toggle='tab'
                                    className=' Menu_subMenu nav-link py-4'
                                >
                                    <h6 className='mb-0'>Animacion 6</h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-9 tab-content'>
                        <div id='Mensajes' className='tab-pane fade active show'>
                            <Home />
                        </div>
                        <div id='Animacion1' className='tab-pane fade'>
                            <Animacion1 />
                        </div>
                        <div id='Animacion2' className='tab-pane fade'>
                            <Animacion2 />
                        </div>
                        <div id='Animacion3' className='tab-pane fade'>
                            <Animacion3 />
                        </div>
                        <div id='Animacion4' className='tab-pane fade'>
                            <Animacion4 />
                        </div>
                        <div id='Animacion5' className='tab-pane fade'>
                            <Animacion5 />
                        </div>
                        <div id='Animacion6' className='tab-pane fade'>
                            <Animacion6 />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Menu;
