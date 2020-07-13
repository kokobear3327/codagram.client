import React from 'react';

const Home = () => {
    return ( 
        <div className="home">
            <div className="card home-card">
                <h5>Richard</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1581345837522-cc359ece37a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2537&q=80"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Richard</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1582470186762-df0fe1c1b473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6> ̰
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Richard</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1590036286282-0983862c6e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Richard</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1590095211266-79cf0f795f70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2591&q=80"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is an amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
        </div>
     )
}

export default Home