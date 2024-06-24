import './App.css';
import { FakeOption } from './components/Fake-Option/FakeOption';
import { FakeSelect } from './components/Fake-Select/FakeSelect';

function App() {
  return (
    <div className="App">
      <FakeSelect
        name="SelectName"
        disabled={true}
      >
        <FakeOption value="red">Rojo</FakeOption>
        <FakeOption value="blue">Azul</FakeOption>
        <FakeOption value="green">Verde</FakeOption>
      </FakeSelect>
    </div>
  );
}

export default App;
