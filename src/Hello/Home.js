import React, { Component,useState,useEffect } from 'react';
import Data from "./Data/product";
import { Container,Row,Col,Image } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { connect } from 'react-redux';
import {addToCart} from "../redux/cart/actions";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from "../Component/Cart";

const mystyle = {
    textDecoration:"none",
    float: "left",
    listStyleType:"none",
    border:".1px dotted gray",
    borderRadius:"5px",
    padding:"5px",
    margin:"5px",
    height:"355px",
    width:"210px"
};
function Home  ({addToCartActions,cart}) {
    const [posts, setPosts] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const pageItems = 5;
    const handlePageChange = (pageNumber) =>  {
        setActivePage(pageNumber);
    };
    const itemOnCart = (data) => {
        // console.log(data.products);
        var count = 0;
        if (data.products.length > 0){
            data.products.map((item, index) => {
                if (item.selected === true) {
                    count += item.quantity;
                }
            })
        }
        return count;
    };
    useEffect(() => {
        setPosts(Data);
    }, []);
    const renderPost = posts.length > 0 ? posts.map((item, index) =>    {
        if( activePage === 1 && index < pageItems) {
            return (
                <div className="content">
                    <div key={item.id} >
                        <ul className="col-sm-3" style={mystyle}>
                            <a href="">
                                <li><img src={item.imgUrl} alt="" width="100" height="200"/></li>
                                <hr/>
                                <li>{item.price} $</li>
                                <li style={{height:"50px"}}>{item.name}</li>
                            </a>
                            <button onClick={() => {addToCartActions(item.id)}} className="btn btn-primary">Add To Cart</button>
                        </ul>
                    </div>
                </div>
            );
        }
        if(activePage > 1 && index > (activePage-1)*pageItems && index <= activePage*pageItems){

            return (
                <div className="content">
                    <div >
                        <ul className="col-sm-3" style={mystyle}>
                            <a href="">
                                <li><img src={item.imgUrl} alt="" width="100" height="200"/></li>
                                <hr/>
                                <li>{item.price} $</li>
                                <li style={{height:"50px"}}>{item.name}</li>
                            </a>
                            <button onClick={() => {addToCartActions(item.id)}} className="btn btn-primary" value={item.id}>Add To Cart</button>
                        </ul>
                    </div>
                </div>
            );
        }
    }) :  <h1>Loading posts...</h1>;

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1>This is Home Page</h1>
            </div>
            <Router>
                <div style={{float:"right",width:"150px",height:"40px",lineHeight:"40px",textAlign:"center",borderRadius:"10px",backgroundColor:"gray",color:"white"}}>
                    <Link to={'/shoppingCart'} >
                        <span>Gio hang ({itemOnCart(cart)})</span>
                    </Link>
                </div>
                <Switch>
                    <Route path='/shoppingCart' component={Cart} />
                </Switch>
            </Router>

            <br style={{clear:"both"}} />
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

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => ({
    addToCartActions: (id) => dispatch(addToCart(id))
});

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
