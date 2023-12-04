import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {styles} from './style.js';
import IonicIcons from 'react-native-vector-icons/Ionicons';

function ModalButton({onPress, name, title}) {
  return (
    <TouchableOpacity style={styles.modalButton} onPress={onPress}>
      <IonicIcons name={name} size={22} />
      {title && <Text style={styles.button}>{title}</Text>}
    </TouchableOpacity>
  );
}

export default function Feed({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalUpper}>
              <ModalButton name="add" title="Commit" />
              <ModalButton name="extension-puzzle-outline" title="Puzzle" />
            </View>
            <View style={styles.modalUpper}>
              <ModalButton name="pencil-sharp" title="Statement" />
              <ModalButton
                onPress={() => setModalVisible(!modalVisible)}
                name="close"
              />
              <ModalButton name="help-circle" title="MJ" />
            </View>
          </View>
        </View>
      </Modal>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/id/1304851731/vector/winning-gifts-in-lottery-grand-drawing-mistery-gift-question-marks-on-retro-illuminated.jpg?s=612x612&w=0&k=20&c=L--Yg7GqSQMgwBvPbmfL89LXoqqj2a2H2zzY_8HKEX8=',
        }}
        style={styles.image1}
      />
      <Text style={styles.text}>
        Begin your fun journey with a random surprise
      </Text>
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.menuButtonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => navigation.navigate('GameResult')}>
        <Text>
          <Text style={[styles.menuButtonText]}>Start Here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
