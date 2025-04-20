import { Button } from "reactstrap";
function WelcomeBox() {
    return (
        <div class="rounded px-3 px-sm-4 py-3 py-sm-5 mx-2 my-3 bg-light">
            <h1 className="display-3">Welcome, everybody!</h1>
            <p className="lead">This is my very first page created with React! It's been a pain trying to
                put this thing together but I kinda made it! The only issue I see with my super rookie eyes is I didn't figure out how to have the cards have the same size despite
                the different text lenght, BUT, the reference they gave us (which was a gif) did have the same text, so I just made them all the 
                same text lenght (and the exact same picture for the same reason😇)...
                So this is the final product for this project😅
            </p>
            <p className="lead">
                <Button color="primary">Help me improve it!</Button>
                <p className="disclaimer">(^-doesn't actually work😇<br />not part of the exercise)</p>
            </p>
        </div>
    );
};

export default WelcomeBox;
