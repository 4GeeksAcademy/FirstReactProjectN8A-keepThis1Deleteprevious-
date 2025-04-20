import React from 'react';

function Card1() {
    return (
        <div className="card mb-7" style={{ width: "15rem" }}>
            <div className="card-body w-100 px-0">
                <img src="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg" class="card-img-top" alt="..." />
                <h5 className="card-title">This is Tommy</h5>
                <p className="card-text">Tommy is a random, but super cute, cat from bongbabyhousevn on Pixabay. </p>
                <hr />
                <div className='bg-light px-2 w-100'>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}


export default Card1;