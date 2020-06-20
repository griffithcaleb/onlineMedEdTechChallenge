import React, { FC, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import  HamburgerMenu from 'react-hamburger-menu';

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgb(79, 204, 222)',
    position: 'sticky' as any,
    top: 0,
    zIndex: 99,
    borderBottomColor: 'black',
    borderBottomWidth: 5
  },
  titleStyle: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
})

export const Header: FC = () => {
   const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Online Med Ed: To-Dos</Text>
      <HamburgerMenu
        isOpen={openMenu}
        menuClicked={() => setOpenMenu(!openMenu)}
        width={20}
        height={20}
        strokeWidth={2}
        color='white'
        borderRadius={100}
        animationDuration={0.5}
      />
    </View>
  )
}