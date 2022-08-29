export const fetcherListBanks = () => async () => {
  console.log('fetching banks')
  const res = await fetch('/api/banks')
  const data = await res.json()
  return data
}

export const a = 1
