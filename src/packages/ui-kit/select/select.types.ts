export type SelectProps = {
  label: string;
  name: string;
  error?: string;
  options: { label: string; value: string | number; selected?: boolean }[];
};
