import * as types from '@/interface/StyleInterface';
import styled from '@emotion/styled';

export const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: 0;
`;

export const Text = styled.div<types.IText>`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  margin-top: ${(props) => props.mgTop};
  margin-bottom: ${(props) => props.mgBottom};
  margin-left: ${(props) => props.mgLeft};
  margin-right: ${(props) => props.mgRight};
  color: ${(props) => props.color};
`;

export const button = styled.div<types.IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1.5px solid ${(props) => props.borderColor};
  padding: 0.25rem 0.5rem;
`;
