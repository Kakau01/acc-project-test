import React from 'react';
import { FiArrowLeft, FiTriangle } from 'react-icons/fi';

import { ErrorContainer } from './style';


const Error: React.FC = () => {
    return (
        
            <ErrorContainer>
                <div>
                    <FiTriangle size={90} style={{color:"#8C52E5"}}/>
                    <h3>Oops, algo deu errado!
                        Confime seus dados e tente novamente!</h3>
                    <button type="submit"><span>Voltar</span><FiArrowLeft></FiArrowLeft></button>
                </div>
            </ErrorContainer>
    
        
    )
}   

export default Error;