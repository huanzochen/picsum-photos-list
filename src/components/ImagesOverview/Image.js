import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames';

import { useIntersection } from '../hooks/useIntersection'
import {
    StyledImage,
    Container,
    Img,
    Mockup,
    Author
} from './StyleImage'
import { 
    selectById
} from './imagesSlice'

function Image({
    imageId
}) {
    const image = useSelector(state => selectById(state, imageId))
    const [isInView, setIsInView] = useState(false)
    const [isOnLoad, setIsOnLoad] = useState(false)
    const imgRef = useRef()
    useIntersection(imgRef, ()=>{
        setIsInView(true)
    })

    const handleOnLoad = () => {
        setIsOnLoad(true)
    }

    return(
        <StyledImage ref={imgRef}>
            <Container>
                <Mockup width={image.width} height={image.height} className={classNames({'loading': !isOnLoad})}/>
                {isInView && <Img 
                    src={image.download_url}
                    onLoad={handleOnLoad}
                    className={classNames({'isload': isOnLoad})}
                />}
                <Author>
                    <div>Author:</div>
                    <div>{image.author}</div>
                </Author>
            </Container>
        </StyledImage>
    )
}

export default Image