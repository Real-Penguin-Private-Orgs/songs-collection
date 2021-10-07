import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const artist = await prisma.artist.findMany({
        include: {
            songs: {
                select: {
                    id: true,
                    title:  true
                }
            },
            album: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
    res.json(artist)
}
  