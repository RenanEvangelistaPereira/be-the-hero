import React, {useState} from 'react';
import { FiLogIn} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

    const [id, SetId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions',{id});
            console.log(response.data.name);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
            
        }
        catch (err){
            alert(`Falha no Login. ONG ${id} não existe`);
        }
    }
    
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Sua Id"
                        value={id}
                        onChange={e => SetId(e.target.value)}
                    />
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
