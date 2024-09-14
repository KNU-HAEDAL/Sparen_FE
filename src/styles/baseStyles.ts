import * as Type from '@/interface/styleInterface';
import styled from '@emotion/styled';

export const Img = styled.img<Type.IImg>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  text-align: ${(props) => props.textAlign};
  margin-top: ${(props) => props.mgTop};
  margin-bottom: ${(props) => props.mgBottom};
  margin-left: ${(props) => props.mgLeft};
  margin-right: ${(props) => props.mgRight};
  border-radius: ${(props) => props.radius};
  flex-shrink: 0;
`;

export const Text = styled.div<Type.IText>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-style: ${(props) => props.fontStyle};
  cursor: ${(props) => props.cursor};
  text-align: ${(props) => props.textAlign};
  max-width: ${(props) => props.maxWidth};
  line-height: ${(props) => props.lineHeight};
  margin-top: ${(props) => props.mgTop};
  margin-bottom: ${(props) => props.mgBottom};
  margin-left: ${(props) => props.mgLeft};
  margin-right: ${(props) => props.mgRight};
  color: ${(props) => props.color};
`;

export const button = styled.div<Type.IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.pdColumn} ${(props) => props.pdRow};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  ${(props) => props.borderType};
  ${(props) => props.borderColor};
  padding: ${(props) => props.pdColumn} ${(props) => props.pdRow};
`;

export const Container = styled.div<Type.IContainer>`
  display: flex;
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textAlign};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.bgColor};
  margin: ${(props) => props.mgColumn} ${(props) => props.mgRow};
  /* border-color: ${(props) => props.borderColor}; */
  margin-top: ${(props) => props.mgTop};
  margin-bottom: ${(props) => props.mgBottom};
  margin-left: ${(props) => props.mgLeft};
  margin-right: ${(props) => props.mgRight};
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border} ${(props) => props.borderType};
  ${(props) => props.borderColor}
  cursor: ${(props) => props.cursor};
`;

export const TotalTierGraph = styled.div<Type.ITierGraph>`
  display: flex;
  text-align: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  /* width: 100%;
  height: 0.3125rem; */
  margin: 1rem 0;
  margin: ${(props) => props.mgColumn} ${(props) => props.mgRow};
  /* padding-right: 1.625rem; */
  /* border-radius: 0.125rem; */
  border-radius: ${(props) => props.radius};
  flex-shrink: 0;
  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CurrentTierGraph = styled.div<Type.ICurrentTierGraph>`
  /* width: 1rem; */
  /* height: 0.3125rem; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: 0;
  padding-left: ${(props) => props.pdLeft};
  padding: 0 1rem;
  /* border-radius: 0.125rem; */
  border-radius: ${(props) => props.radius};
  /* background: linear-gradient(90deg, #81633e 0%, #b28854 50%); */
  background-color: ${(props) =>
    `linear-gradient(45deg, #4e4e4e 0%, ${props.bgColor} 50%)` ||
    'linear-gradient(90deg, #81633e 0%, #b28854 50%)'};
`;

export const TextItem = styled.div<{ fontWeight?: string; color: string }>`
  color: ${(props) => props.color || 'var(--color-class-02)'};
  font-size: 1rem;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || '400'};
  line-height: normal;
`;

export const HorizontalLine = styled.div<{ margin?: number }>`
  border-top: 1px solid var(--color-green-06);
  margin: ${({ margin }) => margin && `${margin}px`};
`;

// export const TeerTotal = styled.div`
//   display: flex;
//   /* width: 21.125rem; */
//   margin: 0 1rem;
//   /* width: 19rem; */
//   height: 0.9375rem;
//   /* padding-right: 11.8125rem; */
//   /* padding: 0 1rem; */
//   /* margin: 0 5rem; */
//   align-items: center;
//   flex-shrink: 0;

//   border-radius: 0.3125rem;
//   background: #000;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// `;

// export const TeerCurrent = styled.div`
//   width: 10.3125rem;
//   height: 0.9375rem;
//   flex-shrink: 0;
//   padding-left: 0.3125rem;
//   border-radius: 0.3125rem;
//   /* background: linear-gradient(90deg, #81633e 0%, #b28854 50%); */
//   background: ${(props) =>
//     `linear-gradient(45deg, #4e4e4e 0%, ${props.background} 50%)` ||
//     'linear-gradient(90deg, #81633e 0%, #b28854 50%)'};
// `;
