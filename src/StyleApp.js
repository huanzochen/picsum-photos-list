import styled from 'styled-components'
import {color} from './utils/color'

export const StyledApp = styled.div`
*, *::before, *::after {
  box-sizing: border-box;
}
position: relative;
height: 100%;
background: ${color.background};
`

export const MainPage = styled.div`
height: 100%;
display: flex;
justify-content: center;
background: ${color.background};
`