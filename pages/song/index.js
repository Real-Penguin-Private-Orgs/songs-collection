

export default function SongIndex({ songs }) {
  return (
    <div>
            {songs.map((song) => (
                <div key={song.id}>
                        {song.title}
                </div>
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
    const res = await fetch(`${process.env.BASE_URL}/api/song`)
    const songs = await res.json()

    return {
        props: {
           songs
        }
    }
}