import React, { ReactNode } from 'react';
import {
  TableContent,
  TableContentWrapper,
  TableImage,
  TableWrapper
} from './styles';
import table from '../../assets/images/table.jpg';

interface Props {
  children: ReactNode;
}

export function Table({ children }: Props) {
  return (
    <TableWrapper>
      <TableImage source={table}></TableImage>
      <TableContentWrapper>
        <TableContent>{children}</TableContent>
      </TableContentWrapper>
    </TableWrapper>
  );
}
