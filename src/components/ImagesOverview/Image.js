import { useState, useEffect,useRef } from 'react'
import classNames from 'classnames';

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
    const [isOnLoad, setIsOnLoad] = useState(false)


    const handleOnLoad = () => {
        console.log('仔入完畢!')
        setIsOnLoad(true)
    }



    return(
        <StyledImage>
            <Container>
                <Mockup width={width} height={height} className="loading"/>
                <Img 
                    src={download_url}
                    onLoad={handleOnLoad}
                    className={classNames({'isload': isOnLoad})}
                />
            </Container>
        </StyledImage>
    )
}

export default Image