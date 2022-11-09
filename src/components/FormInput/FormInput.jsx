import { FormInputLabel, Group, Input } from './FormInput.styles.jsx';

const FormInput = ({ label, ...props }) => {
  return (
    <Group>
      <Input {...props} />
      {label && (
        <FormInputLabel
          className={`${props.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
