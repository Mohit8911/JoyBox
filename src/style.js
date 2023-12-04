import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: 300, // Set the desired width
    height: 400, // Set the desired height
    resizeMode: 'cover', // Choose a resize mode: cover, contain, stretch, etc.
    borderRadius: 20,
  },
  image2: {
    flex: 3,
    width: 330, // Set the desired width
    height: 300, // Set the desired height
    resizeMode: 'cover', // Choose a resize mode: cover, contain, stretch, etc.
    borderRadius: 20,
  },
  text: {
    fontFamily: 'Roboto-BoldItalic',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  menuBtn: {
    borderRadius: 50,
    height: 55,
    width: 55,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButtonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  startBtn: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 40,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
  },
  h2: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    padding: 10,
  },
  notifications: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  n1: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space',
    backgroundColor: 'rgba(193, 213, 247, 0.5)',
    elevation: 0,
    marginVertical: 5,
  },
  n1_button: {
    // margin: 10,
    padding: 10,
    elevation: 100,
  },
  n1_text: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
  },
  n1_gif: {
    height: 80,
    width: 100,
    resizeMode: 'cover',
  },
  n2: {
    height: 99,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgba(193, 213, 247, 0.5)',
    elevation: 0,
    marginVertical: 5,
  },
  n2_view1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
  },
  n2_view2: {
    width: '100%',
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  n2_text1: {
    backgroundColor: '#1bacfa',
    color: 'black',
    padding: 3,
    borderBottomLeftRadius: 5,
    elevation: 50,
  },
  n2_text2: {
    color: 'black',
    padding: 15,
    fontSize: 18,
  },
  game: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  options: {
    flex: 3,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  option: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#fed6b5',
  },
  optionText: {
    fontSize: 22,
    color: 'black',
  },
  selectedOptionsContainer: {
    marginTop: 20,
  },
  btn: {
    backgroundColor: 'orange',
    padding: 15,
    width: 100,
    elevation: 10,
    // height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    marginBottom:153,
    // backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalButton: {
    margin:10,
    textAlign: 'center',
    backgroundColor: 'orange',
    borderRadius: 50,
    padding: 1,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent:'center'
  },
  modalUpper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
