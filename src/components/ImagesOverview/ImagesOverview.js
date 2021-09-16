import { useState, useRef,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames';

// import {images} from '../../utils/mockData'

import Image from './Image'
import { 
    fetchImages,
    selectIds,
    nextPage
} from './imagesSlice'
import {
    StyledImageOverview,
    LoadMore,
    Blank
} from './StyleImagesOverview'

function ImageOverview () {
    const dispatch = useDispatch()
    const imagesStatus = useSelector(state=> state.images.imagesStatus)
    const allImagesId = useSelector(selectIds)
    const page = useSelector(state => state.images.page)

    useEffect(()=>{
        if(imagesStatus === 'idle'){
            dispatch(fetchImages())
        }
        else if(imagesStatus === 'succeeded'){
            dispatch(fetchImages(page))
        }
    }, [page])

    const [bottomElement, setBottomElement] = useState(null);
    const observer = useRef(
		new IntersectionObserver((entries) => {
			const first = entries[0];
			if (first.isIntersecting) {
				dispatch(nextPage());
			}
		}, {rootMargin: '100px', thresholds:[0.1]})
	);

    useEffect(() => {
		const currentElement = bottomElement;
		const currentObserver = observer.current;
		if (currentElement) {
			currentObserver.observe(currentElement);
		}
		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [bottomElement]);

    let content
    content = allImagesId.map((imageId,i) =>{
        return <Image key={imageId} imageId={imageId} ></Image>
    })
    content.push(<LoadMore
         key={"last"} 
         ref={setBottomElement}
         className={classNames({'loading': (imagesStatus === 'loading') ? true : false})}>
         </LoadMore>
         )

    return(
        <StyledImageOverview>
            <Blank></Blank>
            {content}
        </StyledImageOverview>
    )
}

export default ImageOverview