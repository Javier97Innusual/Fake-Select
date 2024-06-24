import { useState } from 'react';
import { FormContentType } from './index.type';
import classNames from 'classnames';
import { FakeOption } from './components/Fake-Option/FakeOption';
import { FakeSelect } from './components/Fake-Select/FakeSelect';
import './App.css';

// He decidido usar un formulario reactivo en vez de uno nativo de HTML (por get) porque se me hacía más cómodo
function App() {
  const [formContent, setFormContent] = useState<FormContentType>({
    rectangle: '',
  });
  const [colourOfRectangle, setColourOfRectangle] = useState<string>('');

  const handleFormSubmit = (evnt: React.FormEvent<HTMLFormElement>) => {
    evnt.preventDefault();

    if (!colourOfRectangle) {
      return;
    }

    setFormContent({
      rectangle: colourOfRectangle,
    });
  };

  const handleFakeSelect = (newValue: string) => setColourOfRectangle(newValue);

  return (
    <div className="App">
      <form
        method="get"
        id="test-form"
        onSubmit={handleFormSubmit}
      >
        <FakeSelect
          name="SelectName"
          onChange={handleFakeSelect}
        >
          <FakeOption value="red">Rojo</FakeOption>
          <FakeOption value="blue">Azul</FakeOption>
          <FakeOption value="green">Verde</FakeOption>
        </FakeSelect>
        <button type="submit" form="test-form" value="Submit">Submit</button>
      </form>
      {formContent.rectangle && (
        <div className={classNames('rectangle-main', `rectangle-${formContent.rectangle}`)}></div>
      )}
    </div>
  );
}

export default App;
