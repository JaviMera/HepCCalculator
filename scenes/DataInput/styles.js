import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#CBE7D2'
  },
  scrollview: {
    marginTop: 20
  },

  childContainer: {
      flex: 1,
      flexDirection: 'row',
      margin: 10
  },
  childText: {    
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#81C99C',
    color: "#ffffff",
    textAlign: 'right',
    padding: 10,
    fontSize: 13
  },
  childValue: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: '#00A550',
    textAlign: 'center'
  },

  buttonPressed: {
    alignSelf: 'stretch',
    backgroundColor: '#00A550',
    justifyContent: 'center',
    height: 50,
    margin: 10,
    opacity: 0.5
  },

  buttonUnpressed: {    
    alignSelf: 'stretch',
    backgroundColor: '#00A550',
    justifyContent: 'center',
    height: 50,
    margin: 10
  },

  buttonText: {
    color: 'white', 
    textAlign: 'center',
    fontSize: 20
  },

  selectableAnswer: {
    flex: 1,
    justifyContent: 'center', 
    backgroundColor: '#fff'
  },

  selectableAnswerText: {
    color: 'gray', 
    fontSize: 20, 
    textAlign: 'center'
  },

  modalOptionText: {

    padding: 10, 
    textAlign: 'center', 
    fontSize: 18, 
    backgroundColor: '#fff',
    color: '#00A550',
    fontWeight: 'bold'
  }
});

export default styles;