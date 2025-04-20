import React from 'react';

function Card3() {
    return (
        <div className="card" style={{ width: "15rem" }}>
            <div className="card-body w-100 px-0">
            <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg" class="card-img-top" alt="..." />
                <h5 className="card-title">Guess whooo :p</h5>
                <p className="card-text">I guess for this and the next one I'm gonna stick to the lorem ipsum😅: Lorem ipsum dolor sit amet. </p>
                <hr />
                    <div className='bg-light'>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}


export default Card3;