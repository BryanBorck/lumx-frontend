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
import { Reveal, RevealWrapper } from '@/components/Reveal'
import { toast } from './ui/use-toast'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  location: z.string(),
  date: z.string(),
  ticketSupply: z.number(),
  tokenEarned: z.number(),
  tokenSpent: z.number(),
  price: z.number(),
})

export function EventForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      location: '',
      date: '',
      ticketSupply: 0,
      tokenEarned: 0,
      tokenSpent: 0,
      price: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      title: 'You created an event! 🎉',
      description: 'Continue using Festx to improve your marketing!',
    })
    console.log(values)
  }

  return (
    <Tabs defaultValue='account' className='w-full h-full'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='token'>Financial</TabsTrigger>
      </TabsList>

      <RevealWrapper>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <TabsContent value='account'>
              <Reveal delay={0.4}>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder='My Event Name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Reveal>
              <Reveal delay={0.6}>
                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder='Very cool party!' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Reveal>
              <Reveal delay={0.8}>
                <FormField
                  control={form.control}
                  name='location'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder='Rio de Janeiro - RJ' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Reveal>
              <Reveal delay={1}>
                <FormField
                  control={form.control}
                  name='date'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input placeholder='30/05/2024' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Reveal>
            </TabsContent>
            <TabsContent value='token'>
              <Reveal delay={0.4}>
                <FormField
                  control={form.control}
                  name='ticketSupply'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number max of referrals</FormLabel>
                      <FormControl>
                        <Input type='number' placeholder='100' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Reveal>
              <Reveal delay={0.6}>
                <FormField
                  control={form.control}
                  name='tokenEarned'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tokens earned by referral</FormLabel>
                      <FormControl>
                        <Input type='number' placeholder='100 FTX' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Reveal>
              <Reveal delay={0.8}>
                <FormField
                  control={form.control}
                  name='tokenSpent'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ticket reward price</FormLabel>
                      <FormControl>
                        <Input type='number' placeholder='200 FTX' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Reveal>
              <Reveal delay={1}>
                <FormField
                  control={form.control}
                  name='price'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          placeholder='100 reais'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Reveal>
              <Reveal delay={1.2}>
                <div className='mt-6'>
                  <Button variant='outline' type='submit'>
                    Submit
                  </Button>
                </div>
              </Reveal>
            </TabsContent>
          </form>
        </Form>
      </RevealWrapper>
    </Tabs>
  )
}
