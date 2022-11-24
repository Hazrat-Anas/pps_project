import React, { Fragment } from 'react';
import classes from './section5.module.css'
import main from './main.module.css'
import Accordian from './AccordianSecondSection'

function Card(props) {
    return <div className={`${classes.card} mb-2 mb-md-3 p-3`}>
        <p className={`${classes.cardTitle} font-700 d-block d-md-none text-white`}>
            {props.title}
        </p>
        <div className="row">
            <div className={`col-md-9 text-white order-3 order-md-0 font-400 ${main.content}`}>
                <p className={`${classes.cardTitle} font-700 d-none d-md-block text-white`}>
                    {props.title}
                </p>
                {props.details}

            </div>
            <div className="col-md-3 d-flex text-center mb-md-0 mb-2 ">

                <img className='img-fluid  w-100' src={props.img} alt="" style={{objectFit:'cover'}} />
            </div>
        </div>
    </div>;
}


function Card2(props) {
    return <div className={`${classes.card2} mb-md-2 row`}>
        <div className="col-md-3 d-md-flex   text-center">
            <p className={`bg-dark  font-700  d-md-none p-1 d-block text-white ${main.content} `}>
                {props.title}
            </p>
            <img className='img-fluid  mb-md-0 mb-2 align-middle w-100' src={props.img} alt=""
            style={{objectFit:'contain'}}
            />
        </div>
        <div className="col-md-9">
            <p className={`bg-dark d-md-block font-700 p-1 d-none text-white ${main.content} `}>
                {props.title}
            </p>
            <p className={`${main.content} font-400`}>
                {props.details}
            </p>
        </div>
    </div>;
}

function Card3(props) {
    return <div className={`${classes.card2} mb-2 mb-md-4 row`}>
        <div className="col-md-4 col-lg-3 d-md-flex  text-center">
            <p className={`mb-0 font-700 text-start d-md-none  mb-1 d-block ${main.content}`}>
                {props.title}
            </p>
            <img className='img-fluid mb-md-0 mb-2  w-100' src={props.img} alt=""
            style={{objectFit:'cover',objectPosition:'top'}}
            />
        </div>
        <div className="col-md-8 col-lg-9">
            <p className={`d-md-block font-700  d-none ${main.content}`}>
                {props.title}
            </p>
            <p className={`${main.content} font-400`}>
                {props.details}
            </p>
        </div>
    </div>;
}


function Section05() {
    return <Fragment>
        <div className={`${classes.container} container-fluid`}>
            <div className="container">
                <div className="row">
                    <p className={`${main.h1} text-center font-700`}>
                        THE PLATINUM PRO SYSTEM – MORE THAN JUST TESTOSTERONE
                    </p>
                    <p className={`${main.content} text-center font-400 mb-0`}>
                        Testosterone enhancement is just one part of the performance equation. You need more than testosterone to truly experience your peak performance and enjoy true male perfection, just as you imagined.
                    </p>
                </div>
            </div>
            <div className={`container ${classes.cardsSection}`}>
                <div className="row">
                    <Card details='Nitric Oxide is the natural compound that helps regulate blood pressure. It allows blood vessels to dilate to allow a larger volume of blood to pass through. Higher nitric oxide levels greatly improve muscle strength and stamina, along with faster muscle repair and healing. The Platinum Pro System contains high levels of nitric oxide boosters that greatly improve muscle growth and performance.'
                        title='Nitric Oxide Boost'
                        img={require('../../../images/section5Product/Rectangle188.png')} />
                    <Card
                        img={require('../../../images/section5Product/Rectangle191.png')}
                        details='Stress is a highly catabolic trigger that slows down your progress. When you’re in a stressed state, the body releases cortisol, which could break down muscle tissue. The Platinum Pro System includes cortisol blockers to help you effectively block stress and allow you to become more resistant to the physiological impacts of stress. '
                        title='Stress Management'
                    />
                    <Card
                        img={require('../../../images/section5Product/Rectangle192.png')}
                        title='Cognitive Boost'
                        details='Performance extends beyond physical metrics. Cognitive enhancement is a key factor that allows you truly enjoy and experience male perfection. The Platinum Pro System includes natural nootropics to help enhance your energy, alertness, and cognitive performance to enable a comprehensive mind and body boost.'
                    />
                </div>
            </div>
            <div className="container px-0">
                <p className={`${main.h1} text-center font-700 mb-0`}>
                    The Platinum Pro System Ingredients
                </p>
                <div className={`${classes.section3} px-0  container  `}>
                    <Card2 img={require('../../../images/section5Product/image10.png')}
                        details='Fenugreek is an essential performance-enhancing ingredient that allows you to build up higher levels of testosterone without consequently increasing DHT levels. Since testosterone is naturally converted into DHT, fenugreek interrupts the process, and allows you to build higher testosterone levels instead of harmful DHT levels. '
                        title='Fenugreek (Trigonella foenum-graecum)'
                    />
                    <Card2 img={require('../../../images/section5Product/image4.png')}
                        details='More commonly known as Tongkat Ali, Longjack is the ultimate testosterone-boosting ingredient that engages multiple testosterone-boosting pathways. It affects every stage of testosterone development, from increasing testosterone production, to reducing cortisol, and increasing free testosterone levels.'
                        title='Longjack'
                    />
                    <Card2
                        details='KSM-66 is the most potent and most effective form of Ashwagandha, the premier natural adaptogen. Traditionally, ashwagandha is used to treat mood and stress issues, and modern applications of ashwagandha revealed that it is a powerful adaptogen that blocks cortisol from reducing testosterone production.'
                        title='KSM-66® (Withania Somnifera)'
                        img={require('../../../images/section5Product/image5.png')} />
                    <Card2
                        title='ZMA'
                        details='ZMA is an acronym that stands for Zinc and Magnesium Aspartate. It is a scientifically proven mineral blend that can help to increase free and total testosterone levels to enhance muscle development and increase sex drive'
                        img={require('../../../images/section5Product/image11.png')} />
                </div>
                <p className={`font-700 ${main.h1} text-center`}>
                    Platinum Pro Proprietary Blend
                </p>
                <div className={`${classes.section4} px-0 container-fluid  `}>
                    <Card3 img={require('../../../images/section5Product/image12.png')}
                        details='L-Arginine is a semi-essential amino acid that acts as a precursor to nitric oxide. Nitric oxide is a key compound that triggers vasodilation. It binds with GMP to create cGMP, the compound that relaxes smooth muscles in blood vessels, effectively dilating blood vessels and improving blood flow. Increased blood flow improves nutrient delivery to the muscles, which greatly enhances strength, stamina, and muscle recovery.'
                        title='L-Arginine'
                    />
                    <Card3 img={require('../../../images/section5Product/image15.png')}
                        details='Horny Goat Weed, or Epimedium Sagittatum, is an herb known for its various androgenic benefits. It has intense t-level boosting and PDE-5 inhibitor properties, making it the perfect male performance ingredient. Icariin, the active component of Horny Goat Weed, is responsible for all of its androgenic benefits. Platinum Pro contains a 60% Icariin extract, the best and purest Icariin extract available for mass production today.'
                        title='Horny Goat Weed'
                    />
                    <Card3
                        details='Tribulus Terrestris is an essential ingredient that maintains healthy t-level retention. It has properties that help neutralize the metabolism of testosterone to estrogen by inhibiting the aromatase enzyme. As a result, the body builds up t-levels, while also reducing estrogen levels, which are counter-productive to the androgenic benefits of the formula.'
                        title='Tribulus Terrestris'
                        img={require('../../../images/section5Product/image13.png')} />
                    <Card3
                        title='Maca Root'
                        details='Maca is a native plant in Peru that has been used for centuries to improve fertility in livestock. In today’s modern supplement applications, Maca helps enhance t-levels by reducing the factors that naturally slow down testosterone production'
                        img={require('../../../images/section5Product/image14.png')} />
                </div>
                <div className="container">
                    <p className={`font-700 text-center mb-0 ${main.h1}`}>
                        Other Ingredients
                    </p>
                    <div className="row text-center">
                    <div className=" mx-auto col-md-6">

                    <div className={`${classes.accordianSection}`}>
                        <Accordian />
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>;
}
export default Section05;
