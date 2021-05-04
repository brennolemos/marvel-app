import React from 'react';

import * as S from './Error-styles';

type ErrorProps = {
  error: string;
};

const Error = ({ error }: ErrorProps) => {
  return <S.Error>Error: {error}</S.Error>;
};

export default Error;
