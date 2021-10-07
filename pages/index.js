import Head from 'next/head'
import ArtistCard from '../components/ArtistCard'

export default function Home({ artists }) {
  return (
    <div>
      <Head>
        <title>Songs Collection</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {artists.map((artist) => (
        <ArtistCard 
          key={artist.id} 
          artist={artist} 
        />
      ))}
    </div>
  )
}

/**
* 
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/artist`)
    const artists = await res.json()

    return {
        props: {
           artists
        }
    }
}
