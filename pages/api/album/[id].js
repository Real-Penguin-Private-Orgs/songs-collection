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
  

async function getOne(albumID, res) {
    const album = await prisma.album.findUnique({
        where: {
            id: albumID
        },
        include: {
            song: {
                select: {
                    id: true,
                    year: true,
                    title: true
                }
            }
        }
    })

    res.json(album)
}

async function deleteOne(albumID, res) {
    const album = await prisma.album.delete({
        where: {
            id: albumID
        }
    })
    res.json(album)
}