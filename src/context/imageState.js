import images from './imageContext'
import { useState } from 'react'
import res from '../demoRes'
const url = "https://api.unsplash.com/search/photos"

const ImageState = (props) => {

    const [img, setImg] = useState(res.results)

    const searchImages = async (search) => {
        const responce = await fetch(`${url}?query=${search}$&per_page=12&w=574&dpr=2&only=urls`, {
            headers: {
                'Authorization': `Client-ID ${process.env.REACT_APP_API_KEY}`
            }
        })
          
        const data = await responce.json()
        setImg(data.results)
        return true
    }

    return (
        <images.Provider value={{ img, searchImages }}>
            {props.children}
        </images.Provider>
    )
}

export default ImageState