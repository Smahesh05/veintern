import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import ModuleFive from "./pages/ModuleFive";
import ModuleFour from "./pages/ModuleFour";
import ModuleOne from "./pages/ModuleOne";
import ModuleThree from "./pages/ModuleThree";
import ModuleTwo from "./pages/ModuleTwo";
import SearchModuleTab from "./pages/SearchModuleTab";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moduleOne" element={<ModuleOne />} />
          <Route path="/moduleTwo" element={<ModuleTwo />} />
          <Route path="/moduleThree" element={<ModuleThree />} />
          <Route path="/moduleFour" element={<ModuleFour />} />
          <Route path="/moduleFive" element={<ModuleFive />} />
          <Route path="/search" element={<SearchModuleTab />} />
        </Routes>{" "}
      </main>
    </div>
  );
}

export default App;
