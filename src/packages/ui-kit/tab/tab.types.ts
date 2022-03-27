import { IconNameProps } from "../icon/get-icon-by-name";

export type TabProps = {
  options: {
    title: string;
    subtitle: string;
    icon: {
      name: IconNameProps;
      color: string;
    };
    active: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
  }[];
};
