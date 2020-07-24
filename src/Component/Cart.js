import React, { useRef} from 'react';
import {connect} from "react-redux";
import {addToCart} from "../redux/cart/actions";
import {removeFromCart} from "../redux/cart/actions";
import {updatequantity} from "../redux/cart/actions";

function cartShow({removeItemFromCart, updateItemFromCart, cart, qty}) {
    const mystyle = {
        textDecoration: "none",
        float: "left",
        listStyleType: "none",
        border: ".1px dotted gray",
        borderRadius: "5px",
        padding: "5px",
        margin: "5px",
        height: "380x",
        width: "210px"
    };
    let total = 0;

    let renderCart = cart.products.length > 0 ? cart.products.map((item, index) => {
        let refs = 'ref'+index;
        refs = useRef();
        if (item.selected === true) {
            total += item.quantity * item.price;
            return (
                <div className="content" key={item.id.toString()}>
                    <div>
                        <ul className="col-sm-3" style={mystyle}>
                            <a href="">
                                <li><img src={item.imgUrl} alt="" width="100" height="200"/></li>
                            </a>
                            <hr/>

                            <li>{item.quantity * item.price} $</li>
                            <li style={{height: "50px"}}>{item.name}</li>
                            <li>QTY :<input className="form form-control" type="number" ref={refs} min="1" max={item.inventory + item.quantity}
                                            defaultValue={item.quantity} name="qty"/></li>

                            <button onClick={() => {
                                removeItemFromCart(item.id)
                            }} className="btn btn-primary">Remove
                            </button>
                            <button style={{margin: "0px 10px"}} onClick={() => {
                                updateItemFromCart({id: item.id, qty: refs.current.value})
                            }} className="btn btn-primary">Update
                            </button>
                        </ul>
                    </div>
                </div>
            );
        }
    }) : null;
    return (
        <div style={{border: "1px solid blue", borderRadius: "10px"}}>
            <div className="d-flex justify-content-center">
                <h1>This is Cart Page</h1>
            </div>
            {renderCart}
            <br style={{clear: "both"}}/>
            <h2>{total !== 0 ? <p> Total: {total} </p>: 'khong co sp'}</h2>
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
    qty: state.qty
});

const mapDispatchToProps = dispatch => ({
    addToCartActions: (id) => dispatch(addToCart(id)),
    removeItemFromCart: (id) => dispatch(removeFromCart(id)),
    updateItemFromCart: (data) => dispatch(updatequantity(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(cartShow);
