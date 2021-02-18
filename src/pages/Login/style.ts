import styled from 'styled-components';


// Inicio LoginContainer
export const LoginContainer = styled.main`

    display: flex;
    justify-content:center;
    align-items: center;
    height:100vh;
    flex-direction: column;
    
    form {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 40px;
        border-radius: 10px 0px 0px;;
        width: 25%;
        
        h1{
            margin-bottom: 60px;
            text-align: center;
        }

        input{
        font-size: 1.4rem;
        border-width: 0px 0px 1px 0px;
        padding: 8px;
        border-color: #878686;
        }

        input + input {
            margin-top: 20px;
        }

        button{
            /* background: #D8D8D8; */
            border-radius: 35px;
            font-size: 1.5rem;
            width: 100%;
            margin-top: 60px;
            padding: 10px 10px;
            text-align: start;
            color: #8C52E5;
            border: 2px solid #8C52E5;
            display: flex;
            justify-content: space-between;
            align-items:center;
            transition: 0.5s;

            &:hover{
                transform: 0.5s;
                background-color: #68DE5A;
                color: #fff;
            }
                
            span{
                font-size: 1.5rem;
                    
            }
        }
    }
        
    div {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        justify-content:center;
        width: 25%;
        align-items:center;
        padding: 30px;
        background: #D8D8D8;
        a{
            margin-bottom: 10px;
            text-decoration: none;
            font-size: 1.0rem;
            
        }
    }

    /* MEDIA-QUERY */
    @media(max-width: 1200px){
        form{
            width: 40%;
        }
        div{
            width: 40%;
        }
    }

    @media(max-width: 800px){
        form{
            width: 50%;
        }
        div{
            width: 50%;
        }
    }

`
// Fim LoginContainer
