'use client'

import { useEffect, useState } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { ClientSafeProvider } from 'next-auth/react' // Importing type for provider

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null)

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      setProviders(res)  // Now, this is type-safe
    }

    fetchProviders()
  }, [])  // ✅ This ensures it only runs once on mount

  return (
    <div>
      {providers && Object.values(providers).map((provider) => (
        <button key={provider.name} onClick={() => signIn(provider.id)}>
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  )
}
