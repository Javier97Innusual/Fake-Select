import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { DEFAULT_VALUE } from './components/Fake-Select/FakeSelect.constants';

describe('App component', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(
      <App />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should not display rectangle on initial render', () => {
    const { container } = render(<App />);

    expect(container.querySelector('.rectangle-main')).not.toBeInTheDocument();
  });

  it('should update state and displays rectangle on form submission', () => {
    const { getByText, container } = render(<App />);

    fireEvent.click(getByText(DEFAULT_VALUE));
    fireEvent.click(getByText('Rojo'));
    fireEvent.click(getByText('Submit'));

    expect(container.querySelector('.rectangle-main')).toHaveClass('rectangle-red');
  });

  it('should update state correctly when a different option is selected', () => {
    const { getByText, container } = render(<App />);

    fireEvent.click(getByText(DEFAULT_VALUE));
    fireEvent.click(getByText('Azul'));
    fireEvent.click(getByText('Submit'));

    expect(container.querySelector('.rectangle-main')).toHaveClass('rectangle-blue');
  });

  it('should not submit form if no option is selected', () => {
    const { getByText, container } = render(<App />);

    fireEvent.click(getByText('Submit'));

    expect(container.querySelector('.rectangle-main')).not.toBeInTheDocument();
  });
});