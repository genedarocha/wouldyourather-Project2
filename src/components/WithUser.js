import React from 'react'
import { Redirect } from 'react-router-dom'

export default function WithUser({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Redirect to="/login" />
  }
  return children
}
