import styled from 'styled-components';

import img from '../../img/happy.png';

// INICIO HOMECONTAINER //
export const HomeContainer = styled.div`

background-image: url(${img});
    width: 100%;
    height: 100vh;
    background-position:bottom;
    background-repeat: no-repeat;
    background-size: 850px;
    padding: 0px 60px 0px 60px;

    div{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    //MEDIA-QUERY/
    @media(max-width: 800px) {
        div{
            flex-direction: column;
            justify-content: space-around;

           
        }

    }
    
`
// FIM HOMECONTAINER //

// INICIO HOMEBOXLEFT //
export const HomeBoxLeft = styled.section`
    width: 20%;
    padding: 10px;
    font-family: 'Roboto';

    h2{
        line-height: 1.4;
        font-size: 2rem;
        margin-bottom: 10px;
        color: #fff;
        text-align: left;
        font-weight:300;       
    }

    h2 + h2 {
        margin-top: 30px;
    }

    button{
        background: #FFFFFF;
        border-radius: 35px;
        width: 100%;
        margin-top: 15px;
        padding: 20px 20px;
        text-align: start;
        color: #8C52E5;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items:center;
        transition: 0.5s;

        &:hover{
            transform: 0.5s;
            background-color: #68DE5A;
        }
    
        span{
            font-size: 1.5rem;
           
        }       
    }

    //MEDIA-QUERY/
    @media(max-width: 1200px){
        width: 30%;
        h2{
        line-height: 1.4;
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #fff;
        text-align: left;
        font-weight:300;       
        }

        h2 + h2 {
        margin-top: 10px;
        }

        button{
            margin-top: 30px;
            padding: 15px;
            
            span{
                font-size: 1.4rem;
            }
        }
    }

    @media(max-width: 800px) {
        width: 50%;
        margin-top: 150px;
        
        h2{
        line-height: 1.2;
        font-size: 1.3rem;
        margin-bottom: 10px;
        color: #fff;
        text-align: left;
        font-weight:300;       
        }

        h2 + h2 {
        margin-top: 10px;
        }

        button{
            padding: 10px;
            
            span{
                font-size: 1.2rem;
            }
        }


    }

    

`
// FIM HOMEBOXLEFT //

// INICIO FORM //
export const Form = styled.form`

    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 35%;
    border-radius: 10px;
    padding:60px 20px;

    h1{
        font-weight: 700;
        margin-bottom: 60px
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
        background: #D8D8D8;
        border-radius: 35px;
        font-size: 1.5rem;
        width: 100%;
        margin-top: 60px;
        padding: 20px 20px;
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
        }
               
        span{
            font-size: 1.5rem;
                   
        }
    }

    //MEDIA-QUERY/
    @media(max-width: 1200px){
    
        width: 50%;
        padding:40px 40px;
        /* background-color: rgba(243, 243, 243, 0.37); */

        h1{
            font-weight: 700;
            margin-bottom: 30px;
            font-size: 1.7rem;
        }

        input{
            font-size: 1.3rem;
            border-width: 0px 0px 1px 0px;
            padding: 10px;
            border-color: #878686;
        }

        input + input {
            margin-top: 15px;
        }
        button{
            margin-top: 30px;
            padding: 10px;
            
            span{
                font-size: 1.2rem;
            }
        }
    }

    @media(max-width: 800px) {
    
        width: 90%;
        padding:20px 20px;
        background-color: rgba(243, 243, 243, 0.37);

        h1{
            font-weight: 700;
            margin-bottom: 20px;
            font-size: 1.5rem;
        }

        input{
            font-size: 1.0rem;
            border-width: 0px 0px 1px 0px;
            padding: 8px;
            border-color: #878686;
        }

        input + input {
            margin-top: 10px;
        }
        button{
            margin-top: 13px;
            padding: 10px;
            
            span{
                font-size: 1.2rem;
            }
        }

    }

`
//FIM FORM//

