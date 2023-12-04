import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const WinnerPage = ({navigation}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://slowcompany.nl/cdn/shop/files/IMG_0444.jpg?v=1687691227&width=600',
      }}
      style={styles.container}>
      <View style={styles.result}>
        <View style={styles.view1}>
          <Text style={styles.text}>🎉🎉JOY FOR YOU🎉🎉</Text>
        </View>
        <View style={styles.view1}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Game')}>
            <Text style={[styles.text, {color: 'white'}]}>
              Share
              <IonicIcons name="share-social-outline" size={22} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WinnerPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  result: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    height: '20%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    flex: 1,
    padding: 7,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    backgroundColor: '#34aeeb',
    borderRadius: 20,
  },
});
