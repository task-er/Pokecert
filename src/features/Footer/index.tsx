import React, { ReactElement } from 'react'
import './index.scss'

const Footer = (): ReactElement => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-layout">
        <span>Pokecert.</span>
        <br />
        <span>
          <a href="mailto:task.complex@gmail.com">task.complex@gmail.com</a>
          <br />
          <a href="https://github.com/task-er">https://github.com/task-er</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
