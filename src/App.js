import logo from './logo.svg';
import './App.css';
import Challenge from './components/Challenge';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
          {/* <ConditionalRender/> */}
        <ShowUserName name={'andreza'} age={23} />
      </header>
    </div>
  );
}

export default App;
