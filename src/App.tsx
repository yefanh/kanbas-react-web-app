//kanbas-react-web-app/src/App.tsx
import React from "react";
import store from "./Kanbas/store"; // import the redux store
import { Provider } from "react-redux"; //import the redux store provider
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate} from "react-router-dom";
function App() {
  return (
    <HashRouter>
      {/* wrap your application with the Provider so all child elements can read and write to the store */}
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );}
export default App;