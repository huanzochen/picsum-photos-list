import {
    StyledImage,
    Container,
    Img
} from './StyleImage'

function Image(props) {
    const {image} = props
    console.log(image)

    return(
        <StyledImage>
            <Container>
                <Img 
                    src={image.download_url}
                    alt={image.author}
                >
                </Img>
            </Container>
        </StyledImage>
    )
}

export default Image