import React, { useEffect, useState } from 'react'
import '../styles/video.css'
import { URL } from '../utils/url';
function Video() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideo()
  }, [])
  async function getVideo() {
    let fetchVideo = await fetch(`${URL}/videos`)
    let json = await fetchVideo.json()
    setVideo(json?.data[0])
  }
  return (
    <section className='video' style={{ backgroundImage: `url(${video?.imageLink})` }}>
      <div className="container">
        <h2>{video?.title}</h2>
        <p>{video?.description}</p>
        <div className="video__img" >

          <iframe src={video?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


          {/* <button className='button1'> <img src={rasm} alt="" /> Смотреть видео</button> */}
        </div>
      </div>
    </section>
  )
}

export default Video
