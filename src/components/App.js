import Home from './Home';
import {main_title, blogList} from '../blogs';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Home blogList={blogList} main_title={main_title}/>
    </div>
  );
}

export default App;
