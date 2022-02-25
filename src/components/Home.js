import "./Home.css"
import { Link } from "react-router-dom"
function Home() {

    return (
        <div className="home__container">
            <div className="home__hero">
                <Link className="home__hero-left" to="/about">
                    <div >
                        <div className="home__hero-left-text-container">
                            <h1 >À propos de nous</h1>
                        </div>

                    </div>
                </Link>
                <Link className="home__hero-right" to="/contact">

                    <div >
                        <div className="home__hero-right-text-container">
                            <div>
                                <h2 className="home__hero-right-title">Contactez Nous</h2>
                                <p className="home__hero-right-p">La solution</p>
                            </div>

                        </div>

                    </div>


                </Link>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9YffrCViTVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>

        </div>
    )
}

export default Home;