import React, { Component } from 'react';
import { Text } from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import DataScene from './scenes/DataInput/DataScene.js';
import ResultsScene from './scenes/Results/ResultsScene.js';
import AboutScene from './scenes/About/AboutScene.js';
import ApriIndexInfoScene from './scenes/Results/ApriIndexInfoScene.js';
import ChildPughInfoScene from './scenes/Results/ChildPughInfoScene.js';
import FibrosisInfoScene from './scenes/Results/FibrosisInfoScene.js';
import MeldInfoScene from './scenes/Results/MeldInfoScene.js';

export default class App extends React.Component {

 render(){

   return (
    <Router sceneStyle={{paddingTop: 64}}>
      <Scene key="root">
        <Scene 
          key="data" 
          component={DataScene} 
          title='HCV Score Calculator' 
          titleStyle={{color: '#00A550'}}
          initial={true}
          renderBackButton={() => null}
          renderRightButton={() => 
            <Text
              style={{color: '#00A550', marginRight: 10}}
              onPress={() => Actions.about()}
            >
              About
            </Text>
          } 
        />
        <Scene 
          key="results" 
          component={ResultsScene} 
          title='HCV Score Calculator'  
          titleStyle={{color: '#00A550'}} />        
        
        <Scene 
          key="apri"
          titleStyle={{color: '#00A550'}}
          component={ApriIndexInfoScene}
          title='APRI Index' />

        <Scene 
          key="childpugh"
          title="Child Pugh Score"
          titleStyle={{color: '#00A550'}}
          component={ChildPughInfoScene} />

        <Scene 
          key="fibrosis"
          title="FIB-4"
          titleStyle={{color: '#00A550'}}
          component={FibrosisInfoScene} />

        <Scene 
          key="meld"
          title="MELD"
          titleStyle={{color: '#00A550'}}
          component={MeldInfoScene} />

        <Scene 
          key="about"
          titleStyle={{color: '#00A550'}}
          component={AboutScene} 
          title='About' />

      </Scene>
    </Router>);
 }
}
