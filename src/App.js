import './App.css';
import { User } from './data.js'
import Header from './components/Header/Header';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <div>
        <Header
          name = {User.name} 
          image = {User.profileImage}
        />
        <Card 
          initialMessage='Welcome'
          image={User.homeImage}
          description={User.homeDescription}
        />
        Website under construction, if you want more information please refer to the linkedin profile
        <a href="https://www.linkedin.com/in/carlos-andres-acosta-tangarife-7869881b9/"> Carlos Acosta</a>
      </div>
    </div>
  );
}

export default App;
