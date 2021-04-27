import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Container>
            <Content>
                <CTA>
                    <SignIn href="/SignIn">Sign-In</SignIn>
                    <Description>
                        Auction-House facilitates for its users the buying and selling of assets,
                        such as works of art and collectibles.
                    </Description>
                </CTA>
                <BackgroundImage />
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
`;

const CTA = styled.div`
    margin-top: 50vh;
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const SignIn = styled.a`
    font-weight: 700;
    color: #f9f9f9;
    background-color: #691616;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 2px;
    font-size: 18px;
    padding: 15px 0;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover{
        background-color: #c34f5a;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    width: 100%;
    font-size: 12px;
    /* haut | horizontal | bas */
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.4px;
`;

const BackgroundImage = styled.div`
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat;
    background-image: url("/images/home-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;


export default Home;
