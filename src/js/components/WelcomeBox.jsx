import { Button } from "reactstrap";
function WelcomeBox() {
    return (
        <div class="rounded px-3 px-sm-4 py-3 py-sm-5 mx-2 my-3 bg-light">
            <h1 className="display-3">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat, risus sit amet
                sagittis tristique, eros ex pretium ex, in efficitur odio augue in ante. Vivamus nec finibus nisi, vel fringilla
                dui. Morbi cursus consectetur viverra. Aenean fermentum quis nisi eget aliquet.</p>
            <p className="lead">
                <Button color="primary">Call to action!</Button>
            </p>
        </div>
    );
};

export default WelcomeBox;
