import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Bill from '../components/Bill';
import { BILLS } from '../DummyData/BILLS';

const renderItemComponent = (data:any) => <Bill bill={data}/>

const ItemSeparator = () => <View style={{ height: 2 }}/>

const Home = () => {
  return (
    <View>
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