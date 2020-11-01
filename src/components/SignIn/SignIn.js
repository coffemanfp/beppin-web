import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormControl from '../FormControl/FormControl'
import Button from '../Button/Button'
import './SignIn.css'

const SignIn = ({ type, onSubmit }) => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleSubmit (e) {
    e.preventDefault()

    if (password !== confirmPassword) return

    onSubmit({ user, password })
  }

  return (
    <form className='sign-in' onSubmit={handleSubmit}>
      <h4 className='sign-in__title'>Hi!, Who're you?</h4>
      <div className='sign-in__content'>
        <FormControl
          type='text'
          className='sign-in__control'
          onChange={value => setUser(value)}
          placeHolder='Username or email'
        />
        <FormControl
          type='password'
          className='sign-in__control'
          onChange={value => setPassword(value)}
          placeHolder='Password'
        />
        {type === 'signUp' &&
          <FormControl
            type='password'
            error={confirmPassword !== password}
            className='sign-in__control'
            onChange={value => setConfirmPassword(value)}
            placeHolder='Confirm password'
          />}
        <Button
          className='sign-in__submit'
          type='primary'
          onClick={onSubmit}
        >{(type === 'signUp') ? 'Sign Up' : 'Login'}
        </Button>
      </div>
    </form>
  )
}

SignIn.propTypes = {
  type: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default SignIn
