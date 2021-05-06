import React,{useEffect} from 'react';
import { connect } from "react-redux";
import './styles.scss';
import thankyou from "../../../assets/thankyou.png";
import thankgirl from "../../../assets/thankgirl.png";
import { useHistory} from "react-router-dom";
import {clearCart} from '../../../redux/cart/cart.actions'

function Thankyou(props) {
    const redirect = useHistory();
    const {clearCartAsync,cartItems}= props;

    useEffect(()=>{
        // console.log("below is cart")
        // console.log(JSON.parse(localStorage.getItem("cartItems")));
        if(cartItems){
            clearCartAsync()
        }
      
        
    })


    return (
        <div>
            <div className="thanks">
                <h1>this must be visible</h1>
                {/* <img src={thankyou} alt="something"></img> */}
                <div style={{background:`url(${thankyou})`, height:"600px",objectFit:"cover" , width:"auto",display:"flex",flexDirection:"column"}}>

                   
                   <div className="tgirl">
                    <img src={thankgirl} alt="thankyougirl"></img>
                   </div>
                   <div>
                   <button id="btn" onClick={()=>redirect.push('/')}>Continue Shopping</button>
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
