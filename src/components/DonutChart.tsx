import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import { IBill } from '../models/IBill';

const RADIUS = 70;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const COLORS = ["#F05454","#30475E","#222831","#82971D"];

interface DonutChart {
  data: Array<IBill>
}

const DonutChart = (props:DonutChart) => {

  const totalBills = () => props.data.reduce((preVal:number, bill:IBill )=> preVal + bill.cost, 0);
  

  // create multiple circles with the percentage they should be filled
  // rotate that circles starting fill position
  const createPieChart = () => {
    // Total Circumference - (Total Circumference * percentage)
    const strokeDashoffset = (cost:number) =>
    CIRCLE_CIRCUMFERENCE - (CIRCLE_CIRCUMFERENCE * (cost / totalBills()));
    const angle = (cost:number) => (cost / totalBills()) * 360;

    return(
      props.data.map((item,index) => {
        const currAngle = props.data
          .slice(0,index)
          .reduce(
            (preVal:number,currVal:IBill) => 
              preVal+angle(currVal.cost), 0) 

        return (
          <Circle
            key={index}
            cx="50%"
            cy="50%"
            r={RADIUS}
            stroke={COLORS[index]}
            fill="transparent"
            strokeWidth="40"
            originX="90"
            originY="90"
            strokeDasharray={CIRCLE_CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset(item.cost)}
            rotation={currAngle}
          />
        )
      })
    )
  }

  return (
    <View style={styles.container}>
      <Svg height="250" width="250" viewBox="0 0 180 180">
        <G rotation={-90} originX="90" originY="90">
          {createPieChart()}
        </G>
      </Svg>
      <Text style={styles.label}>{totalBills()}$</Text>
    </View>
  );
}

export default DonutChart;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  label: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    marginTop: 110,
  },
});