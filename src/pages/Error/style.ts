import styled from 'styled-components';

// Inicio LoginContainer
export const ErrorContainer = styled.main`

    height:100vh;
    display: flex;
    justify-content:center;
    align-items: center;
    
    div {
        display: flex;
        flex-direction: column;
        border-radius: 10px ;
        width: 25%;
        padding: 40px 20px;
        background-color: #fff;
        align-items: center;
        
        h3{
            margin-top: 40px;
            margin-bottom: 40px;
            text-align: center;
            font-size: 1.4rem;
            color: #8C52E5;

        }


        button{
            background-color: #68DE5A;
            border-radius: 35px;
            font-size: 1.5rem;
            width: 70%;
            margin-top: 40px;
            padding: 10px 10px;
            text-align: start;
            color: #8C52E5;
            border: 2px solid #8C52E5;
            display: flex;
            justify-content: space-between;
            align-items:center;
            transition: 0.5s;
            color: #fff;


            &:hover{
                transform: 0.5s;
                background: #D8D8D8;
                color: #000;

            }
                
            span{
                font-size: 1.5rem;
                    
            }
        }
    }

    @media(max-width: 1200px){

div{
    width: 40%;
}
}

    @media(max-width: 800px){

        div{
            width: 50%;
        }
    }
`
        
    
// Fim Error Container
