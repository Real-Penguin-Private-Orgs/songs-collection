import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().trim().required(),
    picture: yup.string().url().trim().required(),
    year: yup.number().required()
})


/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    let { 
        name,
        picture, 
        year
    } = req.body

    if(!name || !picture || !year) {
        schema.validate({
            name,
            picture,
            year
        }).catch((err) => {
            res.json(err)
        })
    }

    const newAlbum = await prisma.album.create({
        data: {
            name: name,
            picture: picture,
            year: year  
        },
        include: {
            artist: {
                select: {
                    id: true,
                    name: true
                }
            },
            song: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })

    res.json(newAlbum)
}
  