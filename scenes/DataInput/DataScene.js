import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Picker,
  Button,
  SafeAreaView
} from 'react-native';

import Modal from 'react-native-modal'
import {Actions} from 'react-native-router-flux';
import ApriIndex from './apriindex.js';
import Fibrosis4 from './fibrosis4.js';
import Meld from './meld.js';
import ChildPughScore from './childpugh.js';

import styles from './styles';

const asciteValues = ['NONE', 'MILD', 'SEVERE'];
const encephalopathyValues = ['NONE', 'GRADE I or II', 'GRADE III or IV'];
const dialysisValues = ['YES', 'NO'];

export default class DataScene extends Component {

    constructor(props) {

      super(props);
      this.state = {

        ascitesModalVisible: false,
        encephalopathyModalVisible: false,
        dialysisModalVisible: false,
        age: undefined,
        ast: undefined,
        ulnAst: undefined,
        plateletCount: undefined,
        alt: undefined,
        creatinine: undefined,
        bilirubin: undefined,
        albumin: undefined,
        inr: undefined,
        selectedAscites: 0,
        selectedEncephalopathy: 0,
        selectedDialysis: 1,
        btnPressed: false
      };
    }

    componentDidMount() {

      this.setState(this.state);
    }  

    setAscitesModalVisible(visible) {
      this.setState({ascitesModalVisible: visible});
    }

    setEncephalopathyModalVisible(visible) {
      this.setState({encephalopathyModalVisible: visible})
    }

    setDialysisModalVisible(visible) {
      this.setState({dialysisModalVisible: visible})
    }

    _setAboutModalVisibility(visible) {

      this.setState({aboutModalVisible: isVisible});
    }

  render() {
  
    return (
      <SafeAreaView style={styles.container}>    
       <Modal isVisible={this.state.ascitesModalVisible}>
          <View style={{backgroundColor: '#CBE7D2'}}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text
                  style={styles.modalOptionText}
                  onPress={() => {
                    this.setState({selectedAscites: 0});
                    this.setAscitesModalVisible(false);
                  }}>
                    NONE
                  </Text>
                  <Text
                  style={styles.modalOptionText}
                  onPress={() => {
                    this.setState({selectedAscites: 1});
                    this.setAscitesModalVisible(false);
                  }}>
                    MILD
                  </Text>
                  <Text
                  style={styles.modalOptionText}
                  onPress={() => {
                    this.setState({selectedAscites: 2});
                    this.setAscitesModalVisible(false);
                  }}>
                    SEVERE
                  </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={this.state.encephalopathyModalVisible}>
          <View style={{backgroundColor: '#CBE7D2'}}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text
                  style={styles.modalOptionText}
                  onPress={() => {
                    this.setState({selectedEncephalopathy: 0});
                    this.setEncephalopathyModalVisible(false);
                  }}>
                    NONE
                  </Text>
                  <Text
                  style={styles.modalOptionText}
                  onPress={() => {
                    this.setState({selectedEncephalopathy: 1});
                    this.setEncephalopathyModalVisible(false);
                  }}>
                    GRADE I OR II
                  </Text>
                  <Text
                  style={styles.modalOptionText}
                  onPress={() => {
                    this.setState({selectedEncephalopathy: 2});
                    this.setEncephalopathyModalVisible(false);
                  }}>
                    GRADE III or IV
                  </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={this.state.dialysisModalVisible}>
          <View style={{backgroundColor: '#CBE7D2'}}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text
                 style={styles.modalOptionText}
                  onPress={() => {
                    this.setState({selectedDialysis: 0});
                    this.setState({creatinine: 4});
                    this.setDialysisModalVisible(false);
                  }}>
                    YES
                  </Text>
                  <Text
                  style={styles.modalOptionText}
                  onPress={() => {
                    this.setState({selectedDialysis: 1});
                    this.setDialysisModalVisible(false);
                  }}>
                    NO
                  </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <ScrollView style={styles.scrollview}>
          <View style={{flex: 3, flexDirection: 'column'}}>
             <View style={styles.childContainer}>
                <Text 
                    style={styles.childText}>  
                        AGE           
                </Text>
                <TextInput 
                    ref='ageInput'
                    placeholder='Enter Number...'
                    returnKeyType='next'
                    blurOnSubmit={false}
                    style={styles.childValue}
                    keyboardType='numeric'
                    onChangeText={(value) => {
                      this.setState({age: parseInt(value)});
                    }} 
                    onSubmitEditing={() => this.refs.astInput.focus()}
                />
            </View>  
             <View style={styles.childContainer}>
                <Text 
                    style={styles.childText}>  
                        AST / SGOT (IU/L)        
                </Text>
                <TextInput 
                    ref='astInput'
                    placeholder='Enter Number...'
                    returnKeyType='next'
                    blurOnSubmit={false}
                    style={styles.childValue}
                    keyboardType='numeric'
                    onChangeText={(value) => {
                      this.setState({ast: parseFloat(value)});
                    }} 
                    onSubmitEditing={() => this.refs.ulnAstInput.focus()}
                />
            </View> 

             <View style={styles.childContainer}>
                <Text 
                    style={styles.childText}>  
                        ULN AST / SGOT(IU/l)        
                </Text>
                <TextInput 
                    ref='ulnAstInput'
                    placeholder='Enter Number...'
                    returnKeyType='next'
                    blurOnSubmit={false}
                    style={styles.childValue}
                    keyboardType='numeric'
                    onChangeText={(value) => {
                      this.setState({ulnAst: parseFloat(value)});
                    }} 
                    onSubmitEditing={() => this.refs.plateletCountInput.focus()}
                />
            </View>
            <View style={styles.childContainer}>
              <Text 
                  style={styles.childText}>  
                      PLATELET COUNT (10/L)        
              </Text>
              <TextInput 
                  ref='plateletCountInput'
                  placeholder='Enter Number...'
                  returnKeyType='next'
                  blurOnSubmit={false}
                  style={styles.childValue}
                  keyboardType='numeric'
                  onChangeText={(value) => {
                    this.setState({plateletCount: parseInt(value)});
                  }} 
                  onSubmitEditing={() => this.refs.altInput.focus()}
              />
            </View>        
            <View style={styles.childContainer}>
              <Text 
                  style={styles.childText}>  
                      ALT        
              </Text>
              <TextInput 
                  ref='altInput'
                  placeholder='Enter Number...'
                  returnKeyType='next'
                  blurOnSubmit={false}
                  style={styles.childValue}
                  keyboardType='numeric'
                  onChangeText={(value) => {
                    this.setState({alt: parseFloat(value)});
                  }} 
                  onSubmitEditing={() => this.refs.creatinineInput.focus()}
              />
            </View>
            <View style={styles.childContainer}>
              <Text 
                  style={styles.childText}>  
                      CREATININE
              </Text>
              <TextInput 
                  ref='creatinineInput'
                  placeholder='Enter Number...'
                  returnKeyType='next'
                  blurOnSubmit={false}
                  style={styles.childValue}
                  keyboardType='numeric'
                  onChangeText={(value) => {
                    this.setState({creatinine: parseFloat(value)})
                  }} 
                  onSubmitEditing={() => this.refs.bilirubinInput.focus()}
              />
            </View>
            <View style={styles.childContainer}>
              <Text 
                  style={styles.childText}>  
                      TOTAL BILIRUBIN
              </Text>
              <TextInput 
                  ref='bilirubinInput'
                  placeholder='Enter Number...'
                  returnKeyType='next'
                  blurOnSubmit={false}
                  style={styles.childValue}
                  keyboardType='numeric'
                  onChangeText={(value) => {
                    this.setState({bilirubin: parseFloat(value)});
                  }} 
                  onSubmitEditing={() => this.refs.albuminInput.focus()}
              />
            </View>
            <View style={styles.childContainer}>
              <Text 
                  style={styles.childText}>  
                      SERUM ALBUMIN
              </Text>
              <TextInput 
                  ref='albuminInput'
                  placeholder='Enter Number...'
                  returnKeyType='next'
                  blurOnSubmit={false}
                  style={styles.childValue}
                  keyboardType='numeric'
                  onChangeText={(value) => {
                    this.setState({albumin: parseFloat(value)});
                  }} 
                  onSubmitEditing={() => this.refs.inrInput.focus()}
              />
            </View>
            <View style={styles.childContainer}>
              <Text 
                  style={styles.childText}>  
                      INR
              </Text>
              <TextInput 
                  ref='inrInput'
                  placeholder='Enter Number...'
                  returnKeyType='next'
                  blurOnSubmit={true}
                  style={styles.childValue}
                  keyboardType='numeric'
                  onChangeText={(value) => {
                    this.setState({inr: parseFloat(value)});
                  }} 
              />
            </View>
            <View style={styles.childContainer}>
              <Text 
                  style={styles.childText}>  
                      ASCITES
              </Text>
              <TouchableHighlight
                style={styles.selectableAnswer}
                onPress={() => {

                      this.setAscitesModalVisible(true);
                  }}
                >
                  <Text 
                    style={styles.selectableAnswerText}>
                       {asciteValues[this.state.selectedAscites]}
                  </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.childContainer}>
              <Text 
                  style={styles.childText}>  
                      ENCEPHALOPATHY
              </Text>
              <TouchableHighlight
                style={styles.selectableAnswer}
                onPress={() => {

                      this.setEncephalopathyModalVisible(true);
                  }}
                >
                  <Text 
                    style={styles.selectableAnswerText}>
                       {encephalopathyValues[this.state.selectedEncephalopathy]}
                  </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.childContainer}>
              <Text 
                  style={styles.childText}>  
                      DIALYSIS
              </Text>
              <TouchableHighlight
                style={styles.selectableAnswer}
                onPress={() => {

                      this.setDialysisModalVisible(true);
                  }}
                >
                  <Text 
                    style={styles.selectableAnswerText}>
                       {dialysisValues[this.state.selectedDialysis]}
                  </Text>
                </TouchableHighlight>
            </View>
          </View>
        </ScrollView> 
         <TouchableHighlight
          underlayColor="#37B876"
          style={styles.buttonUnpressed}
          onPress={() => {

                const apriFormula = new ApriIndex(this.state);            
                const childPughFormula = new ChildPughScore(this.state);
                const meldFormula = new Meld(this.state);
                const fibrosis4Formula = new Fibrosis4(this.state);

                Actions.results({
                  apriIndex: apriFormula.calculate(),
                  childPugh: childPughFormula.calculate(),
                  meld: meldFormula.calculate(),
                  fibrosis4: fibrosis4Formula.calculate()
                });
          }}
        >
            <Text style={styles.buttonText}>
                CALCULATE
            </Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}