import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const song = await prisma.song.findUnique({
        where: {
            id: req.query.url
        }
    })
    res.redirect(song.url)
}
  