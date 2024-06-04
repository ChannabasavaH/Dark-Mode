import React,{useContext} from 'react'
import {ThemeContext} from '../App.jsx'

const Button = ({children}) => {

    const Theme = useContext(ThemeContext);
    const className = 'button-' + Theme

  return (
    <div>
        <button className={className}>
            {children}
        </button>
    </div>
  )
}

export default Button