import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Bill from '../components/Bill';
import DonutChart from '../components/DonutChart';
import { BILLS } from '../DummyData/BILLS';
import { IBill } from '../models/IBill';

const renderItemComponent = (data:IBill) => <Bill bill={data}/>

const ItemSeparator = () => <View style={{ height: 2 }}/>

const Home = ({navigation}: any) => {
  const logout = () => {
    navigation.navigate('Home');
  }
  return (
    <View>
      <DonutChart data={BILLS}/>
      <FlatList
        data={BILLS}
        renderItem={({item}) => renderItemComponent(item)}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item)=>item.name}
      />
    </View>
  );
}

export default Home;