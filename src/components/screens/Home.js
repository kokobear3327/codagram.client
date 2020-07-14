import React, {useState, useEffect} from 'react';

const Home = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/allpost', {
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
        })
    }, [])
    return ( 
        <div className="home">
            {
                data.map(item=>{
                    return(
                    <div className="card home-card">
                    <h5>Richard</h5>
                    <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1581345837522-cc359ece37a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2537&q=80"/>
                    </div>
                    <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title your posts</h6> 
                    <p>this is an amazing description of what the picture is all about</p>
                        <input type="text" placeholder="add a comment"/>
                    </div>
                </div>
                    )
                })
            }

            
            </div>
     )
}

export default Home