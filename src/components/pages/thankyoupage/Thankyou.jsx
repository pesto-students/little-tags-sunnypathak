import React,{useEffect} from 'react';
import { connect } from "react-redux";
import './styles.scss';

import thankgirl from "../../../assets/thankgirl.png";

import {clearCart} from '../../../redux/cart/cart.actions';
import { Link } from "react-router-dom";

function Thankyou(props) {
    
    const {clearCartAsync,cartItems}= props;

    useEffect(()=>{
      
        if(cartItems.length > 0){
            clearCartAsync();
        }
      
        
    })


    return (
        <div className="thq-container">
            <div className="thanks">
                
                {/* <img src={thankyou} alt="something"></img> */}
                <div className="thqbackground">

                   
                   <div className="tgirl">
                    <img src={thankgirl} alt="thankyougirl"></img>
                   </div>
                   <div className="redlink">
                   

                    <Link to="/">Continue shopping</Link>
                   </div>
                    
                    

                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    cartItems: state.cart.cartItems
  });

const mapDispatchToProps = dispatch => ({
    clearCartAsync: () => dispatch(clearCart())
  });

export default connect(mapStatetoProps, mapDispatchToProps)(Thankyou)
