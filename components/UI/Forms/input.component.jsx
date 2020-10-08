import { FormControlUI, FormLabel } from './input.styles';
import { FormGroup } from 'components/UI';

const input = ({ elementType, elementConfig: { options, ...inputConfig }, ...props }) => {
  let optionValues = null;
  let valid = true;

  if (!props.valid && props.validation && props.touched) {
    valid = false;
  }

  if (options) {
    optionValues = options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.displayValue}
      </option>
    ));
  }

  const inputElement = (
    <FormControlUI as={elementType} {...inputConfig} onChange={props.changed} isValid={valid}>
      {optionValues}
    </FormControlUI>
  );

  return (
    <FormGroup>
      <FormLabel>{props.label}</FormLabel>
      {inputElement}
    </FormGroup>
  );
};

export default input;
