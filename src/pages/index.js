import React, { Fragment } from 'react';

import Hero from '../components/home/hero';
import WhyUs from '../components/home/why-us';
import Properties from '../components/home/properties';
import About from '../components/home/about';
import OfficeInfo from '../components/home/office-info';
import Contact from '../components/contact';

export default ()=> {

  return(
    <Fragment>
      <Hero />
      {/* <WhyUs /> */}
      <Properties />
      <About />
      <OfficeInfo />
      <Contact />
    </Fragment>
  )
}