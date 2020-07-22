import React, { Component,useState,useEffect } from 'react';
import {connect} from "react-redux";
import Pagination from "react-js-pagination";
import {addToCart} from "../redux/cart/actions";
import {removeFromCart} from "../redux/cart/actions";
import {updatequantity} from "../redux/cart/actions";

function cartShow({removeItemFromCart,updateItemFromCart,cart}) {
    const mystyle = {
        textDecoration:"none",
        float: "left",
        listStyleType:"none",
        border:".1px dotted gray",
        borderRadius:"5px",
        padding:"5px",
        margin:"5px",
        height:"380x",
        width:"210px"
    };
    const pageItems = 5;
    let total = 0;
    const renderCart = cart.products.length > 0 ? cart.products.map((item, index) => {
        if (item.selected === true) {
            total +=  item.quantity * item.price;
            return (
                <div className="content">
                    <div>
                        <ul className="col-sm-3" style={mystyle}>
                            <a href=""><li><img src={item.imgUrl} alt="" width="100" height="200"/></li></a><hr/>

                            <li>{item.quantity * item.price} $</li>
                            <li style={{height: "50px"}}>{item.name}</li>
                            <li>QTY :<input className="form form-control" type="number" value={item.quantity} name="qty"/></li>

                            <button onClick={()=>{removeItemFromCart(item.id)}} className="btn btn-primary">Remove</button>
                            <button style={{margin:"0px 10px"}} onClick={()=>{updateItemFromCart(10,item.id)}} className="btn btn-primary">Update</button>
                        </ul>
                    </div>
                </div>
            );
        }
    }) : null;
    return (
        <div style={{border:"1px solid blue",borderRadius:"10px"}}>
            <div className="d-flex justify-content-center">
                <h1>This is Cart Page</h1>
            </div>
            {renderCart}
            <br style={{clear:"both"}} />
            <h2> {total !== 0 ? <Total total={total} /> : 'khong co sp'}</h2>
        </div>
    );
}

function Total(total) {
    return (
        <h2>Total: {total.total}</h2>
    );
}
const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => ({
    addToCartActions: (id) => dispatch(addToCart(id)),
    removeItemFromCart: (id) => dispatch(removeFromCart(id)),
    updateItemFromCart: (id,qty) =>  dispatch(updatequantity(id,qty))
});

export default connect(mapStateToProps, mapDispatchToProps)(cartShow);
