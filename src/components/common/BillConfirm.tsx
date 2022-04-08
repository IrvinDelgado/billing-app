import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, DeviceEventEmitter } from 'react-native';
import { IBill } from '../../models/IBill';

const BillConfirm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [bill, setBill] = useState({name:'', cost:0, isPaid: false, dueDate:''});

  const handleEvent = async (bill:IBill) => {
    setBill(bill)
    setModalVisible(true);
  }

  useEffect(() => {
    // Although Device Emitter is Deprecated we are using Expo so no Native Modules can be used 
    DeviceEventEmitter.addListener('openModal',handleEvent);    
  })
  


  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          DeviceEventEmitter.removeAllListeners();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bill:{bill.name}</Text>
            <Text style={styles.modalText}>Amount Due: ${bill.cost}</Text>
            <TouchableOpacity
              style={[styles.button, styles.btnConfirm]}
              onPress={() => {
                setModalVisible(!modalVisible);
                DeviceEventEmitter.removeAllListeners();
                }
              }
            >
              <Text style={styles.textStyle}>Confirm Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.btnCancel]}
              onPress={() => {
                setModalVisible(!modalVisible);
                DeviceEventEmitter.removeAllListeners();
                }
              }
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
}

export default BillConfirm;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  modalView: {
    height: 250,
    width: 350,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 150,
    marginBottom: 20
  },
  btnConfirm: {
    backgroundColor: "#2196F3",
  },
  btnCancel:{
    backgroundColor: "#DC143C"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});