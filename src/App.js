import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import './App.css';
import Home from './components/home/home';
import Catalog from "./components/catalog/catalog";


function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path="/catalog" element={<Catalog/>} />
                    <Route path="/" element={<Home/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
