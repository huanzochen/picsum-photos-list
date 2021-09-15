import { useState, useEffect, useRef } from 'react'
import classNames from 'classnames';

import { useIntersection } from '../hooks/useIntersection'
import {
    StyledImage,
    Container,
    Img,
    Mockup
} from './StyleImage'

function Image({
    author,
    width,
    height,
    url,
    download_url
}) {

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
                <Mockup width={width} height={height} className={classNames({'loading': !isOnLoad})}/>
                {isInView && <Img 
                    src={download_url}
                    onLoad={handleOnLoad}
                    className={classNames({'isload': isOnLoad})}
                />}
            </Container>
        </StyledImage>
    )
}

export default Image