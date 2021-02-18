import React from 'react';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';

import { PassContainer } from './style';

const RecoveryPass: React.FC = () => {
    
  
    return(
        <PassContainer>
            <form >
                <h1>Esqueci minha senha</h1>
                <input type="text" placeholder="Confirme o seu CPF" />
                <input type="text" placeholder="Digite sua nova senha" />
                <input type="text" placeholder="Confirme sua nova senha" />
                <button type="submit"><span>Continuar</span><FiArrowRight></FiArrowRight></button>
            </form>
            <div>
                <a href="">Esqueci minha senha<FiChevronRight/></a>
                <a href="">Ainda nao sou cliente<FiChevronRight/></a>
            </div>
        </PassContainer>

    )
}   
  

export default RecoveryPass;