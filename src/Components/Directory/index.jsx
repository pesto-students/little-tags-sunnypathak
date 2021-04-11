import React from 'react';
import { Link } from 'react-router-dom';
import Bg1 from '../../assets/shopWomens.jpg';
import Bg2 from '../../assets/shopMens.jpg';
import './styles.scss';

const Directory = ({bgImage}) => {
    return(
        <div className="directory">
            <div className="wrap">
                <div className="item" style={{backgroundImage: `url(${Bg1})`,backgroundPosition:'center'}}>
                    <Link to="/">
                         <span>Shop Womens</span> 
                    </Link>
                </div>
                <div className="item" style={{backgroundImage: `url(${Bg2})`, backgroundPosition:'top'}}>
                    <Link to="/">
                        <span>Shop Mens</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Directory;
