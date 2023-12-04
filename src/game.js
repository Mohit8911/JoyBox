import * as React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './style.js';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const Game = ({navigation}) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const options = [
    {id: 1, text: 'Yes, science is working on it'},
    {id: 2, text: 'Will come in 2023'},
    {id: 3, text: 'Not at all possible'},
  ];

  const handleOptionPress = optionId => {
    const isSelected = selectedOptions.includes(optionId);

    if (isSelected) {
      setSelectedOptions(prevSelected =>
        prevSelected.filter(selectedId => selectedId !== optionId),
      );
    } else {
      setSelectedOptions(prevSelected => [...prevSelected, optionId]);
    }
  };
  return (
    <View style={styles.game}>
      <Image
        source={{
          uri: 'https://i.imgur.com/Z36k6BG.jpg',
        }}
        style={styles.image2}
      />
      <Text style={styles.h2}>
        Is there possibility of flying cars in future?
      </Text>
      <View contentContainerStyle={styles.options}>
        {options.map(option => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.option,
              {
                backgroundColor: selectedOptions.includes(option.id)
                  ? '#fed6b5'
                  : 'white',
              },
            ]}
            onPress={() => handleOptionPress(option.id)}>
            <Text style={styles.optionText}>{option.text}</Text>
            {selectedOptions.includes(option.id) && (
              <IonicIcons name="checkmark-circle" color="orange" size={26} />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Result')}>
        <Text style={styles.btnText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Game;
