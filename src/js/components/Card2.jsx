import React from 'react';

function Card2() {
    return (
        <div className="card" style={{ width: "15rem" }}>
            <div className="card-body w-100 px-0">
                <div className='card-top bg-secondary'>
                    <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg" class="card-img-top" alt="..." />
                </div>
                <h5 className="card-title">This... Is tommy too</h5>
                <p className="card-text">Yeah, I haven't figured out how to make all photos the same size
                    so i chose the same for all 4 o:) </p>
                    <hr />
             <div id="middleButton" className="graySpace">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>

            </div>
        </div>
    )
}


export default Card2;