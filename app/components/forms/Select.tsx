import { SelectProps } from "@/app/types/Form";

const Select = ({ name, register, values }: SelectProps) => (
  <>
    <select {...register(name)}>
      {values.map((option) => (
        <option value={option.value}>{option.displayValue}</option>
      ))}
    </select>
  </>
);

export default Select;
