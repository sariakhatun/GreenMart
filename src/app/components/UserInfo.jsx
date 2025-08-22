"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function UserInfo() {
    let session = useSession()
  return (
    <div className='mt-2'>
      <h1>{JSON.stringify(session)}</h1>
    </div>
  )
}
