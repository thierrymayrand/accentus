import styled from "styled-components"
import axios from "axios"
import { useState } from "react"

const MainContainer = styled.div`
display: flex;
justify-content: center;
`


const Image = styled.img`
width:100%;
height: auto;
align-self: flex-start;
object-fit: cover;
margin-top: 5em;
border-radius: 0 1em 0 0;

`

const LeftContainer = styled.div`
display: flex;
justify-content: flex-start;
width: 50%;
    
    
    
`
const VC = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
    
`
const VCH100 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

    height: 100vh;
    
`
const RightTitleContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 60%;
`


const Title = styled.h2`
font-size: 2em;
margin: 2px 0;
font-weight: 700;
`

const P = styled.p`
font-size: 1.1
em;
`

const Button =
    styled.button`
    padding: 15px 0;
    font-size: 1em;
    font-weight: 600;
    color: rgb(248,246,247);
    background-color: black;\
    border: none;
    border-radius: 10px;
    cursor: pointer;
    `
const Input = styled.input`

font-size: 18px;
padding: 5px 10px;
`
const TextArea = styled.textarea`

font-size: 18px;
padding: 10px;
height: 200px;
`




function Contact() {

    const envoye = () => {
        axios.post('https://hook.us1.make.com/nl77qhrt5wa9jl0e9zjxao3vaj8pw762', {
            email,
            message,
        })
            .then(response => {
                console.log(response)
            })
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    const messageHandler = (event) => {
        setMessage(event.target.value)
    }
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <MainContainer>
            <VCH100>
                <VC>
                    <Title>Contactez nous via email</Title>
                    <Input onChange={emailHandler} type="text" placeholder="Email" />
                    <TextArea onChange={messageHandler} type="text" placeholder="Comment pouvons nous vous assister aujourd'hui ?" />
                    <Button onClick={envoye}>Envoye</Button>
                </VC>
            </VCH100>


        </MainContainer>
    )
}

export default Contact;