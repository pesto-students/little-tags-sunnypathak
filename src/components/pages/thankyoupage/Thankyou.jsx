import React,{useEffect} from 'react';
import { connect } from "react-redux";
import './styles.scss';
import thankyou from "../../../assets/thankyou.png";
import thankgirl from "../../../assets/thankgirl.png";
// import { useHistory} from "react-router-dom";
import {clearCart} from '../../../redux/cart/cart.actions';
import { Link } from "react-router-dom";

function Thankyou(props) {
    // const redirect = useHistory();
    const {clearCartAsync,cartItems}= props;

    useEffect(()=>{
        // console.log("below is cart")
        // console.log(JSON.parse(localStorage.getItem("cartItems")));
        if(cartItems.length > 0){
            clearCartAsync();
        }
      
        
    })

    // const goToHome = () => {
    //     redirect.push("/");
    // }


    return (
        <div>
            <div className="thanks">
                <h1>this must be visible</h1>
                {/* <img src={thankyou} alt="something"></img> */}
                <div style={{background:`url(${thankyou})`, height:"600px",objectFit:"cover" , width:"auto",display:"flex",flexDirection:"column",alignItems:"center"}}>

                   
                   <div className="tgirl">
                    <img src={thankgirl} alt="thankyougirl"></img>
                   </div>
                   <div className="redlink">
                   {/* <button id="btn" onClick={goToHome}>Continue Shopping</button> */}

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
