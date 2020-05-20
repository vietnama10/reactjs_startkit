import React from 'react';
import styled from 'styled-components';

const WrapperPrimitive = styled.div`
  margin: 2em auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const Wrapper = () => {
  return <WrapperPrimitive />;
};

export default Wrapper;
