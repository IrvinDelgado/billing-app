import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{props.bill.name}</Text>
        <Text style={styles.subtitle}>{props.bill.dueDate}</Text>
      </View>
      <View>
        <Text style={styles.cost}>${props.bill.cost}</Text>
      </View>
    </View>
  );
}

export default Bill;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 350,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#B3B3B3',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  header: {
    fontSize: 18,
    fontWeight:'bold'
  },
  subtitle: {
    fontSize: 11,
    fontStyle: 'italic'
  },
  cost:{
    fontWeight: 'bold',
  }
});