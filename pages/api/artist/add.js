import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().trim().required(),
    picture: yup.string().url().trim().required(),
    album: yup.string().required().trim()
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
        album
    } = req.body

    if(!name || !picture || !album) {
        schema.validate({
            name,
            picture,
            album
        }).catch((err) => {
            res.json(err)
        })
    }

    const newArtist =await prisma.artist.create({
        data: {
            name: name,
            picture: picture,
            album_id: album
        }
    })

    res.json(newArtist)
}