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

async function getOne(songID, res) {
    const song = await prisma.song.findUnique({
        where: {
            id: songID
        },
        include: {
            artist: {
                select: {
                    id: true,
                    name: true
                }
            },
            album: {
                select: {
                    id: true,
                    name: true,
                    picture: true
                }
            }
        }
    })

    res.json(song)
}

async function deleteOne(songID, res) {
    const song = await prisma.song.delete({
        where: {
            id: songID
        }
    })
    res.json(song)
}