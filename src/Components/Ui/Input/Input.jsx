import React from 'react'
import './Input.css'

export const Input = ({ style='txt_default' ,type = 'text', setState,...props}) => {
  return (
      <input onChange={e => setState(e.target.value)} className={`${style}`} type={type} {...props}></input>
  )
}
