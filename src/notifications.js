import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style.js';
import IonicIcons from 'react-native-vector-icons/Ionicons';

export default function Notifications() {
  return (
    <View style={styles.notifications}>
      <View style={styles.heading}>
        <IonicIcons
          name="arrow-back"
          color={'black'}
          size={36}
          style={{padding: 3}}
        />
        <Text style={styles.h1}>Notification</Text>
      </View>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </View>
  );
}

function Notification() {
  return (
    <View style={styles.n1}>
      <Image
        style={styles.n1_gif}
        source={{
          uri: 'https://media.tenor.com/P_9kirfdOo4AAAAi/kawaii-love.gif',
        }}
      />
      <Text style={styles.n1_text}>You received a joy</Text>
      <TouchableOpacity style={styles.n1_button}>
        <Text style={styles.startBtn}>View</Text>
      </TouchableOpacity>
    </View>
  );
}
