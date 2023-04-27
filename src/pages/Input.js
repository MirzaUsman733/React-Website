import React from 'react'

function Input(props) {
  const {type,name, id, value, onChange, placeholder, style} = props
  return (
    <div>
      <input type={type} value={value} placeholder={placeholder} id={id} onChange={onChange} name={name} style={style}/>
    </div>
  )
}

export default Input
