import { Route, Routes } from "react-router-dom";
import { PAGES } from "./shared/constants/data";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <div className="main">
          <Routes>
              {PAGES.map((page) => (
                <Route path={page.path} element={page.element} />
              ))}
          </Routes>
        </div>
        <Footer/>
    </div>
  )
}

export default App;