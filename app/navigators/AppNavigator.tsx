/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import {
  MessagesScreen,
  UserProfileScreen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { colors } from "../theme"
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Profile: undefined
  Messages: undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Drawer = createDrawerNavigator<AppStackParamList>()

const AppDrawer = observer(function AppDrawer() {

  const screenOptions = {
    headerShown: true,
    drawerActiveBackgroundColor: colors.primary,
    drawerActiveTintColor: colors.white,

    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
  }

  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
    >
          <Drawer.Screen
            options={{
              headerRight: () => (
                <Icon
                  name={'settings-outline'}
                  size={25}
                  color={colors.white}
                  style={{marginHorizontal: 10}}
                />
              ),
            }}
            name="Profile"
            component={UserProfileScreen} />
          <Drawer.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              headerRight: () => (
                <Icon
                  name={'search'}
                  size={25}
                  color={colors.white}
                  style={{marginHorizontal: 10}}
                />
              ),
            }}
          />
    </Drawer.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppDrawer />
    </NavigationContainer>
  )
})
