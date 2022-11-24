import React, { Fragment, useState, useEffect } from 'react'
import classes from './MainNav.module.css'
import { ReactComponent as YourSvg } from '../../../images/ri_capsule-fill.svg';
// import  '../../../../src/App.css'
function MainNav(props) {
    const {linksColor='text-white',bg='#E5E5E5'}=props
    return (
        <Fragment>
            <div className='contianer-fluid ' style={{ backgroundColor: bg   }}>

                {/* for desktop start */}


                <div className="container d-none d-md-block " >
                    {/* <div className="row justify-content-end pt-2">
                      
                    </div> */}
                    <nav className="navbar navbar-expand-md">
                        
                        <a href='public/index.html' className={`navbar-brand ${linksColor} d-none d-md-block font-700`}>
                            <img style={{width:200}} className='img-fluid' src={require('../../../images/CompanyLogo.png')} alt="" />
                        </a>
                        <a href='public/index.html' className={`navbar-brand text-dark ${linksColor} d-block d-md-none font-700`}>
                            <img className='img-fluid' src={require('../../../images/CompanyLogo.png')} alt="" />
                        </a>
                        <button type='button' className="navbar-toggler px-0 pb-0 pt-3 align-center" data-bs-toggle="collapse" data-bs-target='#menu'>
                            <span className="navbar-toggler-icon">
                                <i className="fas text-py fa-bars"></i>
                            </span>
                        </button>
                        <div className="collapse d-flex align-items-end  navbar-collapse text-end" id="menu">
                            <ul className="navbar-nav ms-md-auto  ">
                                {/* <li className="nav-item mx-lg-3">
                                    <a href="public/index.html" style={{ color: '#EC3641' }} className="nav-link  font-700">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mx-lg-3  ">
                                    <a href="public/index.html" className={`nav-link ${linksColor}  font-700`}>
                                        All Products
                                    </a>
                                </li> */}
                                {/* <li className="nav-item mx-lg-3">
                                    <a href="public/index.html" className={`nav-link ${linksColor}  font-700`}>
                                        My Cart
                                        <div className={` ${linksColor} d-inline-block rounded-circle bg-danger ms-1 px-2`}  >{props.cartItem}</div>
                                    </a>
                                </li> */}
                            </ul>
                            <div className='align-middle'>
                                <p style={{ textAlign: 'right' }}>
                                    <span className={`font-700 text-py  pe-3 d-inline-block ${classes.responsive_call_text} ` }>
                                        Call Us Now
                                    </span>
                                    <a href="tel:8777265238"  className={`font-700 ${linksColor} ${classes.responsive_call_text} `} >
                                        1 123 321 421
                                    </a>
                                </p>
                                <button className="btn text-light w-100 font-600 bg-py" style={{ backgroundColor: '#EC3641' }}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>


                {/* for desktop end */}

                {/* for mobile View start */}
                <div className="container  d-md-none" >
                    <div className="row justify-content-end pt-2">
                        <p style={{ textAlign: 'center' }}>
                            <i class="fas fa-phone-alt  " style={{color:'white',fontSize:22}} ></i>
                            <span className={`font-700 text-py  px-3 d-inline-block ${classes.nav_call_text} `} >
                                Call Us Now
                            </span>
                         
                            <a href="tel:8777265238" className={`font-700 ${linksColor} ${classes.nav_call_text} ${classes.nav_call_num_link}  `}>
                                1 123 321 421
                            </a>
                        
                        </p>
                    </div>
                    <nav className="navbar navbar-expand-md">
                        <a href='public/index.html' className={`navbar-brand ${linksColor} d-none d-md-block font-700`  }>
                             <img   className='img-fluid' src={require('../../../images/CompanyLogo.png')} alt="" />
                        </a>
                        <a  href='public/index.html' className={`navbar-brand text-dark ${linksColor} d-block d-md-none font-700`}>
                            <img style={{width:142,height:45}} className='img-fluid' src={require('../../../images/CompanyLogo.png')} alt="" />
                        </a>
                        <button type='button' className="navbar-toggler px-0 pb-0  align-center" data-bs-toggle="collapse" data-bs-target='#menu'>
                            <span className="navbar-toggler-icon">
                                <i style={{fontSize:30}} className="fas text-py fa-bars"></i>
                            </span>
                        </button>
                        <div className="collapse  navbar-collapse text-center" id="menu">
                            <ul className="navbar-nav ms-md-auto me-md-auto">
                                {/* <li className="nav-item mx-lg-3">
                                    <a href="public/index.html" style={{ color: '#EC3641' }} className="nav-link  font-700">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mx-lg-3  ">
                                    <a href="public/index.html" className={`nav-link ${linksColor}  font-700`}>
                                        All Products
                                    </a>
                                </li> */}
                                {/* <li className="nav-item mx-lg-3">
                                    <a href="public/index.html" className={`nav-link ${linksColor}  font-700`}>
                                        My Cart
                                        <div className={` ${linksColor} d-inline-block rounded-circle bg-danger ms-1 px-2`}  >{props.cartItem}</div>
                                    </a>
                                </li> */}
                            </ul>
                            <button className="btn text-light font-600 bg-py" style={{ backgroundColor: '#EC3641' }}>
                                Order Now
                            </button>
                        </div>
                    </nav>
                </div>
                {/* for mobile View End */}
            </div>

        </Fragment>
    )
}

export default MainNav;
