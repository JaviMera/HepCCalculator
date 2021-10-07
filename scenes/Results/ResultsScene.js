import React, {Component} from 'react';
import {
    View, 
    Text,
    Button,
    TouchableWithoutFeedback,
    TouchableHighlight,
    ScrollView,
    SafeAreaView
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import styles from './styles';

export default class ResultsScene extends Component {

    constructor(props) {

        super(props);
    }

    _childPughLetter(childResult) {

        if(childResult <= 6)
            return childResult +=  '(A)';
        else if(childResult <= 9) {
            return childResult +=  '(B)';
        }
        else
            return childResult +=  '(C)';
    }   

    render() {        
        return(
            <SafeAreaView style={styles.container}>                                                       
                <View style={{flex: 3, marginTop: 20}}>
                    <View style={styles.resultContainer}>
                        <Text style={styles.formulaText}>
                            APRI INDEX
                        </Text>
                        <Text 
                            style={styles.resultText}
                            onPress = {() => Actions.apri()}>
                            {isNaN(this.props.apriIndex) ? "NOT ENOUGH DATA PROVIDED" : this.props.apriIndex}
                        </Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <Text style={styles.formulaText}>
                            CHILD PUGH
                        </Text>
                        <Text style={styles.resultText}
                            onPress={() => Actions.childpugh()}>
                            {isNaN(this.props.childPugh) 
                                ? "NOT ENOUGH DATA PROVIDED" 
                                : this._childPughLetter(this.props.childPugh)}
                        </Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <Text style={styles.formulaText}>
                            FIB-4
                        </Text>
                        <Text style={styles.resultText}
                            onPress={() => Actions.fibrosis()}>
                            {isNaN(this.props.fibrosis4) ? "NOT ENOUGH DATA PROVIDED" : this.props.fibrosis4}
                        </Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <Text style={styles.formulaText}>
                            MELD
                        </Text>
                        <Text style={styles.resultText}
                            onPress={() => Actions.meld()}>
                            {isNaN(this.props.meld) ? "NOT ENOUGH DATA PROVIDED" : this.props.meld}
                        </Text>
                    </View>
                    <Text style={styles.sceneSubTitle}>
                        tap result for more information
                    </Text>
                </View>
                
                <TouchableHighlight
                underlayColor="#37B876"
                style={styles.buttonUnpressed}
                onPress={() => {

                        Actions.data();
                }}
                >
                    <Text style={styles.buttonText}>
                        RESET
                    </Text>
                </TouchableHighlight>
            </SafeAreaView>
        );
    }
}