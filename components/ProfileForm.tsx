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
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  email: z.string().email({ message: 'Invalid email address.' }),
})

export function ProfileForm() {
  const [loading, setLoading] = useState(false)

  const [inviteCode, setInviteCode] = useState('' as string)
  const { setEmail, setWalletId, setWalletAddress, setReferralCode, setName } =
    useContext(AuthContext) as any

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)

      const { username, password, email } = values

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
        }),
      }

      const url = process.env.NEXT_PUBLIC_API_URL + '/signup'

      console.log(url)

      const response = await fetch(url, options)
      const data = await response.json()

      console.log(data)
      const { wallet_id, wallet_address, referral_code } = data

      console.log(referral_code)

      setInviteCode(referral_code)
      setWalletId(wallet_id)
      setWalletAddress(wallet_address)
      setEmail(email)
      setReferralCode(referral_code)
      setName(username)

      toast({
        title: 'You sign up! 🎉',
        description: 'Your invite code is ' + referral_code + '!',
      })

      setLoading(false)
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
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
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
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  {/* @ts-ignore */}
                  <FormControl type='email'>
                    <Input placeholder='name@email.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Reveal>
          <Reveal delay={1}>
            {loading ? (
              <Button className='w-full mt-2' variant='outline' disabled>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Please wait
              </Button>
            ) : (
              <Button className='w-full mt-2' variant='outline' type='submit'>
                Sign up
              </Button>
            )}
          </Reveal>
        </form>
      </Form>
    </div>
  )
}
