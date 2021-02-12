import React, { Component } from 'react';
import '../../assets/styles/animacion4.scss';
export class Animacion4 extends Component {
    render() {
        return (
            <>
               <div className="container2">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <a>Tarjeta 1</a>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quaerat ea qui officiis maxime dolorem fugit nihil.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                    <a>Tarjeta 2</a>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quaerat ea qui officiis maxime dolorem fugit nihil.</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <i className="fa fa-github-square" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                    <a>Tarjeta 3</a>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quaerat ea qui officiis maxime dolorem fugit nihil.</p>
                </div>
            </div>
        </div>
    </div>
            </>
        );
    }
}

export default Animacion4;
