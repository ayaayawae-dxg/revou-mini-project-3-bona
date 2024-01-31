import { Typography } from 'antd';
import React from 'react'

type Props = {
  children: string;
}

const ErrorMessage = ({ children }: Props) => {
  return (
    <Typography.Text
      type='danger'
    >
      {children}
    </Typography.Text>
  )
}

export default ErrorMessage