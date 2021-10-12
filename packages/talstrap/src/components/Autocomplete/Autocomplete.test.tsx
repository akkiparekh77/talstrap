import { act, fireEvent, render, screen, userEvent } from '../../utils/test-utils'
import { TextFieldProps } from '../TextField'
import { Autocomplete, AutocompleteProps, AutocompleteTextFieldProps, AutocompleteValue } from './Autocomplete'

const options: AutocompleteValue[] = [
  {
    value: 'FOO',
    text: 'Foo',
  },
  {
    value: 'BAR',
    text: 'bar',
  },
]

const props: AutocompleteProps = {
  dataService: jest.fn(() => Promise.resolve(options)),
  onOptionSelect: jest.fn(),
  getOptionSelected: ({ text }) => text,
}

describe('Autocomplete', () => {
  it('should render correctly', () => {
    render(<Autocomplete />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should fire onOptionSelect only if a valid option is selected', async () => {
    render(<Autocomplete {...props} />)

    // GIVEN
    const inputField = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(inputField, { target: { value: 'F' } })
    await screen.findByRole('listbox')
    const listItems = screen.getAllByRole('option')
    fireEvent.click(listItems[0])

    expect(props.onOptionSelect).toHaveBeenCalledTimes(1)
    expect(inputField.value).toBe('Foo')

    // WHEN

    const clearButton = screen.getByTitle('Clear')

    fireEvent.click(clearButton)

    // THEN
    // Total number of calls for onOptionSelect is still 1 so it was not called again on clear
    expect(props.onOptionSelect).toHaveBeenCalledTimes(1)
    expect(inputField.value).toBe('')
  })

  it('should debounce the calls to dataservice', async () => {
    // GIVEN
    const dataService = jest.fn(() => Promise.resolve(options))
    render(<Autocomplete {...props} dataService={dataService} />)

    const inputField = screen.getByRole('textbox') as HTMLInputElement

    // WHEN
    await act(async () => {
      await userEvent.type(inputField, 'FOO', { delay: 100 })
    })
    await act(() => new Promise((resolve) => setTimeout(resolve, 1000)))

    // THEN
    expect(dataService).toHaveBeenCalledTimes(1)
  })

  it('should accept TextFieldProps for error helper text', () => {
    const textFieldProps: TextFieldProps = {
      helperText: 'error helper',
      error: true,
    }
    render(<Autocomplete TextFieldProps={textFieldProps} />)

    const helperText = screen.getByText('error helper')
    expect(helperText).toBeInTheDocument()
  })

  it('should accept AutocompleteTextFieldProps for warning helper text', () => {
    const textFieldProps: AutocompleteTextFieldProps = {
      helperText: 'warning helper',
      warning: true,
    }
    render(<Autocomplete TextFieldProps={textFieldProps} />)

    const helperText = screen.getByText('warning helper')
    expect(helperText).toBeInTheDocument()
  })
})
