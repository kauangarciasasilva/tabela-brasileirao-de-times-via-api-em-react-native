import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Image } from 'expo-image';




export default function Nav() {






  return (

    <View>
      <Text style={styles.title}>Tabela Brasileirão série B</Text>
      <View style={styles.itemTexto}>
        <Text style={styles.clube}>Clube</Text>
        <Text style={styles.pts}>PTS</Text>
        <Text style={styles.gm}>GM</Text>
        <Text style={styles.sg} >SG</Text>
        <Text style={styles.sc}>SC</Text>

      </View>


    </View>



  );
}

const styles = StyleSheet.create({

  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 30,
    paddingHorizontal: 5,
   
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