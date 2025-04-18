import React from 'react';

function Card3() {
    return (
        <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
            <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg" class="card-img-top" alt="..." />
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    'Suspendisse placerat. </p>
                    <div className='bg-light py-3 px-2 w-100'>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}


export default Card3;