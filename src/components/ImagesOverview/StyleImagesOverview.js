import styled from 'styled-components'
import {device} from '../../utils/device'
import {color, border} from '../../utils/color'

export const StyledImageOverview = styled.div`
width: 50%;
height: 100%;
position: relative;
display: flex;
align-items: center;
flex-direction: column;
background: ${color.background};

@media ${device.laptopL} {
    width: 40%
}

@media ${device.tablet} {
    width: 70%
}

@media ${device.mobileL} {
    width: 70%
}

@media ${device.mobileS} {
    width: 80%
}
`

export const Blank = styled.div`
position: relative;
padding-bottom: 30%;

@media ${device.laptopL} {
    padding-bottom: 18%;
}

@media ${device.tablet} {
    padding-bottom: 25%;
}

@media ${device.mobileL} {
    padding-bottom: 30%;
}

@media ${device.mobileS} {
    padding-bottom: 40%;
}
`

export const LoadMore = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
height: 100px;
margin-bottom: 20px;
background: ${color.background};
z-index: 1000;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

&.loading {
  border: 5px solid ${border.second}; 
  border-top: 5px solid ${border.primary}; 
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

`