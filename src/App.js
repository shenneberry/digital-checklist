import { Route, Routes } from 'react-router-dom';
import MainHubPage from "./Pages/MainHubePage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainHubPage />} />
    </Routes>
  );
}

export default App;
