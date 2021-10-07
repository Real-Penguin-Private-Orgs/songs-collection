/* eslint-disable @next/next/no-img-element */
import style from '../styles/components/Song.module.css'

export default function Song({ song }) {
  return (
    <div className="bg-gray-200 p-4 container items-center">
        <span className="flex-initial">{song.title}</span>
        <img 
            src={song.album.picture}
            className={style.img_floate}    
            alt={`${song.title}-img-${song.id}`} 
        />
    </div>
  )
}