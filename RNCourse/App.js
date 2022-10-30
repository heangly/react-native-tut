import { useState } from 'react'
import { Button, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import GoalInput from './src/components/GoalInput'
import GoalItems from './src/components/GoalItems'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const onShowModal = () => {
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  const onDeleteItem = (id) => {
    setCourseGoals((prevState) =>
      prevState.filter((courseGoal) => courseGoal.id !== id)
    )
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={styles.appContainer}>
        <View style={styles.button}>
          <Button onPress={onShowModal} title='Add New Goal' color='white' />
        </View>

        {showModal && (
          <GoalInput
            showModal={showModal}
            setCourseGoals={setCourseGoals}
            onCloseModal={onCloseModal}
          />
        )}
        <GoalItems courseGoals={courseGoals} onDeleteItem={onDeleteItem} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },

  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 10
  }
})
