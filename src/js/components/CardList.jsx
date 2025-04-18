import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

function CardList() {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-center">
                <div className="col-sm-3">
                    <Card1 />
                </div>
                <div className="col-sm-3">
                    <Card2 />
                </div>
                <div className="col-sm-3">
                    <Card3 />
                </div>
                <div className="col-sm-3">
                    <Card4 />
                </div>
            </div>
        </div>
    )
}

export default CardList;