import Show from './Component/Show';
import Toggle from './Component/Toggle';
import ContextAPI from './Component/ContextAPI';
import './App.css';
import Updateme from './Component/Updateme';
import Pagination from "./Component/Pagination";


function App() {
  return (
    <div className="App">
      <Pagination/>
      <Show/>
     <Toggle/>
     <ContextAPI>
     <Updateme/>
     </ContextAPI>
    </div>
    
  );
}

export default App;
