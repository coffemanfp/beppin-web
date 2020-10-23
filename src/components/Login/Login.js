import React from 'react'
import SignIn from '../SignIn/SignIn'

export default function Login () {
  return (
    <SignIn
      type='login'
      onSubmit={() => console.log('Launch Login')}
    />
  )
}
