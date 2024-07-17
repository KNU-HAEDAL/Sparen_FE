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

interface IPadding {
  pdColumn?: string;
  pdRow?: string;
  pdTop?: string;
  pdBottom?: string;
  pdLeft?: string;
  pdRight?: string;
}

interface ITypography {
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  lineHeight?: string;
}

export interface IImg extends IStyle, IMargin {
  textAlign?: string;
  radius?: string;
}

export interface IText extends IStyle, IMargin, ITypography {
  maxWidth?: string;
  textAlign?: string;
  cursor?: string;
}

export interface IButton extends IStyle, IMargin, IPadding {
  radius?: string;
  borderColor?: string;
  children: React.ReactNode;
  textAlign?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  borderType?: string;
  border?: string;
}

export interface IContainer extends IStyle, IMargin {
  gap?: string;
  textAlign?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  borderColor?: string;
  borderType?: string;
  border?: string;
  radius?: string;
  cursor?: string;
}

export interface ITierGraph extends IStyle, IMargin {
  radius?: string;
}

export interface ICurrentTierGraph extends IStyle {
  pdLeft?: string;
  padding?: string;
  radius?: string;
}
