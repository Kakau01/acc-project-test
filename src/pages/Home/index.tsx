import React, { FormEvent, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { Form, HomeBoxLeft, HomeContainer } from './style';

const Home: React.FC = () => {
    const history = useHistory();
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, Setpassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    //Open Login Page
    function openLogin() {
        window.location.href = '/login'
    }

    function createAccount(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
 
        //dados passados a api
        const postData = {
            cpf,
            nome: name,
            login: username,
            senha: password
        }
        if (password !== confirmPass) {
            alert('Confirm pass')
            return;
        }


        try {
            api.post(`usuarios`, postData).then(
                response => {
                    if (response.status === 200) {
                        // console.log(name);
                        history.push('/login')
                    } else {
                        alert('Algo de errado, tente novamente em alguns minutos.')
                    }
                }
            )
        } catch (e) {
            alert('algo deu errado')
        }
    }



    return (



        <>
            <HomeContainer>
                <div>
                    <HomeBoxLeft>
                        <h2>Gama Bank é um projeto de nossos alunos.</h2>
                        <h2>Já tem conta?</h2>
                        <button type="submit" onClick={openLogin}><span>Acessar </span><FiArrowRight style={{ fontSize: "35px" }} /></button>
                    </HomeBoxLeft>
                    <Form onSubmit={createAccount}>
                        <h1> Peça sua conta e cartão de crédito do Gama Bank </h1>
                        <input
                            type="text"
                            placeholder="Digite seu CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}

                        />
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Nome de usuário"
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={e => Setpassword(e.target.value)}
                        />
                        <input
                            type="text" placeholder="Confirme sua senha"
                            value={confirmPass}
                            onChange={e => setConfirmPass(e.target.value)}

                        />
                        <button type="submit"><span>Continuar </span><FiArrowRight style={{ fontSize: "35px" }} /></button>
                    </Form>
                </div>

            </HomeContainer>
        </>
    )
}

export default Home;