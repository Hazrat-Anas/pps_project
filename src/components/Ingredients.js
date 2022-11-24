import React from 'react'
import Card from '../components/UI/Card'
import Footer from '../components/Footer'


let cards = []
for (let i = 0; i < 6; i++) {
    cards.push(i)
}
function Ingredients() {
    return (
        <div className="container-fluid">
            <div className="container text-center font-700">
                <div className='row'>
                    <div className='offset-md-2 py-5 col-md-8'>
                        <p className='h1 font-700'>Platinum  Pro Supplements Ingredients</p>
                        <p className='font-400'>
                            features a premium and potent collection of ingredients designed to give you the SIZE, STAMINA, and SEX DRIVE you need to experience the best sex of your life.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mb-1 mb-md-3 align-items-center">
                    <div className="col-md-8">
                        <p className='h1'>
                            Long Jack
                        </p>
                        <p className='font-400' style={{ textAlign: 'justify' }}>
                            Also known as Tongkat Ali and Eurycoma Longifolia, Long Jack is universally considered as the ultimate male performance ingredient. It provides key improvements to libido, size, and stamina. Long Jack has properties that improve the production of testosterone, and is a key element in enhancing libido. It also has potent PDE-5 inhibitor properties that increase erection hardness and stamina. Lastly, it has unique free calcium ion inhibitor properties.
                        </p>
                    </div>
                    <div className="col-md-4 align-self-end">
                        <img className='img-div' src={require('../images/Group 20.png')} alt="" />
                    </div>
                </div>
                <div className="row mb-1 mb-md-3 align-items-center">
                    <div className="col-md-8 order-md-1 ">
                        <p className='h1'>
                            KSM-66®
                        </p>
                        <p className='font-400' style={{ textAlign: 'justify' }}>
                            KSM-66®, also known as the world’s BEST Ashwagandha, is the world’s most clinically-studied Ashwagandha product on the market today. Backed by plenty of clinical tests and scientific facts, KSM-66® is clinically-proven to increase testosterone for sexual function. It also has stress-reducing properties to reduce the risk of performance anxiety that typically leads to premature ejaculation.
                        </p>
                    </div>
                    <div className="col-md-4 align-self-end">
                        <img className='img-div' src={require('../images/Group 21.png')} alt="" />
                    </div>
                </div>
                <div className="row mb-1 mb-md-3 align-items-center">
                    <div className="col-md-8">
                        <p className='h1'>
                            Fenugreek
                        </p>
                        <p className='font-400 text-justify' style={{ textAlign: 'justify' }}>
                            Male UltraCore contains an FDA-compliant fenugreek extract that works to build up free testosterone in the body. Fenugreek inhibits the 5-alpha reductase enzyme, which metabolizes testosterone. Fenugreek ensures that you enjoy the full benefits of improved testosterone levels without the dangers of BPH.
                        </p>
                    </div>
                    <div className="col-md-4 align-self-end">
                        <img className='img-div' src={require('../images/Group 22.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <p className='h1'>Proprietary Blend</p>
                <div>
                    <p className='font-400'>
                        <span className='d-block font-600'>L-Arginine</span>
                        L-Arginine is a semi-essential amino acid that acts as a precursor to nitric oxide. Nitric oxide is a key compound that triggers vasodilation. It binds with GMP to create cGMP, the compound that relaxes smooth muscles in blood vessels, effectively dilating blood vessels and improving blood flow. As cGMP is naturally limited by PDE-5, L-Arginiine’s impact on the body is preserved and extended by the PDE-5 inhibitors in the formula, such as Long Jack and Horny Goat Weed.
                    </p>

                    <p className='font-400'>
                        <span className='d-block font-600'>Horny Goat Weed</span>
                        Horny Goat Weed, or Epimedium Sagittatum, is an herb known for its various androgenic benefits. It has testosterone-boosting properties, as well as PDE-5 inhibitor properties, making it the perfect male performance ingredient. Icariin, the active component of Horny Goat Weed, is responsible for all of its androgenic benefits. Male UltraCore contains a 60% Icariin extract, the best and purest Icariin extract available for mass production today.
                    </p>

                    <p className='font-400'>
                        <span className='d-block font-600'>Tribulus Terrestris</span>
                        Tribulus Terrestris is an essential ingredient that supports testosterone retention. It has properties that helps neutralize the metabolism of testosterone to estrogen by inhibiting the aromatase enzyme. As a result, the body builds up testosterone, while also reducing estrogen levels, which are counter-productive to the androgenic benefits of the formula.
                    </p>

                    <p className='font-400'>
                        <span className='d-block font-600'>Maca Root</span>
                        Maca is a native plant in Peru that has been used for centuries to improve fertility in livestock. In today’s modern supplement applications, Maca helps enhance sexual endurance by inhibiting the neurotransmitters that make you insensitive to sexual stimulus after having an orgasm. Maca root effectively reduces the refractory period, allowing you to enjoy more erections and more sex.
                    </p>

                    <p className='font-400'>
                        <span className='d-block font-600'>Other Ingredients</span>
                        Muira Puama – boosts testosterone and improves erection quality
                        Damiana extract – a nootropic known for boosting cognitive ability and sensitivity to sexual stimulus
                        Xanthoparmelia scabrosa – a potent testosterone booster that synergizes with ZMA
                        Saw Palmetto – a testosterone booster that suppresses the 5-alpha-reductase enzyme to boost testosterone and reduce DHT buildup to helps neutralize prostate growth.
                        L-Citrulline – A potent vasodilator capable of increasing nitrogen oxide levels to boost blood flow to the penis.
                        Butea Superba – a potent erectogenic found in Southeast Asia and is used by locals in its raw form to boost virility and erection quality
                        Rhodiola Rosea – an adaptogen that is known to reduce physical and mental fatigue.
                    </p>
                </div>
            </div>
            <div className="row  mt-md-4">
                <div className=" offset-md-2 col-md-8">
                    <img className='img-div' src={require('../images/Group 23.png')} alt="" />
                </div>
            </div>
            <div className=' row img-container mt-5' style={{ backgroundColor: 'black', opacity: .95 }}>
                <div className="col-md-5 order-1 order-md-0 both-center  text-center">
                    <div className=''>

                        <img className='logo-img' src={require('../images/box\ logo.png')} alt="" />
                    </div>

                </div>
                <div className="col-md-7  mb-3  mt-md-0 text-md-start">
                    <p className='font-700 text-light h1'>
                        NO RISKs, GUARANTEED RESULTS.
                    </p>
                    <p className='font-400 text-light  '>
                        If you are not 100% happy and loving your results,one of our Supplement Experts will take your call and personally process our industry leading 100% Money Back Guarantee.
                    </p>
                    <p className='font-700 text-light h1'>
                        90 Day Money Back Guarantee
                    </p>
                    <p className='font-700 text-light h1'>
                        Risk Free
                    </p>
                    <p className='font-700 text-light h1'>
                        Always FREE Shipping
                    </p>
                </div>


            </div>
            <div className="row py-5">
                <div className="offset-md-2 col-md-8">
                    <p className='font-700 h1 text-start text-md-center'>Reads What Men Have To Say
                        About Platinum Pro Supplements </p>
                    <p className=' text-start text-md-center font-400'>
                        See what men and women have to say about the proven results of Male UltraCore! Below are real reviews from our customers
                    </p>
                </div>

            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        cards.map((item,index) => <Card key={index}  />)
                    }

                </div>

            </div>
            <div className='mt-5'>

            <Footer/>
            </div>

        </div >
    )
}

export default Ingredients
