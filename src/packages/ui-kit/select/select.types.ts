export type SelectProps = {
  label: string;
  name: string;
  error?: string;
  disabled?: boolean;
  loading?: boolean;
  options: {
    label: string;
    value: string | number;
    selected?: boolean;
  }[];
  state?: any;
  setState?: any;
};
