import React from 'react';
import Header from '../../components/header/Header';
import './styles.scss';
const MainLayout = ({children}) => {
    return(
        <div className='mainLayout-div'>
            <Header />
            <div className="main">
                {children}
            </div>
        </div>
    );
}

export default MainLayout;