import React, {Component, useState, useEffect} from 'react';
import Pagination from "react-js-pagination";
import {connect} from 'react-redux';
import {addToCart} from "../redux/cart/actions";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const mystyle = {
    textDecoration: "none",
    float: "left",
    listStyleType: "none",
    border: ".1px dotted gray",
    borderRadius: "5px",
    padding: "5px",
    margin: "5px",
    height: "355px",
    width: "210px"
};

function Home({addToCartActions, cart}) {
    const [activePage, setActivePage] = useState(1);
    const pageItems = 5;
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    const itemOnCart = (data) => {
        console.log(cart.products);

        var count = 0;
        if (data.products.length > 0) {
            data.products.map((item, index) => {
                if (item.selected === true) {
                    count += item.quantity;
                }
            })
        }
        return count;
    };

    const renderPost = cart.products.length > 0 ? cart.products.map((item, index) => {
        if (activePage === 1 && index < pageItems) {
            return (
                <div className="content" key={item.id.toString()}>
                    <div key={item.id}>
                        <ul className="col-sm-3" style={mystyle}>
                            <a href="">
                                <li><img src={item.imgUrl} alt="" width="100" height="200"/></li>
                                <hr/>
                                <li>{item.price} $</li>
                                <li style={{height: "50px"}}>{item.name}</li>
                            </a>
                            <li>{item.inventory > 0 ?
                                <div>
                                    <button onClick={() => {
                                        addToCartActions(item.id)
                                    }} className="btn btn-primary">Add To Cart
                                    </button>
                                    Stock:{item.inventory}
                                </div>
                                : <b>Outstock</b>
                            }
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
        if (activePage > 1 && index > (activePage - 1) * pageItems && index <= activePage * pageItems) {
            return (
                <div className="content" key={item.id.toString()}>
                    <div>
                        <ul className="col-sm-3" style={mystyle}>
                            <a href="">
                                <li><img src={item.imgUrl} alt="" width="100" height="200"/></li>
                                <hr/>
                                <li>{item.price} $</li>
                                <li style={{height: "50px"}}>{item.name}</li>
                            </a>
                            <li>{item.inventory > 0 ?
                                <div>
                                    <button onClick={() => {
                                        addToCartActions(item.id)
                                    }} className="btn btn-primary">Add To Cart
                                    </button>
                                    Stock:{item.inventory}
                                </div>
                                : <b>Outstock</b>
                            }
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
    }) : <h1>Loading posts...</h1>;

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1>This is Home Page</h1>
            </div>

                <div style={{
                    float: "right",
                    width: "150px",
                    height: "40px",
                    lineHeight: "40px",
                    textAlign: "center",
                    borderRadius: "10px",
                    backgroundColor: "gray",
                    color: "white"
                }}>
                    <Link to="/shoppingCart" style={{color: "white"}} >
                        <span>Gio hang ({itemOnCart(cart)})</span>
                    </Link>

                </div>

            <br style={{clear: "both"}}/>
            {renderPost}
            <br style={{clear: "both"}}/>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={pageItems}
                totalItemsCount={cart.products.length}
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
