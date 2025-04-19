import { Button } from "reactstrap";
function WelcomeBox() {
    return (
        <div class="rounded px-3 px-sm-4 py-3 py-sm-5 mx-2 my-3 bg-light">
            <h1 className="display-3">Welcome, everybody!</h1>
            <p className="lead">This is my very first page created with React! It's been a pain trying to
                put this thing together but I kinda made it! The only thing I didn't figure out how to do was separating the
                content from the footer... I tried to use an ID on the last card, on the whole container and on the footer itself, but
                the page would listen to all the CSS I could come up with, except the bottom/top margin...
                So this is the final product 😅
            </p>
            <p className="lead">
                <Button color="primary">Help me improve it!</Button>
                <p className="disclaimer">(^-doesn't actually work😇<br />not part of the exercise)</p>
            </p>
        </div>
    );
};

export default WelcomeBox;
