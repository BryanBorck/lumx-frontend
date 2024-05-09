'use client'
import React, { createContext } from 'react'
import AuthContext from '@/app/contexts'
import { AuthTypes } from '@/types/types'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [referralCode, setReferralCode] = React.useState('lb3af7a6')
  const [walletId, setWalletId] = React.useState('5379e635-a5f0-470f-9b01-36ea518fa531')
  const [walletAddress, setWalletAddress] = React.useState('0xA1357AA56dDedc614D5ac6Ad86D59cD5cCcAf00c')
  const [email, setEmail] = React.useState('luiz5@gmail.com');
  const [name, setName] = React.useState('luiz');

  const authObj: AuthTypes = {
    referralCode,
    setReferralCode,
    walletId,
    setWalletId,
    walletAddress,
    setWalletAddress,
    email,
    setEmail,
    name,
    setName,
  }

  return <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
}

