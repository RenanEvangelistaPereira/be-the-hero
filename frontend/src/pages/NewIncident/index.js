import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const data = {
        title,description,value
    }

    const history = useHistory();

    async function handleCreateIncident(e){
        e.preventDefault();
        try{
            api.post('incidents', data, {
                headers : {
                    Authorization: ongId
                }
            })

            history.push('/profile');
        }
        catch (err) {
            alert('Erro ao cadastrar incidentes!');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastrar novo caso</h1>
                <p>
                    Descreva o caso detalhadamente para encontrar um herói para resolver isso
                </p>
                <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e04050" />
                        Voltar para home
                </Link>  
                </section>
                <form onSubmit={handleCreateIncident}>
                    <input 
                        placeholder="Titulo do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descriçao"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                     />
                    <input 
                        placeholder="Valor em Reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
