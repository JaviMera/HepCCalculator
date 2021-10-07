import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

export default class MeldInfoScene extends Component {

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
                        <Text style={{color: '#00A550', fontSize: 15, paddingLeft: 15, paddingTop: 15}}>
                            3.8[Ln Serum Bilirubin(mg/Dl)] +
                        </Text>
                        <Text style={{color: '#00A550', fontSize: 15, paddingLeft: 15, paddingTop: 5}}>
                            11.2[Ln INR] +
                        </Text>
                        <Text style={{color: '#00A550', fontSize: 15, paddingLeft: 15, paddingTop: 5}}>
                            9.6[Ln Serum Creatinine(mg/dL)] +
                        </Text>
                        <Text style={{color: '#00A550', fontSize: 15, paddingLeft: 15, paddingTop: 5, paddingBottom: 15}}>
                            6.4
                        </Text>
                        <Text style={{backgroundColor: '#81C99C', fontSize: 18, color: 'white', padding: 15}}>
                            Explanation of Result:
                        </Text>
                        <View style={{flexDirection: 'column', margin: 5}}>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, color: '#00A550', fontWeight: 'bold'}}>MELD Score</Text>
                                <Text style={{flex: 1, color: '#00A550', fontWeight: 'bold'}}>3-Month Mortality Probability</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>40</Text>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>71.3% mortality</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>30-39</Text>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>52.6% mortality</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>20-29</Text>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>19.6% mortality</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>10-19</Text>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>6.0% mortality</Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>9 or less</Text>
                                <Text style={{flex: 1, color: '#00A550', fontSize: 13}}>1.9% mortality</Text>
                            </View>
                        </View>
                        <Text style={{backgroundColor: '#81C99C', fontSize: 18, color: 'white', padding: 15}}>
                            Sources:
                        </Text>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, textAlign: 'center', color: '#00A550'}}>1</Text>
                                <Text style={{flex: 10, color: '#00A550'}}>
                                    Kamath PS, Kim WR; Advanced Liver Disease Study Group. The model for end-stage liver disease (MELD). Hepatology. 2007;45:797-805.
                                </Text>
                            </View>                                    
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}