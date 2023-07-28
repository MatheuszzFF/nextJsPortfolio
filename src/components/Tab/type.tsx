export type TTabs = {
  title: string;
  isWithImage: boolean;
  iconWithBorders: boolean;
  backgroundBlack: boolean;
  cvButton: boolean;
  contentInLeft: boolean;
  contents: {
    name: string;
    icon: string;
    content: string;
  }[];
};