import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Image } from 'expo-image';

import Nav from './nav-componets';
import TeamEntity from '../entity/team-Entity';




export default function Tabela() {

  //Linha do state
  const [teams, setTeam] = useState<TeamEntity[]>([]);


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_a4de02667c77a3a8ab87c5c725c67c");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let teamsPosition: TeamEntity[] = [];

    fetch("https://api.api-futebol.com.br/v1/campeonatos/{campeonato_id}/tabela", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((team) => {

          const dataTeam = {
            id: team['time']['time_id'],
            position: team['posicao'],
            team_shield_url: team['time']['escudo'],
            team_name: team['time']['nome_popular'],
            team_points: team['pontos'],
            team_gols_pro: team['gols_pro'],
            team_saldo_gols: team['saldo_gols'],
            team_gols_contra: team['gols_contra']
          };

          teamsPosition.push(dataTeam);
        });
        setTeam(teamsPosition);
        console.log(teamsPosition);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (

    <View style={styles.container}>
      <Nav />

      <View style={styles.item}>
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(team) =>
            <View style={styles.item}>
              <Image style={styles.shield} source={team.item.team_shield_url} />
              <Text style={styles.position}>{team.item.position}</Text>
              <Text style={styles.name}>{team.item.team_name}</Text>
              <Text style={styles.position}>{team.item.team_points}</Text>
              <Text style={styles.position}>{team.item.team_gols_pro}</Text>
              <Text style={styles.position}>{team.item.team_saldo_gols}</Text>
              <Text style={styles.position}>{team.item.team_gols_contra}</Text>

            </View>
          }

        />
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 16,
    marginHorizontal: 16,
  },

  table: {
    flex: 1,
    width: '100%'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    paddingTop: 8,
    height: 50,

  },
  shield: {
    width: 30,
    height: 30
  },
  name: {
    fontSize: 20,
    width: 140,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  position: {
    width: 30,
    fontSize: 20,
  },


});