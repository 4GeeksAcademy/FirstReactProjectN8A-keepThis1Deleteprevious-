import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

function CardList() {
    return (
        <div className="container-fluid">
            <div className="row">

                <Card1 className="col-sm-6 col md-4 col-lg-3" />

                <Card2 className="col-sm-6 col md-4 col-lg-3" />

                <Card3 className="col-sm-6 col md-4 col-lg-3" />

                <Card4 className="col-sm-6 col md-4 col-lg-3" />

            </div>
        </div>
    )
}

export default CardList;