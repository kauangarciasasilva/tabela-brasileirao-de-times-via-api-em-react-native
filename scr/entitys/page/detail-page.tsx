import React, { } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
export default function DetailPage({ route, navigation }) {

    const { team_name, team_shield_url, position, team_points, team_gols_pro, team_saldo_gols, team_gols_contra } = route.params;
    console.log(team_name, team_shield_url)
    return (

        <View style={styles.container}>
            <Image style={styles.shield} source={team_shield_url} />
             
                <Text style={styles.buttonText}>Name :{team_name}</Text>
                <Text style={styles.buttonText}>Position : {position}</Text>
                <Text style={styles.buttonText}>PTS : {team_points}</Text>
                <Text style={styles.buttonText}>SG : {team_saldo_gols}</Text>
                <Text style={styles.buttonText}>GM :{team_gols_pro}</Text>
                <Text style={styles.buttonText}>GC :{team_gols_contra}</Text>
           

        </View>


    );
}
const styles = StyleSheet.create({


    container: {
        flex:1,
        padding:50,
        alignItems: 'center',
       
        width: 350,
        fontSize: 30,
        backgroundColor:'#888888',
       
        

    },
    shield: {
        width: 100,
        height: 90,
    },
    buttonText:{
        fontSize: 20,
        width: 200,
        textAlign: 'center',
        fontWeight: 'bold'
    }



});
