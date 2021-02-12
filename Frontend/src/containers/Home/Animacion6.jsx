import React, { Component } from 'react';
import '../../assets/styles/animacion6.scss';
export class Animacion6 extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='overlay'>
                        <div className='items'></div>
                        <div className='items head'>
                            <p>Titulo Tarjeta</p>
                            <hr />
                        </div>
                        <div className='items price'>
                            <p className='old'>Descripción</p>
                            <p className='new'>$$$$$$</p>
                        </div>
                        <div className='items cart'>
                            <i className='fa fa-shopping-cart'></i>
                            <span>Footer</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Animacion6;
