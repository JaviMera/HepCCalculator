import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

export default class ApriIndexInfoScene extends Component {

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
                        <Text style={{color: '#00A550', fontSize: 15, padding: 15}}>
                            [(AST / ULN AST) * 100] / Platelet Count(10e9/L)
                        </Text>
                        <Text style={{backgroundColor: '#81C99C', fontSize: 18, color: 'white', padding: 15}}>
                            Explanation of Result:
                        </Text>
                        <Text style={{color: '#00A550', padding: 10}}>
                            In a meta-analysis of 40 studies, investigators concluded that an APRI score greater than 1.0 had a sensitivity of 76% and specificity of 72% for predicting cirrhosis. In addition, they concluded that APRI score greater than 0.7 had a sensitivity of 77% and specificity of 72% for predicting significant hepatic fibrosis.1
                            For detection of cirrhosis, using an APRI cutoff score of 2.0 was more specific (91%) but less sensitive (46%). The lower the APRI score (less than 0.5), the greater the negative predictive value (and ability to rule out cirrhosis) and the higher the value (greater than 1.5) the greater the positive predictive value (and ability to rule in cirrhosis); midrange values are less helpful. The APRI alone is likely not sufficiently sensitive to rule out significant disease. Some evidence suggests that the use of multiple indices in combination (such as APRI plus FibroTest) or an algorithmic approach may result in higher diagnostic accuracy than using APRI alone.
                        </Text>
                        <Text style={{backgroundColor: '#81C99C', fontSize: 18, color: 'white', padding: 15}}>
                            Sources:
                        </Text>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, textAlign: 'center', color: '#00A550'}}>1</Text>
                                <Text style={{flex: 10, color: '#00A550'}}>
                                    Lin ZH, Xin YN, Dong QJ, et al. Performance of the aspartate aminotransferase-to-platelet ratio index for the staging of hepatitis C-related fibrosis: an updated meta-analysis. Hepatology. 2011;53:726-36.
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, textAlign: 'center', color: '#00A550'}}>2</Text>
                                <Text style={{flex: 10, color: '#00A550'}}>
                                    Chou R, Wasson N. Blood tests to diagnose fibrosis or cirrhosis in patients with chronic hepatitis C virus infection: a systematic review. Ann Intern Med. 2013;158:807-20.
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}