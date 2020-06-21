import React, { FC } from "react";
import { Text, View } from "react-native";
import { listStyles as styles } from '../styles/list'

interface TodoListItemContentProp {
  description: string;
  name: string;
  targetCompletionDate: string
}

export const TodoListItemContent: FC<TodoListItemContentProp> = (
  {description, name, targetCompletionDate}) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.descriptorHeader}>{'name:'}</Text>
      <Text style={styles.descriptorText} numberOfLines={1}>{name}</Text>
      <Text style={styles.descriptorHeader}>{'description:'}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptorText}>
          {description}
        </Text>
      </View>
      <Text style={styles.descriptorHeader}>{'complete by:'}</Text>
      <Text style={styles.descriptorText}>
        {targetCompletionDate}
      </Text>
    </View>
  )
}