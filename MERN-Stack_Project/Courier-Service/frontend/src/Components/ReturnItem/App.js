import './App.css';
import Header from './components/Header';
import Add from './components/Add';
import Update from './components/Update'
import{BrowserRouter as Router,Routes, Route} from "react-router-dom"
import ReturnItemDetails from './components/ReturnItemDetails';
function App() {
  return (
    <Router>
        <Header/>
      <Routes> 
        <Route path="/" element={<ReturnItemDetails />}/>
<Route path="/add" element={<Add />}/>
<Route  path="/update/:id" element={<Update />}/>
    </Routes>
    </Router>
  );
}

export default App;
