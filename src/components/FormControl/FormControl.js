import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './FormControl.css'

const FormControl = props => {
  const type = props.type || 'input'
  const placeHolder = props.placeHolder || ''
  const name = props.name || ''
  const onChange = props.onChange || function () {}
  const onFocus = props.onFocus || function () {}
  const [value, setValue] = useState('')

  function handleChange (e) {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <input
      className={`form-control ${props.className} ${(props.error) ? 'form-control--error' : ''}`}
      onChange={handleChange}
      onFocus={onFocus}
      type={type}
      value={value}
      placeholder={placeHolder}
      name={name}
    />
  )
}

FormControl.propTypes = {
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

export default FormControl