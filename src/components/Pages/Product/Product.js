import React,{Fragment} from 'react';
import Header from './Header'
import Section2 from './Section2'
import ChartSection from './ChartSection'
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section05';
import Section6 from './Section6';
import Section7 from './Section7';
import Footer from '../../Footer';

function Product(props) {
  return <Fragment>
     <Header cartItem={props.cartItem}/>
     <Section2/>
     <ChartSection/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section6/>
     <Section7/>
     <Footer itemHandler={props.itemHandler}/>
  </Fragment> ;
}

export default Product;
