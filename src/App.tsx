import { useState } from 'react';
import classNames from 'classnames';
import { FakeOption } from './components/Fake-Option/FakeOption';
import { FakeSelect } from './components/Fake-Select/FakeSelect';
import { FormContentType, OptionValueType } from './App.types';
import './App.css';
import { DEFAULT_VALUE } from './App.constants';

// He decidido usar un formulario reactivo en vez de uno nativo de HTML (por get) porque se me hacía más cómodo
function App() {
  const [formContent, setFormContent] = useState<FormContentType>();
  const [colourOfRectangle, setColourOfRectangle] = useState<OptionValueType>({
    value: '',
    name: DEFAULT_VALUE
  });;

  const handleFormSubmit = (evnt: React.FormEvent<HTMLFormElement>) => {
    evnt.preventDefault();

    if (!colourOfRectangle) {
      return;
    }

    setFormContent({
      rectangle: colourOfRectangle,
    });
  };

  const handleFakeSelect = (newValue: OptionValueType) => setColourOfRectangle(newValue);

  return (
    <div className="App">
      <form
        method="get"
        id="test-form"
        onSubmit={handleFormSubmit}
      >
        <FakeSelect
          id="SelectName"
          content={colourOfRectangle}
          onChange={handleFakeSelect}
        >
          <FakeOption value="red">Rojo</FakeOption>
          <FakeOption value="blue">Azul</FakeOption>
          <FakeOption value="green">Verde</FakeOption>
        </FakeSelect>
        <button type="submit" form="test-form" value="Submit">Submit</button>
      </form>
      {formContent?.rectangle?.value && (
        <div className={classNames('rectangle-main', `rectangle-${formContent.rectangle.value}`)}></div>
      )}
    </div>
  );
}

export default App;
