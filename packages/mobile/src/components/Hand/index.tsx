import React from 'react';
import { Image, View } from 'react-native';
import { Draggable } from '../Draggable';

interface Props {
  cards: any[];
  place: any;
  interact?: boolean;
}

export function Hand({ cards, place, interact }: Props) {
  return (
    <View
      style={{
        ...place,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        position: 'absolute',
        padding: 0
      }}
    >
      {cards.map((card, i) => (
        <Draggable key={i}>
          <Image
            source={card}
            style={{
              height: 125,
              width: 79,
              borderRadius: 5
            }}
          />
        </Draggable>
      ))}
    </View>
  );
}
