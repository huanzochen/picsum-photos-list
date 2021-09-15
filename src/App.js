import {
  StyledApp,
  MainPage
} from './StyleApp'

import FunctionBar from './components/FunctionBar/FunctionBar'
import ImagesOverview from './components/ImagesOverview/ImagesOverview'

function App() {
  return (
    <StyledApp>
      <FunctionBar/>
      <MainPage>
        <ImagesOverview/>
      </MainPage>
    </StyledApp>
  );
}

export default App;
