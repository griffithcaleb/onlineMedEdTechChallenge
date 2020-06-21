import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { footerStyles as styles } from '../styles/footer';


const footerText = 'Caleb Griffith 2020';

export const Footer: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{footerText}</Text>
    </View>
  );
}