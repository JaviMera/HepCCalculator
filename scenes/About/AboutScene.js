import React, {Component} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';

export default class AboutScene extends Component {

    render() {
        return(
            <SafeAreaView>
                <ScrollView >
                    <View style={{flex: 1, backgroundColor: 'white', marginTop: 20}}>
                        <Text style={{margin: 10, lineHeight: 20, color: '#81C99C', fontWeight: 'bold'}}>
                            The use of this application is not intended for the general public.
                            The use in intended for medical professionals, such as physicians, nurse practitioners, physician assistants and pharmacists.
                            The contents of this application are for informational and educational purposes only.
                            This information should not be used for the diagnosis or treatment of any health problem or disease.
                            This information is not intended to substitute for professional medical advice, diagnosis, treatment, clinical judgment or guide individual patient care in any form or manner.
                            {"\n"}{"\n"}
                            The User is hereby notified that the information contained herein may not meet the user's general or specific needs.
                            The User is advised that, although the information is derived from medical research and literature we cannot guarantee its correctness, comprehensiveness or currency.
                            The User of this software assumes sole responsibility for any decisions made or actions taken based on the information contained in the HCV Score Calculator.
                            {"\n"}{"\n"}
                            The HCV Score Calculator’s authors nor any other party involved in the preparation, publication or distribution of the HCV Score Calculator Application shall be liable for any special, consequential, or exemplary damages resulting in whole or part from any User's use of or reliance upon this system and the information contained within.
                            {"\n"}{"\n"}
                            The authors of the HCV Score Calculator Application disclaims all warranties regarding such information whether express or implied, including any warranty as to the quality, accuracy, currency or suitability of this information for any particular purpose.
                            {"\n"}{"\n"}
                            The HCV Score Calculator Application, authors, developers and distributors assume no responsibility for any erroneous results due to defects in the system. Access to and use of the HCV Score Calculator Application is provided without warranty of merchantability or fitness for any particular purpose or any other warranty, express or implied. In no event shall the Authors, Developers and Distributors of the HCV Score Calculator be liable for special, direct, indirect or consequential damages, charges, claims, costs, demands, losses fees or expenses of any nature or kind arising from use of the HCV Score Calculator Application.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}