import Footer from '@/components/Footer'
import ProfileMenu from '@/components/ProfileMenu'

export default function Profile() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center overflow-x-hidden pt-24'>
      <ProfileMenu />
      <Footer />
    </main>
  )
}
