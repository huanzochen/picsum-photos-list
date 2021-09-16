import styled from 'styled-components'
import {device} from '../../utils/device'
import {color} from '../../utils/color'


export const StyledFunctionBar = styled.div`
position: fixed;
top: 2%;
left: 35%;
height: 7%;
width: 30%;
z-index: 1000;

@media ${device.tablet} {
    top: 2%;
    left: 25%;
    height: 6%;
    width: 50%;
}

@media ${device.mobileL} {
    top: 2%;
    left: 25%;
    height: 6%;
    width: 50%;
}

`

export const Container = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background: ${color.primary};
border-radius: 10px;
`

export const Title = styled.div`
color: ${color.second};
font-size: 3.5vh;

@media ${device.laptopL} {
    font-size: 4.5vh;
}

@media ${device.tablet} {
    font-size: 4vh;
}

@media ${device.mobileL} {
    font-size: 3.5vh;
}

@media ${device.mobileS} {
    font-size: 2.5vh;
}


`