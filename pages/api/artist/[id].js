import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    switch(req.method) {
        case 'GET':
            getOne(req.query.id, res)
            break
        case 'DELETE':
            deleteOne(req.query.id, res)
            break
        default:
    }
}


async function getOne(artistID, res) {
    const artist = await prisma.artist.findUnique({
        where: {
            id: artistID
        },
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

async function deleteOne(artistID, res) {
    const artist = await prisma.artist.delete({
        where: {
            id: artistID
        }
    })
    res.json(artist)
}