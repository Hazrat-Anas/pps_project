import React, { Fragment } from 'react';
import main from './main.module.css'
import classes from './section7.module.css'
import section6 from './section6.module.css'
import { ListItem } from './Section6';
function Section7() {
    return <Fragment>
        <div className={`container-fluid ${classes.back_img}`}>
            <div className="container">

                <div className="row" style={{ position: 'relative' }}>
                    <div className="col-md-7  text-white">
                        <p className={`${main.h1} font-700`}>
                            THE PLATINUM PRO   <span style={{ color: '#05C46B' }}>PROMISE</span>
                        </p>
                        <p className={`${main.content} text-start font-400`}>
                            1. World’s FIRST and ONLY Progressive Supplement System
                        </p>
                        <p className={`${main.content} text-start font-400`}>
                            2. Highest-grade Ingredients and Standardized Extracts
                        </p>
                        <p className={`${main.content} text-start font-400`}>
                            3. Ironclad 100% Money-Back Guarantee
                        </p>
                        <p className={`${main.content} text-start font-400`}>
                            4. Exclusively Available Online – Not Available in Stores
                        </p>
                        <p className={`${main.content} text-start font-400`}>
                            5. Guaranteed Fresh – Shipped Less than 30 Days from Date of
                            Production
                        </p>
                        <p className={`${main.content}  text-startfont-400`}>
                            6. Made in the USA
                        </p>
                        <p className={`${main.content} text-start font-400`}>
                            7. Rated #1 by 20+ Men’s Health Websites
                        </p>
                        <p className={`${main.content} text-start font-400`}>
                            8. Over 10,000 units sold in 2021
                        </p>
                    </div>
                    <div className="col-md-5 text-center d-flex align-items-center">
                        <img className={`img-fluid d-md-block d-none ${classes.img_arrow}`} src={require('../../../images/Section6/arrow.png')} alt="" />
                        <img className={`img-fluid d-md-none d-block ${classes.img_only}`} src={require('../../../images/Section6/supplement.png')} alt="" />
                    </div>
                </div>

            </div>
        </div>
        <div className={`container text-center ${classes.white_section} `}>
            <p className={`${main.h1} font-700`}>
                LIMITLESS PERFORMANCE – LIFETIME RESULTS – GUARANTEED SATISFACTION
            </p>
            <p className={`font-400 ${main.content} text-center`}>
                We’ve dedicated the last 7 years to perfecting our system, and that’s how we know that the Platinum Pro System can change your life – and we’re backing it up with an absolute guarantee.

            </p>
        </div>
        <div className={`container-lg ${classes.last_back} py-md-4 py-4`}>
            <div className="row">
                <div className="offset-md-1 text-md-start text-center col-md-4">
                    <img className={`${classes.last_left_img} `} src={require('../../../images/Section6/Group61.png')} alt="" />
                </div>
                <div className="col-md-6 pt-md-4 my-md-0 my-3 pt-2 ">
                    <ListItem title='World’s FIRST and ONLY Scientifically Proven Performance Enhancement System' font='font-700' />
                    <ListItem title='Unlimited Progress – Permanent Results' font='font-700' />
                    <ListItem title='Maximum Energy, Muscle Performance, Sex Drive, and Erection Size' font='font-700' />
                    <ListItem title='⦁	100% MONEY-BACK GUARANTEE' font='font-700' />
                    <div className="row">
                            <div className=" offset-md-2 px-0 col-md-4">
                                <button className={`${section6.btn_order} font-700 d-md-block d-none text-white`}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row d-block d-md-none ">
                    <div className=" mx-auto text-center ">
                        <button className={`${section6.btn_order} font-700   text-white`}>
                            Order Now
                        </button>
                    </div>
                </div>
        </div>

    </Fragment>;
}

export default Section7;
