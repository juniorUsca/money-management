import useSWR from 'swr'
// import { fetcherListBanks } from '../services/fetchers'

export default function BanksList () {
  const { data } = useSWR('/api/banks')

  return (
    <div>
      {data.map(bank => (
        <div key={bank.id}>
          <div>{bank.name}</div>
        </div>
      ))}
    </div>
  )
}
