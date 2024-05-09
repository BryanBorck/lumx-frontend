'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Reveal } from '@/components/Reveal'
import { toast } from './ui/use-toast'
import { useContext, useState } from 'react'
import AuthContext from '@/app/contexts'
import { AuthTypes } from '@/types/types'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

export function SignInForm() {
  const [loading, setLoading] = useState(false)

  const { setEmail, setName, setReferralCode, setWalletId, setWalletAddress } =
    useContext(AuthContext) as any

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Auth API
    try {
      setLoading(true)

      const { username, password } = values

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      }

      const url = process.env.NEXT_PUBLIC_API_URL + '/signin'

      const response = await fetch(url, options)
      const data = await response.json()

      console.log(data)
      console.log(data.referral_code)

      if (response.status === 200) {
        setEmail(data.email)
        setName(data.name)
        setReferralCode(data.referral_code)
        setWalletId(data.wallet_id)
        setWalletAddress(data.wallet_address)
      } else {
        console.error(data)
      }

      toast({
        title: 'You sign in! 🎉',
        description: 'Welcome to the app!',
      })

      setLoading(false)

      console.log(values)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='w-full h-[70%]'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-6 h-full space-y-4'
        >
          <Reveal delay={0.4}>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username (email)</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Reveal>
          <Reveal delay={0.6}>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  {/* @ts-ignore */}
                  <FormControl type='password'>
                    <Input placeholder='****' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Reveal>
          <Reveal delay={0.8}>
            {loading ? (
              <Button className='w-full mt-2' variant='outline' disabled>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Please wait
              </Button>
            ) : (
              <Button className='w-full mt-2' variant='outline' type='submit'>
                Sign in
              </Button>
            )}
          </Reveal>
        </form>
      </Form>
    </div>
  )
}
