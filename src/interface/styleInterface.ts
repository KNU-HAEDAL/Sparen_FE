export interface IStyle {
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
}

interface IMargin {
  mgColumn?: string;
  mgRow?: string;
  mgTop?: string;
  mgBottom?: string;
  mgLeft?: string;
  mgRight?: string;
}

interface ITypography {
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  lineHeight?: string;
}

export interface IText extends IStyle, IMargin, ITypography {
  maxWidth?: string;
}

export interface IButton extends IStyle {
  radius?: string;
  borderColor?: string;
  children: React.ReactNode;
}

export interface IContainer extends IStyle, IMargin {
  gap?: string;
  textAlign?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
}

export interface ITierGraph extends IStyle, IMargin {
  radius?: string;
}

export interface ICurrentTierGraph extends IStyle {
  pdLeft?: string;
  padding?: string;
  radius?: string;
}
