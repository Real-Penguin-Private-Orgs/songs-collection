import Head from 'next/head'

export default function AlbumPage({ album }) {
  return (
    <div>   
            <Head>
                  <title>{album.name}</title>
            </Head>
    </div>
  )
}

/**
* 
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/album/${context.params.id}`)
    const album = await res.json()

    return {
        props: {
           album
        }
    }
}