import styled from 'styled-components'
import {color} from './utils/color'

export const StyledApp = styled.div`
*, *::before, *::after {
  box-sizing: content-box;
}
position: relative;
height: auto;
background: ${color.background};
`

export const MainPage = styled.div`
height: auto;
display: flex;
justify-content: center;
background: ${color.background};
`