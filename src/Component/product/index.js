import React, { Component,useState,useEffect } from 'react';
import { connect } from 'react-redux';
import {addToCartAction} from "../../redux/counter/actions";
import  "../../css/style.css";

function List(items) {
    let item = items.item;
        return (
            <div className="content" key={item.id.toString()}>
                <div key={item.id}>
                    <ul className="col-sm-3 list" >
                        <a href="">
                            <li><img src={item.imgUrl} alt="" width="100" height="200"/></li>
                            <hr/>
                            <li>{item.price} $</li>
                            <li style={{height: "50px"}}>{item.name}</li>
                        </a>
                        <li>{item.inventory > 0 ?
                            <div>
                                <button onClick={() => {
                                    items.addToCartActions(item.id)
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
const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => ({
    addToCartActions: (id) => dispatch(addToCartAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

