import WelcomeBox from "./WelcomeBox";
import CardList from "./CardList"

function Container() {
    return (
        <div className="container-fuid" id="centerAll">
            <WelcomeBox />
            <CardList />
        </div>
    )
}

export default Container;