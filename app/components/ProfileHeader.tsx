import * as React from "react"
import { Dimensions, Image, ImageStyle, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../theme"
import { Text } from "./Text"
import { useStores } from "../models"

export interface ProfileHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  name: string,
  role: string,
  avatar: string,
  location: string,
}

/**
 * Describe your component here
 */
export const ProfileHeader = observer(function ProfileHeader(props: ProfileHeaderProps) {
  const { style, name, role, avatar, location } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <View style={$imageContainer}>
        <Image source={{uri: avatar}} style={$avatar} />
      </View>
      <Text style={$name}>{name}</Text>
      <Text style={$role}>{role}</Text>
      <Text style={$location}>{location}</Text>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  padding: 15,
  backgroundColor: colors.backgroundSecondary,
}

const $name: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 25,
  color: colors.white,
  marginTop: 5,
}

const $role: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.dim,
  marginTop: 5,
}

const $location: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 20,
  color: colors.palette.primary500,
  marginTop: 5,
}

const $avatar: ImageStyle = {
  width: Dimensions.get('window').width * 0.4,
  height: Dimensions.get('window').width * 0.4,
  borderRadius: Dimensions.get('window').width * 0.2,
}

const $imageContainer: ViewStyle = {
  width: Dimensions.get('window').width * 0.45,
  height: Dimensions.get('window').width * 0.45,
  borderRadius: Dimensions.get('window').width * 0.225,
  borderWidth: 2,
  borderColor: colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.background,
  marginVertical: 5,

}
