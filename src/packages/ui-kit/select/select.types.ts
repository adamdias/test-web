export type SelectProps = {
  label: string;
  name: string;
  error?: string;
  withoutBorderRadiusLeft?: boolean;
  withoutBorderRadiusRight?: boolean;
  defaultValue?: string | number;
  disabled?: boolean;
  loading?: boolean;
  options: {
    label: string;
    value: string | number;
  }[];
  state?: any;
  setState?: any;
};
