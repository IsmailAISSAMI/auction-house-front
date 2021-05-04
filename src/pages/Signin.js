import React from 'react';
import styled from 'styled-components';

function Signin() {
    return (
        <Container>
            <Content>
                <SideImage src="/images/signin-image.svg" alt=""/>
                <SignInForm>
                    <FormHeader>
                        <h2>Welcome back</h2>
                        <h4>Log in to your account using email and password.</h4>
                    </FormHeader>
                    
                    <FormContainer>
                        <input type="email" class="email-field" placeholder="Email Address" />
                        <input type="password" class="password-field" placeholder="Password" />
                        <button class="login-button">LOGIN</button>
                    </FormContainer>
                </SignInForm>
            </Content>
        </Container>
    )
}


const Container = styled.section`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
`;

const SignInForm = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const SideImage = styled.img`
    height: 50vh;
    flex:1;

    @media (max-width: 700px) {
        display: none;
    }

`;

const FormHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h2{
        margin: 0;
        color: #691616;
        font-weight: 700;
        letter-spacing: 1.4px;
    }

    h4 {
        margin-top: 10px;
        font-weight: normal;
        font-size: 14px;
        color: #808080;
        line-height: 1.5;
        letter-spacing: 1.4px;
    }

`;

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
        width: 60%;
        min-width: 250px;
        height: 40px;
        margin-top: 20px;
        padding: 0 16px;
        border: 1.5px solid #691616;
        border-radius: 10px;
        outline: 0;
        transition: .2s;
        letter-spacing: 1.2px;
    }

    input:focus {
        border-color: #C34F5A;
    }

    button {
        width: 60%;
        min-width: 250px;
        margin-top: 20px;
        padding: 12px 10px;
        border: 0;
        border-radius: 5px;
        background: linear-gradient(to right bottom, #691616, #7f2425, #953236, #ac4047, #c34f5a);
        color: #fff;
        font-weight: 700;
        letter-spacing: 1.4px;
    }
    
    button:hover {
        background: #c34f5a;
        letter-spacing: 4px;
    }
`;

export default Signin;
