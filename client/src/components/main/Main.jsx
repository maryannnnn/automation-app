import './main.scss'
import Header from "./header/Header";
import Offer from "./offer/Offer";
import Portfolio from "./portfolio/Portfolio";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <Offer />
            <Portfolio />
        </div>
    )
}

export default Main;