import React, { Component,useState,useEffect } from 'react';
import { connect } from 'react-redux';
import {addToCartAction} from "../redux/counter/actions";

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

function List(item,{addToCartActions}) {
    const items = item.item;
    return (
        <div className="content">
            <div >
                <ul className="col-sm-3" style={mystyle}>
                    <a href="">
                        <li><img src={items.imgUrl} alt="" width="100" height="200"/></li>
                        <hr/>
                        <li>{items.price} $</li>
                        <li style={{height:"50px"}}>{items.name}</li>
                    </a>
                    <button onClick={() => {addToCartActions()}} className="btn btn-primary">Add To Cart</button>
                </ul>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => ({
    addToCartActions: () => dispatch(addToCartAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

