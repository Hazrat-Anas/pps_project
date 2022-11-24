import React, { Fragment } from 'react';
import classes from './section6.module.css'
import main from './main.module.css'
import Carousel from 'react-elastic-carousel';
import { testimonials } from '../../../data/productsdb'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
];
const Card = (props) => {
    return (
        <div className={`col-md-5 py-4 w-100 mx-4 ${classes.test_card}  `}>
            <figure className='d-flex flex-column justify-content-between h-100'>
                <blockquote className={`text-white  font-700-italic ${classes.testi_text}`} >
                    <p>{props.test}</p>
                </blockquote>
                <figcaption className={` text-white font-700`}>
                    <span title="Source Title" className={`${classes.testi_text}`}>{props.foot} </span>
                </figcaption>
            </figure>
        </div>
    )
}
const Card2 = (props) => {
    return (
        <div className='col-12 mb-4'>
            <div className={`${classes.triangle}`}>
                <div className="row">
                    <div className=" offset-1 col-11">
                        <p className={`mb-0 py-2  font-400 ${main.content} text-white`}>
                            {props.title}
                        </p>
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className=" offset-1 col-11">
                        <p className={` font-400 ${main.content}`}>
                            {props.details}
                        </p>
                    </div>
                    <div className="row">
                        <div className="offset-1 col-md-4">
                            <p className={`font-700 ${main.content} mb-0`}>
                                {props.by}
                            </p>
                        </div>
                        <div className=" offset-1 col-md-4">
                            <img src={require('../../../images/Section6/rating.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ListItem = (props) => {
    const { font = 'font-400' } = props
    return (<div className={`${classes.list_item} mb-4 mb-md-4 bg-image justify-content-around  row`}>
        <div className="col-2 text-center align-baseline px-1 px-sm-3 px-md-0">
            <img className={`${classes.list_item__tick_logo} w-90 h-auto  `} src={require('../../../images/tick.png')} alt="" />
        </div>
        <div className="col-9 col-sm-10 d-flex  align-items-center ">
            <p className={`${classes.list_item__title} mb-0 font-400 align-bottom ${font} text-white`} >
                {props.title}
            </p>
        </div>
    </div>)

}
function Section6() {
    return <Fragment>
        <div className={`container-fluid ${classes.back_img} `}>
          
                <div className="container-xxl">
                    <div className="row">
                        <div className=" order-md-0 order-2 col-md-4 d-flex  align-items-end" style={{ position: 'relative' }}>
                            <img className={`${classes.back_img__left_img} img-fluid`} src={require('../../../images/Section6/Group55.png')} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-4 pt-3 pt-md-4">
                        <p className={`${main.h1}  font-700 text-white`}>UNLEASH YOUR TRUE POTENTIAL</p>
                            <ListItem title='100% Scientifically Verified Formula' />
                            <ListItem title='Sustained Performance-Boosting Cycle' />
                            <ListItem title='Increase Energy, Strength, Stamina, and Libido' />
                            <ListItem title='The ONLY Performance-Enhancing System that overrides Supplement Resistance' />
                            <div className="row">
                                <div className=" offset-md-2 px-0 col-md-4">
                                    <button className={`${classes.btn_order} font-700 d-md-block d-none text-white`}>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-block d-md-none ">
                        <div className=" mx-auto text-center ">
                            <button className={`${classes.btn_order} font-700   text-white`}>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
          
        </div>
        <div className={`${classes.experts_testimonial} container`}>
            <p className={`${main.h1} ${classes.experts_testimonial__h1} font-700  text-center`}>
                See what the Experts Say about Platinum Pro!
            </p>
            <div className={`container ${classes.testimonial_slider} `}>
                <Carousel showArrows={false} itemPadding={[4, 10, 4, 0]} focusOnSelect={true} breakPoints={breakPoints}>

                    {
                        testimonials.map((item) => {
                            return <Card key={item.test} test={item.test} foot={item.footer} />
                        })
                    }
                </Carousel>
            </div>

            <div className="container">
                <div className="row text-center">
                    <p className={`${main.h1} mb-0 font-700`}>
                        Platinum Pro Men
                    </p>
                    <p className={`${main.content} font-400 text-center`}>
                        Read what customers say about Platinum Pro!
                    </p>
                </div>
            </div>
            <div className={`container-fluid ${classes.rating_block}`}>
                <div className="row">
                    <Card2 
                    title='Amazing results!'
                    details='I tried dozens of other testosterone boosters, and Platinum Pro is the only supplement that got me over
                    the hump. I’ve dreamed of having an amazing physique, and with Platinum Pro, I got more than what I
                    expected!'
                    by='Kevin J. Newark, NJ'
                    />
                    <Card2
                    title='Genius formula'
                    details='I’ve only been taking Platinum Pro for the last three months, and it’s already an amazing experience. I
                    get great libido, energy, and strength, and I’m excited to see what’s in store for me in the coming
                    months.'
                    by='Dave W. San Diego, CA'
                    
                    />
                    <Card2
                    title='100% works!'
                    details='I was skeptical at first, but when I learned about how the system works, it made sense to me. Now that
                    I’ve been taking Platinum Pro for 4 months, I can really see how much better it is compared to other test
                    boosters today.'
                    by='Jake G. Portland, OR'
                    />
                    <Card2 
                    title='Unbeatable results'
                    details='I’m an all-natural bodybuilder, and Platinum Pro is exactly the supplement I need. Everyone knows
                    about stalling your progress – that’s why we do cycles, and Platinum Pro executes its formula to
                    perfection.'
                    by='Shaun V. Chicago, IL'
                    />
                </div>
            </div>
        </div>
    </Fragment>
}

export default Section6;
export { ListItem }
