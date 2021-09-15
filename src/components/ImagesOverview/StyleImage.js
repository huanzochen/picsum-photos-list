import styled from 'styled-components'
import {color, border, loading} from '../../utils/color'

export const StyledImage = styled.div`
margin-bottom: 20px;
width: 100%;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const Mockup = styled.div`
width: 100%;
padding-bottom: ${props => props.height/props.width * 100}%;
opacity: 1;

background: linear-gradient(
      90deg,
      ${loading.primary}c1,
      ${loading.primary}d1,
      ${loading.primary_light}e1,
      ${loading.primary}e1,
      ${loading.primary}f1
      );
background-size: 400% 200%;
background-repeat: repeat;

@keyframes loading {
    0% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
}

&.loading{
    animation-name: loading;
    animation-timing-function: ease;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
}
`

export const Img = styled.img`
position: absolute;
width: 100%;
object-fit: contain;
opacity: 0;

&.isload{
    opacity: 1;
}
`

export const Author = styled.div`
width: 100%;
height: 30px;
background: ${color.second};

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;

& > div {
  padding: 0px 5px 0px 5px;
}
`
