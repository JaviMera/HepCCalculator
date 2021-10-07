import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

export default class FibrosisInfoScene extends Component {

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
                            (AGE * AST) / (Platelet Count * (SQRT(ALT)))
                        </Text>
                        <Text style={{backgroundColor: '#81C99C', fontSize: 18, color: 'white', padding: 15}}>
                            Explanation of Result:
                        </Text>
                        <Text style={{color: '#00A550', padding: 10}}>
                            Using a lower cutoff value of 1.45, a FIB-4 score &lt;1.45 had a negative predictive value of 90% for advanced fibrosis (Ishak fibrosis score 4-6 which includes early bridging fibrosis to cirrhosis). In contrast, a FIB-4 &gt;3.25 would have a 97% specificity and a positive predictive value of 65% for advanced fibrosis. In the patient cohort in which this formula was first validated, at least 70% patients had values &lt;1.45 or &gt;3.25. Authors argued that these individuals could potentially have avoided liver biopsy with an overall accuracy of 86%.
                        </Text>
                        <Text style={{backgroundColor: '#81C99C', fontSize: 18, color: 'white', padding: 15}}>
                            Sources:
                        </Text>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', margin: 5}}>
                                <Text style={{flex: 1, textAlign: 'center', color: '#00A550'}}>1</Text>
                                <Text style={{flex: 10, color: '#00A550'}}>
                                    Sterling RK, Lissen E, Clumeck N, et. al. Development of a simple noninvasive index to predict significant fibrosis patients with HIV/HCV co-infection. Hepatology 2006;43:1317-1325.
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}