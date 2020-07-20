import React, { Component,useState,useEffect } from 'react';
import Data from "./Data/product";
import { Container,Row,Col,Image } from 'react-bootstrap';
import Pagination from "react-js-pagination";

const mystyle = {
    textDecoration:"none",
    float: "left",
    listStyleType:"none",
    border:".1px dotted gray",
    borderRadius:"5px",
    padding:"5px",
    margin:"5px",
    height:"350px",
    width:"210px"
};
function Home  () {
    const [posts, setPosts] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const pageItems = 5;

    const renderPost = posts.length > 0 ? posts.map((item, index) => {
        if( activePage == 1 && index < pageItems) {
            return (<List item={item} />);
        }
        if(activePage > 1 && index > (activePage-1)*pageItems && index <= activePage*pageItems){
            console.log(index);
            return (<List item={item} />);
        }
    }) :  <h1>Loading posts...</h1>;
    const handlePageChange = (pageNumber) =>  {
        setActivePage(pageNumber);
    };
    useEffect(() => {
        setPosts(Data);
    }, []);
    return (
            <div>
                <div className="d-flex justify-content-center">
                    <h1>This is Home Page</h1>
                </div>
                {renderPost}

                <br style={{clear:"both"}} />
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={pageItems}
                    totalItemsCount={posts.length}
                    pageRangeDisplayed={3}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </div>
    );
}

function List(item) {
    const items = item.item;
    return (
        <div className="content">
            <div >
                <ul className="col-sm-3" style={mystyle}>
                    <a href="">
                        <li><img src={items.imgUrl} alt="" width="100" height="200"/></li>
                        <hr/>
                        <li>{items.price} $</li>
                        <li>{items.name}</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Home;