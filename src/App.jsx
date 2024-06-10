import './assets/css/app.css';
import { Contentwrapper } from './components/Contentwrapper';
import { Sidebar } from './components/Sidebar';

function App() {
  return (

    <div id="wrapper">

      <Sidebar/>

      <Contentwrapper/>

</div>

  );
}

export default App;
