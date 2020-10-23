import React from 'react'
import SignIn from '../SignIn/SignIn'

export default function SignUp () {
  return (
    <SignIn
      type='signUp'
      onSubmit={() => console.log('Launch SignUp')}
    />
  )
}
