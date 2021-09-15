import { useState, useRef,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

import {images} from '../../utils/mockData'
import { useIntersection } from '../hooks/useIntersection'

import Image from './Image'
import { 
    fetchImages,
    selectAll,
    selectIds,
    selectById,
    nextPage
} from './imagesSlice'
import {
    StyledImageOverview
} from './StyleImagesOverview'

function ImageOverview () {
    const dispatch = useDispatch()
    const imagesStatus = useSelector(state=> state.images.imagesStatus)
    const allImages = useSelector(selectAll)
    const allImagesId = useSelector(selectIds)
    const page = useSelector(state => state.images.page)

    const [lastElement, setLastElement] = useState(null);
    const observer = useRef(
		new IntersectionObserver((entries) => {
			const first = entries[0];
			if (first.isIntersecting) {
				dispatch(nextPage());
			}
		})
	);

    useEffect(()=>{
        if(imagesStatus === 'idle'){
            dispatch(fetchImages())
        }
        else if(imagesStatus === 'succeeded'){
            dispatch(fetchImages(page))
        }
    }, [page])

    useEffect(() => {
		const currentElement = lastElement;
		const currentObserver = observer.current;

		if (currentElement) {
			currentObserver.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [lastElement]);

    let content
    content = allImagesId.map((imageId,i) =>{
        return <Image key={imageId} imageId={imageId} ></Image>
    })
    content.push(<div key={"last"} ref={setLastElement}>Load More</div>)

    console.log(content)
    console.log(allImages)
    console.log(`page=${page}`)

    return(
        <StyledImageOverview>
            {content}
        </StyledImageOverview>
    )
}

export default ImageOverview