import "./Home.css"
import { Link } from "react-router-dom"

import styled from "styled-components"

const Title = styled.h2`
font-size: 2em;
margin: 2px 0;
font-weight: 700;
color: white;
`

function Home() {


    return (
        <div className="home__container">
            <div className="home__hero">
                <Link className="home__hero-left" to="/about">
                    <div >
                        <div className="home__hero-left-text-container">
                            <Title >À propos de nous</Title>
                        </div>

                    </div>
                </Link>
                <Link className="home__hero-right" to="/contact">

                    <div >
                        <div className="home__hero-right-text-container">
                            <div>
                                <Title>Contactez Nous</Title>

                            </div>

                        </div>

                    </div>


                </Link>

            </div>

        </div>
    )
}

export default Home;