import React from 'react';

import { FiLogIn} from 'react-icons/fi';

import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua Id"/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e04050" />
                        Não tenho cadastro
                    </Link>  
                </form>
  
            </section>

            <img src={heroesImg} alt="Heroes" />


        </div>
    );
}
