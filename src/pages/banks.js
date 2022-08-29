import { SWRConfig } from 'swr'

import BanksList from '../components/BanksList'
import listBanks from '../services/bankService'

export default function Banks ({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <BanksList />
    </SWRConfig>
  )
}

export async function getStaticProps () {
  const banks = await listBanks()
  return {
    props: {
      fallback: {
        '/api/banks': banks,
      },
    },
  }
}
