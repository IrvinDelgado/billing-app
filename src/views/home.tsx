import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import Bill from '../components/Bill';
import DonutChart from '../components/DonutChart';
import { BILLS } from '../DummyData/BILLS';
import { IBill } from '../models/IBill';
import { styles } from '../styles/main';

const Home = ({navigation}: any) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Array<IBill>>([]);

  const renderItemComponent = (data:IBill, index:number) => <Bill bill={data} idx={index}/>
  const ItemSeparator = () => <View style={{ height: 2 }}/>


  // Mock Fetch API
  const getBills = () => {
    try {
      setData(BILLS);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getBills();
  },[])

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator size={"large"}/>:(
        <View>
        <DonutChart data={data}/>
        <FlatList
          data={data}
          renderItem={({item, index}) => renderItemComponent(item, index)}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item)=>item.name}
        />
        <Button title='logout' onPress={()=>{navigation.navigate('Login')}}/>
        </View>
      )}
    </View>
  );
}

export default Home;