import React,{useState} from 'react';
import styles from './MainHeader.module.css';
import bgImage from '../images/BG.png';

const MainHeader = () => {
   
    return (
        <div className={`${styles.mainHeaderContainer}`} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='container'>
                <div className={`${styles.navigationFirstRow}`}>
                    <span className={`font-700 ${styles.red}`}>Call Us Now</span>
                    <span className='font-700'><a href='tel:1123321421'>1 123 321 421</a></span>
                </div>
            </div>
            <div className='container'>
                <div className={`${styles.mainNavigation}`}>
                    <div className={`font-700 ${styles.brandName}`}>
                        Platinum Pro Supplements
                    </div>
                    <div className={`font-400 ${styles.centerItemsNavigation}`}>
                        <a href='#'>Home</a>
                        <a href='#'>All Products</a>
                        <a href='#'>Cart</a> 
                    </div>
                    <div className={`${styles.navigationRightSide}`}>
                        <button>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={`${styles.eliteChoiceHeading}`}>
                    <h1 className='font-900'>An Elite Choice for <span className='font-400'><i>Male Performance</i></span></h1>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;
const Nav=()=>{
    return(
        <>
    <div className='container'>
                <div className={`${styles.navigationFirstRow}`}>
                    <span className={`font-700 ${styles.red}`}>Call Us Now</span>
                    <span className='font-700'><a href='tel:1123321421'>1 123 321 421</a></span>
                </div>
            </div>
            <div className='container'>
                <div className={`${styles.mainNavigation}`}>
                    <div className={`font-700 ${styles.brandName}`}>
                        Platinum Pro Supplements
                    </div>
                    <div className={`font-400 ${styles.centerItemsNavigation}`}>
                        <a href='#'>Home</a>
                        <a href='#'>All Products</a>
                        <a href='#'>Cart</a>
                    </div>
                    <div className={`${styles.navigationRightSide}`}>
                        <button>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
    </>
    )
    
}
