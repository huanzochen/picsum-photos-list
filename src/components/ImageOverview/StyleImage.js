import styled from 'styled-components'
import {color, border} from '../../utils/color'

export const StyledImage = styled.div`
width: 100%;
/* position: absolute; */
height: 100%;
border: 1px solid ${border.primary};
border-radius: 5px;
margin-bottom: 10px;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const Img = styled.img`
border-radius: 5px;
object-fit: contain;
object-position: center center; 
`
