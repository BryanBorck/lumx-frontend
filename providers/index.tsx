'use client'

import React, { createContext } from 'react'
import AuthContext from '@/app/contexts'
import { AuthTypes } from '@/types/types'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [referralCode, setReferalCode] = React.useState('')
  const [walletId, setWalletId] = React.useState('')
  const [walletAddress, setWalletAddress] = React.useState('')
  const [email, setEmail] = React.useState('')

  const authObj: AuthTypes = {
    referralCode,
    setReferalCode,
    walletId,
    setWalletId,
    walletAddress,
    setWalletAddress,
    email,
    setEmail,
  }

  return <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
}
