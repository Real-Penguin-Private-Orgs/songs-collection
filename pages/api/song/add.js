import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
import * as yup from 'yup'

const schema = yup.object().shape({
    title: yup.string().required().trim(),
    year: yup.number().required(),
    artist: yup.string().trim().required(),
    album: yup.string().required().trim(),
    url: yup.string().trim().required().url()
})

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
   let {
       title,
       year,
       artist,
       album,
       url
   } = req.body

   if(!title || !year || !artist || !album) {
       schema.validate({
           title,
           year,
           artist,
           album,
           url
       }).catch((err) => {
           res.json(err)
       })
   }

   const newSong = await prisma.song.create({
       data: {
           title: title,
           year: year,
           album_id: album,
           artist_id: artist,
           url: url
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

   res.json(newSong)
}
  