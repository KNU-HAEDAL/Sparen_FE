export interface IText {
  fs?: string;
  fw?: string;
  mgTop?: string;
  mgBottom?: string;
  mgLeft?: string;
  mgRight?: string;
  color?: string;
}

export interface IButton {
  width?: string;
  height?: string;
  radius?: string;
  bgColor?: string;
  color?: string;
  borderColor?: string;
  children: React.ReactNode;
}
