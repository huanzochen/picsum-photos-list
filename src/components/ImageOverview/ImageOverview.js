import Image from './Image'

import {images} from '../../utils/mockData'

import {
    StyledImageOverview
} from './StyleImageOverview'

function ImageOverview () {

    let content = images.map((image, index) =>{
        return <Image key={index} image={image}>image</Image>
    })

    console.log(images)
    return(
        <StyledImageOverview>
            {content}
        </StyledImageOverview>
    )
}

export default ImageOverview