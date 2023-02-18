import './App.css';
import Header from './components/Header/Header';
import { User } from './data.js'

function App() {
  return (
    <div className="App">
      <div>
        <Header
          name = {User.name} 
          image = {User.image}
        />
        Website under construction, if you want more information please refer to the linkedin profile
        <a href="https://www.linkedin.com/in/carlos-andres-acosta-tangarife-7869881b9/"> Carlos Acosta</a>
      </div>
    </div>
  );
}

export default App;
