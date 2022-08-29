import supabase from '../libs/supabase'

const listBanks = async () => {
  const { data, error } = await supabase
    .from('bank')
    .select('*')

  if (error) throw new Error(error)

  return data
}

export default listBanks
