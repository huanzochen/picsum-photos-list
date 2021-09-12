import {
  StyledApp,
  MainPage
} from './StyleApp'

import FunctionBar from './components/FunctionBar/FunctionBar'
import ImageOverview from './components/ImageOverview/ImageOverview'

function App() {
  return (
    <StyledApp>
      <FunctionBar/>
      <MainPage>
        <ImageOverview/>
      </MainPage>
    </StyledApp>
  );
}

export default App;
