import Image from './Image'

import {images} from '../../utils/mockData'

import {
    StyledImageOverview
} from './StyleImagesOverview'

function ImageOverview () {

    let content = images.map((image) =>{
        return <Image key={image.id} 
                author={image.author} 
                width={image.width} 
                height={image.height} 
                url={image.url} 
                download_url={image.download_url} 
                ></Image>
    })

    console.log(images)
    return(
        <StyledImageOverview>
            {content}
        </StyledImageOverview>
    )
}

export default ImageOverview