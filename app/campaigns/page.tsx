import ExplorerCampaigns from '@/components/ExplorerCampaign'
import Footer from '@/components/Footer'

export default function Campaigns() {
  return (
    <main className='flex min-h-screen flex-col items-center overflow-x-hidden pt-24'>
      <div className='text-2xl font-bold text-primary my-4'>Campaigns</div>
      <ExplorerCampaigns />
      <Footer />
    </main>
  )
}
