import styled from 'styled-components'
import {color} from '../../utils/color'


export const StyledFunctionBar = styled.div`
position: fixed;
top: 2%;
left: 20%;
height: 7%;
width: 60%;
z-index: 1000;
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
`