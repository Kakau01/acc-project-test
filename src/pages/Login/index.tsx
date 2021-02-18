import React, { FormEvent, useState } from 'react';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { LoginContainer } from './style';

const Login: React.FC = () => {

    const history = useHistory();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    

    //Deal with Login
    function loginSys(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const postData = {
            usuario: login,
            senha: password
        }
        
        api.post(`login`, postData).then(
            response => {
                console.log(response.data);
                localStorage.setItem('@tokeApp', response.data.token)
                // history.push('/dashboard');
            }
        )
    }

    return(
        <LoginContainer>
            <form onSubmit={loginSys}>
                <h1>Faça seu login</h1>
                <input type="text" placeholder="Digite seu usário" value={login} onChange={e => setLogin(e.target.value)}/>
                <input type="text" placeholder="Digite seu senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit"><span>Continuar</span><FiArrowRight></FiArrowRight></button>
            </form>
            <div>
                <a href="">Esqueci minha senha<FiChevronRight/></a>
                <a href="">Ainda nao sou cliente<FiChevronRight/></a>
            </div>
        </LoginContainer>

    )
}   

export default Login;