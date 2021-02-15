import React from 'react';
import { FlatList, Text, Image } from 'react-native';
import { Card } from '..';

interface Props {
  cards: any[];
  place: any;
}

export function Hand({ cards, place }: Props) {
  return (
    <FlatList
      data={cards}
      renderItem={({ item: card }) => (
        <Image
          source={card}
          style={{
            height: 125,
            width: 79,
            borderRadius: 5
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={3}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      style={{
        ...place,
        width: '70%',
        position: 'absolute',
        padding: 0
      }}
    />
  );
}
