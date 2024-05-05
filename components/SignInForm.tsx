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

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const inviteCode = '123456'

    // how to concatenate strings?

    toast({
      title: 'You sign up! 🎉',
      description: 'Your invite code is ' + inviteCode + '!',
    })
    console.log(values)
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
            <Button className='w-full mt-2' variant='outline' type='submit'>
              Sign in
            </Button>
          </Reveal>
        </form>
      </Form>
    </div>
  )
}
