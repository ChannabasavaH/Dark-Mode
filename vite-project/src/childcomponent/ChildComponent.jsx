import React,{useContext} from 'react'
import {ThemeContext} from '../App.jsx'

const ChildComponent = ({title,children}) => {

  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;

  return (
    <div className={className}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default ChildComponent