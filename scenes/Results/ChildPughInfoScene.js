import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';

export default class ChildPughInfoScene extends Component {

    constructor(props){

        super(props);
    }

    render(){

        return(
            <SafeAreaView>

                <ScrollView>
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', marginTop: 20}}>
                    <Text style={{backgroundColor: '#81C99C', fontSize: 18, color: 'white', padding: 15}}>
                        Formula:
                    </Text>
                    <View style={{alignItems: 'stretch', flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{flex: 1}}>                                        
                            </Text>
                            <Text style={styles.childPugeFormulaTitle}>1 Point</Text>
                            <Text style={styles.childPugeFormulaTitle}>2 Point</Text>
                            <Text style={styles.childPugeFormulaTitle}>3 Point</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                            <Text style={styles.childPughFormulaPoints}>Total Bilirubin</Text>
                            <Text style={styles.childPughFormulaPoints}>&lt; 2</Text>
                            <Text style={styles.childPughFormulaPoints}>2 - 3</Text>
                            <Text style={styles.childPughFormulaPoints}>&gt; 3</Text>                                        
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                            <Text style={styles.childPughFormulaPoints}>Serum Albumin</Text>
                            <Text style={styles.childPughFormulaPoints}>&gt; 3.5</Text>
                            <Text style={styles.childPughFormulaPoints}>2.8 - 3.5</Text>
                            <Text style={styles.childPughFormulaPoints}>&lt; 2.8</Text>                                        
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                            <Text style={styles.childPughFormulaPoints}>INR</Text>
                            <Text style={styles.childPughFormulaPoints}>&lt; 1.7</Text>
                            <Text style={styles.childPughFormulaPoints}>1.7 - 2.20</Text>
                            <Text style={styles.childPughFormulaPoints}>&gt; 2.20</Text>                                        
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                            <Text style={styles.childPughFormulaPoints}>Ascites</Text>
                            <Text style={styles.childPughFormulaPoints}>None</Text>
                            <Text style={styles.childPughFormulaPoints}>Mild</Text>
                            <Text style={styles.childPughFormulaPoints}>Severe</Text>                                        
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                            <Text style={styles.childPughFormulaPoints}>Hepatic Encephalopathy</Text>
                            <Text style={styles.childPughFormulaPoints}>None</Text>
                            <Text style={styles.childPughFormulaPoints}>Grade I-II</Text>
                            <Text style={styles.childPughFormulaPoints}>Grade III-IV</Text>                                        
                        </View>
                    </View>
                    <Text style={{backgroundColor: '#81C99C', fontSize: 18, color: 'white', padding: 15}}>
                        Explanation of Result:
                    </Text>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                            <Text style={{flex: 1, color: '#00A550', textAlign: 'center'}}>Class A</Text>
                            <Text style={{flex: 2, color: '#00A550'}}>Least severe liver disease</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                            <Text style={{flex: 1, color: '#00A550', textAlign: 'center'}}>Class B</Text>
                            <Text style={{flex: 2, color: '#00A550'}}>Moderately severe liver disease</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                            <Text style={{flex: 1, color: '#00A550', textAlign: 'center'}}>Class C</Text>
                            <Text style={{flex: 2, color: '#00A550'}}>Most severe liver disease</Text>
                        </View>
                    </View>
                    <Text style={{backgroundColor: '#81C99C', fontSize: 18, color: 'white', padding: 15}}>
                        Sources:
                    </Text>
                    <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row', margin: 5}}>
                            <Text style={{flex: 1, textAlign: 'center', color: '#00A550'}}>1</Text>
                            <Text style={{flex: 10, color: '#00A550'}}>
                                Cockcroft DW, Gault MH. Prediction of creatinine clearance from serum creatinine. Nephron. 1976;16:31-41.
                            </Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}