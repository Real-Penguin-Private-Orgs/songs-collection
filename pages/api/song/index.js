import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const songs = await prisma.song.findMany({
        include: {
            artist: true,
            album: true
        }
    })
    res.json(songs)
}
  