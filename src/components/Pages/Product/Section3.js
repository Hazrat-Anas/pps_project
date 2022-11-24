import React from 'react';
import classes from './section3.module.css'
import main from './main.module.css'
import Chart  from '../../UI/PlatinumProAverageChart';

function Section3() {
    return <div className={`container-fluid pt-3 pb-5 ${classes.section}`}>
        <div className="container">
            <div className="row text-center">
                <p className={`font-700 ${main.h1}`}>
                    What is Supplement Resistance?
                </p>
                <p className={`font-400 ${main.content} text-start text-md-center`}>
                    Supplement resistance happens when the body is saturated with a constant supplement formula. Conventional supplements are intended to fill out gaps in nutrition to achieve normal function. Taking supplements, no matter how massive the dose, or how potent the ingredient is, can only reach a certain level of normal function. <br />
                    Much like how dieting works to lose weight, you can only reach a certain level of weight loss, which would be maintained if no other factors, such as exercise or supplements, are involved. <br />
                    Most supplements could provide decent results, but only to a certain level. With the Platinum Pro System, the entire supplement regimen changes regularly, and this allows you to avoid the flat zone.
                </p>
                <Chart/>
                <p className={`${main.footerContent} font-400 my-2 my-md-3 `}>
                    With the Platinum Pro System, your potential is limitless. We designed each of our supplement formulas to consistently stimulate multiple performance-boosting pathways to avoid saturation and allow your body to adapt continuously and react to changing supplement formulas.
                    This is how you achieve <span className='text-py font-700'>GREATNESS</span>.

                </p>
            </div>
        </div>
    </div>;
}

export default Section3;
