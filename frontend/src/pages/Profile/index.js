import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, X</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>
            <h1>Casos Registrados</h1>
            <ul>
            <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Descrição:</strong>
                    <p>Desc Teste</p>
                    
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8br"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Descrição:</strong>
                    <p>Desc Teste</p>
                    
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8br"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Descrição:</strong>
                    <p>Desc Teste</p>
                    
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8br"></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Descrição:</strong>
                    <p>Desc Teste</p>
                    
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8br"></FiTrash2>
                    </button>
                </li>
            </ul>
        </div>
    );
}
