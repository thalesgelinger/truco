import React, { ReactNode, useEffect, useRef } from 'react';
import {
  TableContent,
  TableContentWrapper,
  TableImage,
  TableWrapper
} from './styles';
import table from '../../assets/images/table.jpg';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';

interface Props {
  children: ReactNode;
}

export function Table({ children }: Props) {
  const dispatch = useDispatch();

  const tableRef = useRef<View>(null);

  useEffect(() => {
    tableRef.current?.measure((fx, fy, width, height, px, py) => {
      const dropArea = {
        begin: {
          x: px,
          y: py
        },
        end: {
          x: px + width,
          y: py + height
        }
      };
      dispatch({ type: 'SET_DROP_AREA', dropArea });
    });
  }, []);

  return (
    <TableWrapper ref={tableRef}>
      <TableImage source={table}></TableImage>
      <TableContentWrapper>
        <TableContent>{children}</TableContent>
      </TableContentWrapper>
    </TableWrapper>
  );
}
