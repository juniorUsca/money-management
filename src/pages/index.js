import useSWR from 'swr'
// import styles from '../styles/Home.module.css'

import listBanks from '../services/bankService'
import { fetcherListBanks } from '../services/fetchers'

export default function Home ({ fallback }) {
  const { data, error } = useSWR('/api/banks', fetcherListBanks(), { fallback })
  console.log(data, error)
  return (
    <h1 className="text-3xl font-bold underline">
      {data.map(bank => (
        <div key={bank.id}>
          <div>{bank.name}</div>
        </div>
      ))}
    </h1>
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
