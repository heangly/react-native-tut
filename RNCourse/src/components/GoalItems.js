import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItems = ({ courseGoals, onDeleteItem }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => onDeleteItem(item.id)}
        android_ripple={{ color: '#dddddd' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.goalItemContainer}>
          <Text style={styles.goalItem}>{item.text}</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={courseGoals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default GoalItems

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    marginTop: 30
  },

  goalItemContainer: {
    margin: 8,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#654da2'
  },

  goalItem: {
    color: 'white',
    fontSize: 18
  },

  pressedItem: {
    opacity: 0.5
  }
})
