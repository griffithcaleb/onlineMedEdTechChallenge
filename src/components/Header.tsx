import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { headerStyles as styles } from '../styles/header';


const headerText = 'Online Med Ed: To-Dos';

export const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{headerText}</Text>
    </View>
  );
};

