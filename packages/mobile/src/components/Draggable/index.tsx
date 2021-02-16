import React, { useRef, useMemo, useEffect } from 'react';
import { Animated, PanResponder } from 'react-native';
import { useSelector } from 'react-redux';

export function Draggable({ children }) {
  const dropArea = useSelector((state) => state.dropArea);

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
            console.log('IS DROP AREA');
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

  return (
    !!dropArea && (
      <Animated.View
        {...panResponder.panHandlers}
        style={{ transform: position.getTranslateTransform() }}
      >
        {children}
      </Animated.View>
    )
  );
}
