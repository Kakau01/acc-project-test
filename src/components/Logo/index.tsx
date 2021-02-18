import React from 'react';

import logoImg from '../../img/gama-academy-logo-horizontal-verde-branco1 1.svg';
import { LogoImg } from './style';

const Logo: React.FC = () => {
    return(
        <LogoImg src={logoImg} alt=""/>
    )
}

export default Logo;