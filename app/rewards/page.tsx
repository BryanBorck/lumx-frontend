import ExplorerRewards from '@/components/ExplorerReward'
import Footer from '@/components/Footer'

export default function Rewards() {
  return (
    <main className='flex min-h-screen flex-col items-center overflow-x-hidden pt-24'>
      <div className='text-2xl font-bold text-primary my-4'>Rewards</div>
      <ExplorerRewards />
      <Footer />
    </main>
  )
}
