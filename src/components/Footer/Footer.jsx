import React from 'react'
import css from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>All displayed images are sourced from the <a href="https://pixabay.com/" target="_blank" rel="noreferrer noopener">Pixabay</a> community.</p>
    </footer>
  )
};

export default Footer