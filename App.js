import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalTest] = useState('');
  const [couresGoal, setCourseGoal] = useState([]);

  function goalInputHangler(enterTest) {
    setEnteredGoalTest(enterTest);
  }

  function addGoalHangler() {
    setCourseGoal((currentCourseGoal) => [...currentCourseGoal, enteredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.testInput}
          placeholder='Your Course goal'
          onChangeText={goalInputHangler}
        />
        <Button title='ADD GOAL' onPress={addGoalHangler} />
      </View>
      <View style={styles.goalsContainer}>
        {couresGoal.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  testInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 9,
  },
  goalsContainer: {
    flex: 5,
  },
});
