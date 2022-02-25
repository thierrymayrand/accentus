
import { Link } from "react-router-dom"
import image from "../images/house.png"
import styled from "styled-components"

const MainContainer = styled.div`
display: flex;
justify-content: space-between;
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
const RightContainer = styled.div`
display: flex;
justify-content: center;
width: 50%;
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
`

const P = styled.p`
font-size: 1.1
em;
`

const Button =
    styled.button`
    padding: 1em 0;
    font-size: 1em;
    font-weight: 600;
    color: rgb(248,246,247);
   display: inline;
    border: none;
    border-radius: 1em;
    cursor: pointer;
    background-color: black;
    width: 100%;
    
    `
const linkStyle = {
    textDecoration: "none",
    color: 'white',


};

function About() {
    return (
        <MainContainer className="about__main">

            <LeftContainer >
                <Image src={image} />
            </LeftContainer>

            <RightContainer>
                <RightTitleContainer>
                    <Title >
                        Notre expertise</Title>
                    <P>
                        Leader dans le marché de la gestion immobilière au Québec, Accentus est une société engagée qui offre un éventail de services de haute qualité.
                    </P>
                    <Link style={linkStyle} to="/contact"><Button>Nous Contacter</Button> </Link>
                </RightTitleContainer>

            </RightContainer>
        </MainContainer>
    )
}

export default About;