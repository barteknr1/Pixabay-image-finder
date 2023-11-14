import React from 'react'
import css from './Heading.module.css'

const H1 = () => {
  return (
    <h1 className={css.h1}>Welcome to Pixabay image finder!
      <div className={css.aurora}>
        <div className={css.auroraItem}></div>
        <div className={css.auroraItem}></div>
        <div className={css.auroraItem}></div>
        <div className={css.auroraItem}></div>
      </div></h1>
  )
};

export default H1