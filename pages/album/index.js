

export default function AlbumIndex({ albums }) {
  return (
    <div>
        {albums.map((album) => (
            <li key={album.id}>
                {album.name}
            </li>
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
    const res = await fetch(`${process.env.BASE_URL}/api/album`)
    const albums = await res.json()

    return {
        props: {
           albums
        }
    }
}