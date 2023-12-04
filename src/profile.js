import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style.js';
import IonicIcons from 'react-native-vector-icons/Ionicons';

function Suggestion({type, content}) {
  return (
    <View style={styles.n2}>
      <View style={styles.n2_view1}>
        <Text style={styles.n2_text1}>{type}</Text>
      </View>
      <View style={styles.n2_view2}>
        <Text style={styles.n2_text2}>{content}</Text>
      </View>
    </View>
  );
}
export default function Profile() {
  return (
    <View style={styles.notifications}>
      <View style={styles.heading}>
        <IonicIcons
          name="help-circle-sharp"
          color={'black'}
          size={46}
          style={{padding: 3}}
        />
        <Text style={styles.h1}>Suggestion</Text>
      </View>
      <Suggestion type="Relationship" content="I love my wife and kids" />
      <Suggestion
        type="Finance"
        content="Everyday I should call my mom this week and talk to her 15 mins atleast."
      />
      <Suggestion
        type="Finance"
        content="I want to save 10% of my savings starting this month."
      />
    </View>
  );
}
