import React, { useRef, useMemo, useEffect } from 'react';
import { ReactNode } from 'react';
import { Animated, PanResponder } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  children: ReactNode;
  interact?: boolean;
}

export function Draggable({ children, interact }: Props) {
  const dropArea = useSelector((state) => state.dropArea);
  const dispatch = useDispatch();

  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => {
          position.setValue({ x: gesture.dx, y: gesture.dy });
        },
        onPanResponderRelease: (_, gesture) => {
          if (isOverDropArea(gesture)) {
            dispatch({ type: 'DROP_CARD', card: children?.props?.card });
          }
          position.setValue({ x: 0, y: 0 });
        }
      }),
    [dropArea]
  );

  function isOverDropArea({ dx, dy, x0, y0 }) {
    const { begin, end } = dropArea;
    const current = {
      x: x0 + dx,
      y: y0 + dy
    };

    const isOverXArea = current.x >= begin.x && current.x <= end.x;
    const isOverYArea = current.y >= begin.y && current.y <= end.y;

    return isOverXArea && isOverYArea;
  }

  const handlers = interact ? panResponder.panHandlers : {};

  return (
    <Animated.View
      {...handlers}
      style={{ transform: position.getTranslateTransform() }}
    >
      {children}
    </Animated.View>
  );
}
