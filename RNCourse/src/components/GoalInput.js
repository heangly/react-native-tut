import { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'

const GoalInput = ({ showModal, setCourseGoals, onCloseModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const onGoalInputChange = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const onAddGoal = () => {
    if (enteredGoalText) {
      setCourseGoals((prevState) => {
        return [
          { id: Math.random().toString(), text: enteredGoalText },
          ...prevState
        ]
      })
    }

    onCloseModal()
    setEnteredGoalText('')
  }

  const onCancel = () => {
    onCloseModal()
  }

  return (
    <Modal
      visible={showModal}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onCancel}
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/goal.png')}
        />

        <TextInput
          value={enteredGoalText}
          onChangeText={onGoalInputChange}
          style={styles.textInput}
          placeholder='Your course goals!'
          autoCapitalize='none'
        />

        <View style={styles.buttonContainer}>
          <View style={[styles.button, styles.addButton]}>
            <Button onPress={onAddGoal} title='Add Goal' color='white' />
          </View>

          <View style={[styles.button, styles.cancelButton]}>
            <Button onPress={onCancel} title='Cancel' color='white' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
    paddingBottom: 200
  },

  image: {
    width: 100,
    height: 100,
    margin: 20
  },

  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 14,
    marginVertical: 20,
    color: 'white',
    fontSize: 18,
    borderRadius: 8
  },

  buttonContainer: {
    flexDirection: 'row'
  },

  button: {
    width: '40%',
    marginHorizontal: 8,
    borderRadius: 8
  },

  addButton: {
    backgroundColor: 'blue'
  },

  cancelButton: {
    backgroundColor: 'red'
  }
})
