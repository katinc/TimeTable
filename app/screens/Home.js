import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Icon name="add" size={40} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: colors.black,
    fontWeight: '600',
  },
  buttonContainer: {
    //Positioning
    position: 'absolute',
    bottom: 10,
    right: 10,

    width: 50,
    height: 50,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    // alignContent: 'flex-end',
    borderRadius: 35,
  },
});

export default Home;
