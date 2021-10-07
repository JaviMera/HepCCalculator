import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {

        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#CBE7D2',
        alignSelf: 'stretch'
    },

    sceneTitle: {

        fontSize: 30, 
        color: "#00A550", 
        alignSelf: 'center', 
        padding: 15
        
    },

    sceneSubTitle: {

        fontSize: 14, 
        color: "#808284", 
        alignSelf: 'center',
        padding: 15
    },

    formulaText: {
        flex: 1, 
        fontSize: 16,
        backgroundColor: '#81C99C',
        color: "white", 
        textAlign: 'right',
        textAlignVertical: 'center',
        padding: 10
    },

    resultContainer: {

        margin: 10,
        flexDirection: 'row'
    },

    resultText: {

        flex: 1, 
        backgroundColor: "white", 
        color: '#00A550',
        textAlign: 'center', 
        padding: 10
    },

    childPugeFormulaTitle: {

        flex: 1, 
        color: '#00A550', 
        padding: 5, 
        fontWeight: 'bold',
        textAlign: 'center'
    },

    childPughFormulaPoints: {

        flex: 1,
        textAlign: 'center', 
        color: '#00A550', 
        padding: 5
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
});

export default styles;