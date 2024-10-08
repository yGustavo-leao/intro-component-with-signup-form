import styled from "styled-components";

export const Container = styled.main`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin: auto;

    @media (min-width: 1000px) {
        padding: 0;
        display: grid;
        grid-template-areas:
        "intro tryFree"
        "intro form";
        align-items: center;
        column-gap: 3rem;
        grid-template-columns: auto 510px;
    }

    @media (min-width: 1400px) {
        width: 1200px;
    }
`

export const Introduction = styled.div`
    grid-area: intro;
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    color: ${({theme}) => theme.colors.white};

    @media (min-width: 1000px) {
        max-width: 550px;
        text-align: start;
    }
`

export const Title = styled.h1`
    font-weight: bold;

    @media (min-width: 1200px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1400px) {
        font-size: 3rem;
    }
`

export const Description = styled.p`
    @media (min-width: 1200px) {
        font-size: 1.1rem;
    }
`

export const TryFree = styled.button`
    grid-area: tryFree;
    padding: 1.5rem 5.5rem;
    border: none;
    border-radius: 10px;
    margin-top: 2rem;
    background-color: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.white};
    box-shadow: 0px 10px 5px rgba(0,0,0,.2);

    @media (min-width: 1000px) {
        margin: 0;
    }
`

export const TryFreeHighlight = styled.span`
    font-weight: 700;
`

export const Form = styled.form`
    grid-area: form;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    row-gap: 1rem;
    border-radius: 10px;
    box-shadow: 0px 10px 5px rgba(0,0,0,.2);
    background-color: ${({theme}) => theme.colors.white};
`

export const Input = styled.input`
    padding: 1rem;
    border-radius: 5px;
    font-weight: bold;
    border: 1px solid ${({theme}) => theme.colors.grayishBlue};
`

export const FormButton = styled.button`
    padding: 1rem;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    cursor: pointer;
    box-shadow: inset 0px -5px 5px rgba(0,0,0,.2);
    background-color: ${({theme}) => theme.colors.green};
    color: ${({theme}) => theme.colors.white};
`

export const Disclaimer = styled.p`
    text-align: center;
    color: ${({theme}) => theme.colors.grayishBlue};
    font-size: .9rem;
`

export const DisclaimerHighlight = styled.span`
    font-weight: 700;
    color: ${({theme}) => theme.colors.red};
    font-size: .8rem;
`