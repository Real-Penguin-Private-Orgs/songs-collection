import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const albums = await prisma.album.findMany({
        include: {
            song: {
                select: {
                    id: true,
                    title: true,
                    url: true
                }
            },
            artist: true,
        }
    })
    res.json(albums)
}
  