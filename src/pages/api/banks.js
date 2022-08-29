import listBanks from '../../services/bankService'

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler (req, res) {
  const data = await listBanks()

  res.status(200).json(data)
}
