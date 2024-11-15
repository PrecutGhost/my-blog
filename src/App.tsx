import { ImagesSliderDemo } from "./components/ui/images-slider-demo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPage from "./page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ImagesSliderDemo />} />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
