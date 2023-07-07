import { Text as ChText } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { mainComponentBaseStyle } from '../layout/mainContent.vars';
import { IMainContentComponentBaseProps } from '../types/mainContent';

export interface ITextProps extends IMainContentComponentBaseProps {
  children?: ReactNode;
}

/**
 * Component for displaying text (in the main content)
 */
const Text: FC<ITextProps> = ({ baseProps, children }) => {
  return <ChText {...baseProps}>{children}</ChText>;
};
Text.defaultProps = {
  baseProps: mainComponentBaseStyle.baseProps
};

export default Text;