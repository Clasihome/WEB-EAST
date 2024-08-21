import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({ children, to }) => {
  const state = useContext(context);
  return(
    <AniLink paintDrip hex="#5E90F2" to={to} duration={.5}>
      {children}
    </AniLink>
  )
}
