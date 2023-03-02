import { Route, Routes } from 'react-router-dom';
import MainHubPage from "./Pages/MainHubePage";
import SevenAMThreePM from './Pages/ChecklistPages/SevenAMThreePM';

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainHubPage />} />
        <Route path="/seven-am-three-pm-shift" element={<SevenAMThreePM />} /> 
    </Routes>
  );
}

export default App;
