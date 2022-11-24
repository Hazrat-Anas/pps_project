import React, { Fragment } from 'react';
import classes from './section4.module.css'
import main from './main.module.css'

const Card = (props) => {
    return (
        <Fragment>
                <div className={`${classes.card} my-md-3 my-3 py-2 pe-1 col-12`} style={{position:'relative'}} >
                        <img className={`${classes.cardIcon} my-auto d-inline-block`} src={props.icon} alt="" />
                    <div className="row">
                        <div className="col-md-3 mb-2 mb-md-0">
                            <img className={`${classes.cardImg}`} src={props.image} alt="" />
                        </div>
                        <div className="col-md-9">
                            <p className={`font-700 text-white`} style={{ fontSize: 16 }}>
                                {props.title}
                            </p>
                            <p className={`font-400 my-auto  text-white`}>
                                {props.details}
                            </p>
                        </div>
                    </div>
                </div>
        </Fragment>
        // remove below after new card
        // <div className=" col-12  my-2 my-md-1" >
        //     <div className={`${classes.card}`} style={{height:'100%'}} >
        //         <div className={`px-1 pt-1 ${classes.Upper}`}>
        //             <img className={`${classes.cardImg}`} src={props.image} alt="" />
        //             <p className={`font-700 text-white my-2`} style={{ fontSize: 12 }}>
        //                 STAGE 1: IMPROVED TESTOSTERONE PRODUCTION
        //             </p>
        //             <div className='text-center'>
        //                 <img className={`${classes.cardIcon} mx-auto`} src={props.icon} alt="" />

        //             </div>
        //         </div>
        //         <div className='py-3 d-flex mt-auto px-md-3 px-1'>
        //             <p className={`font-400 my-auto text-white`}>
        //                 {props.details}
        //             </p>

        //         </div>
        //     </div>
        // </div>
    )
}

function Section4() {
    return <div className={`${classes.section} pt-3 pb-1 pt-md-5 pb-md-4`}>
        <div className="container">
            <p className={`${main.h1} font-700 text-white text-center `}>
                PLATINUM PRO 4 STAGES OF TESTOSTERONE ENHANCEMENT
            </p>
            <p className={`${main.content} font-300 text-white text-center `}>
                The Platinum Pro System takes advantage of the body’s natural process, instead of artificially enhancing testosterone levels. Each of our natural ingredients is carefully selected for its scientifically proven ability to enhance testosterone levels at various stages.
            </p>
            <div className="container " >
                <div className="row mt-2 mt-md-3 " style={{ postion: 'relative' }} >
                    <Card
                        title='STAGE 1: IMPROVED TESTOSTERONE PRODUCTION'
                        details='96% of the body’s testosterone is produced in the Leydig cells in the testes. These are stimulated by the Luteinizing Hormone (LH), and it responds by producing testosterone. Our formula includes ingredients that can naturally stimulate the Leydig cells in conjunction with the Luteinizing Hormone to accelerate and increase testosterone production. '
                        icon={require('../../../images/section4Product/icon1.png')} image={require('../../../images/section4Product/1.png')} />
                    <Card
                    title='STAGE 2: CORTISOL REDUCTION'
                        details='Cortisol, the stress hormone, is the primary antagonist for testosterone production. It shifts the body’s metabolism from an anabolic state to a catabolic state, and this severely diminishes testosterone development. The Platinum Pro System features ingredients that are capable of blocking cortisol naturally to help maintain the body’s anabolic state and increase testosterone production naturally. 
                    ' icon={require('../../../images/section4Product/icon2.png')} image={require('../../../images/section4Product/2.png')} />
                    <Card
                    title='STAGE 3: DHT and ESTROGEN REDUCTION'
                    details='Dihydrotestosterone (DHT) and estrogen are two hormones that are derived from testosterone. With higher testosterone levels, an increase in DHT and estrogen are expected, and this would create catastrophic side effects, including mood changes, prostate enlargement, and even erectile dysfunction. The Platinum Pro System features natural ingredients that block the enzymes that convert testosterone to DHT and estrogen to maintain high levels of testosterone while reducing the effects of these testosterone metabolites. 
' icon={require('../../../images/section4Product/icon3.png')} image={require('../../../images/section4Product/3.png')} />
                    <Card 
                    title='STAGE 4: FREE TESTOSTERONE ENHANCEMENT'
                    details='About 98% of the body’s testosterone is bound to the sex hormone-binding globulin (SHBG) and albumin, and the remaining 2% is referred to as the “unbound” or free testosterone. This represents the bioavailable testosterone that is free to enter cells and carry out its functionality. Increasing free testosterone is essential to maximize its androgenic effects and develop increased energy, muscle, stamina, and libido. The formula contains ingredients that bind naturally to SHBG and albumin to free up testosterone to further boost your performance.' icon={require('../../../images/section4Product/icon4.png')} image={require('../../../images/section4Product/4.png')} />
                </div>
            </div>

        </div>
    </div>;
}

export default Section4;
