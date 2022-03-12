import React from 'react';
import { Text, View } from 'react-native';

interface Bill {
  bill: {
    name: string,
    cost: number,
    isPaid: boolean,
    dueDate: string,
  }
}

const Bill = (props: Bill) => {
  return (
    <View>
      <Text>{props.bill.name}</Text>
    </View>
  );
}

export default Bill;
