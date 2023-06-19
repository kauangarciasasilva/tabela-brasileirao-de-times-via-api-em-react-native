import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';





export default function NavTimes() {






  return (

    <View>
      <Text style={styles.title}>Times do Brasileirão série B</Text>
   


    </View>



  );
}

const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 30,
    paddingHorizontal: 5,
    backgroundColor:'#3D415A',
    borderRadius:5,
    
  },
 
 

  itemTexto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 3,
    height: 20,
    
    
 

  },
  sg: {
    width: 30,
    fontSize: 10,
   
  },
  gm: {
    width: 40,
    fontSize: 10,
    
  },
  sc: {
    width: 30,
    fontSize: 10,
    
  },
  pts: {
    width: 40,
    fontSize: 10,
    
   
  },
  clube: {
    width: 170,
    fontSize: 10,
    marginLeft:25
    
    
    
    
  },

});