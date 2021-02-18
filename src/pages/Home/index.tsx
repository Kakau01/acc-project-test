import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Logo from '../../components/Logo';
import { Form, HomeBoxLeft, HomeContainer } from './style';

const Home: React.FC = () => {
    return (
        <>
            <HomeContainer>
                <Logo />
                <div>
                    <HomeBoxLeft>
                        <h2>Gama Bank é um projeto de nossos alunos.</h2>
                        <h2>Já tem conta?</h2>
                        <button><span>Acessar </span><FiArrowRight style={{fontSize:"35px"}} /></button>
                    </HomeBoxLeft>
                    <Form>
                        <h1> Peça sua conta e cartão de crédito do Gama Bank </h1>
                        <input type="text" placeholder="Digite seu CPF" />
                        <input type="text" placeholder="Nome Completo" />
                        <input type="text" placeholder="Nome de usuário" />
                        <input type="text" placeholder="Digite sua senha" />
                        <input type="text" placeholder="Confirme sua senha" />
                        <button><span>Continuar </span><FiArrowRight style={{fontSize:"35px"}} /></button>
                    </Form>
                </div>

            </HomeContainer>
        </>
    )
}

export default Home;