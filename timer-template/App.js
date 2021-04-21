import  React, {useEffect, useState, useRef} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity ,TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';


export default function App() {

const [onCount, setOnCount] = useState(false)
const [finalScore, setFinalScore] = useState(0)
const [scoreA, setScoreA] = useState(0)
const [scoreB, setScoreB] = useState(0)
const [scoreC, setScoreC] = useState(0)
const proposedScoreA = useRef(scoreA);
const proposedScoreB = useRef(scoreB);
const proposedScoreC = useRef(scoreC);
proposedScoreA.current=scoreA
proposedScoreB.current=scoreB
proposedScoreC.current=scoreC

const onPressA = () => {
  setOnCount(true)
  setScoreA(prev => prev+1)
 }
const onPressB = () => {
    setOnCount(true)
  setScoreB(prev => prev+1)
}
const onPressC = () => {
    setOnCount(true)
  setScoreC(prev => prev+1)
}
const plusScore = () => {
 setFinalScore(prev => prev+1)
}
const minusScore = () => {
  setFinalScore(prev => prev-1)
}

const check = () => {
  setTimeout(()=>{
    
    const scoreArray = [proposedScoreA.current, proposedScoreB.current, proposedScoreC.current]
    console.log(scoreArray)
    const confirmedScore = Math.min.apply(null, scoreArray);
    console.log('confirmedScore is :',confirmedScore)
    setFinalScore(prev => prev + confirmedScore)
    setScoreA(0)
    setScoreB(0)
    setScoreC(0)
    setOnCount(false)

  },3000)
}

useEffect(()=>{
onCount && check();

},[onCount])


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <TouchableOpacity  style={styles.button}>
         <Button title={`${finalScore}`}  color='orange'/>
      </TouchableOpacity >
      <TouchableOpacity  style={styles.button}>
         <Button title={`1점 A: ${scoreA} `}  onPress={() => onPressA()} />
      </TouchableOpacity >
      <TouchableOpacity  style={styles.button}>
         <Button title={`1점 B: ${scoreB} `}  onPress={() => onPressB()} />
      </TouchableOpacity >
      <TouchableOpacity  style={styles.button}>
         <Button title={`1점 C: ${scoreC} `}  onPress={() => onPressC()} />
      </TouchableOpacity >

      <View style={styles.controlContainer}>
        <TouchableOpacity  style={styles.button1}>
          <Button title="1점 추가" color="red"  onPress={() => plusScore()} />
        </TouchableOpacity >
        <TouchableOpacity  style={styles.button1}>
          <Button title="1점 감점" color="red" onPress={() => minusScore()} />
        </TouchableOpacity >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    margin: 10
  },
  button1: {
  padding:10,
  width: '50%'

  },
  controlContainer:{
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
  }
});
