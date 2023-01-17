import * as React from "react"
import { Image, ImageStyle, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../theme"
import { Text } from "./Text"

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
  margin: 30,
}

const $name: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}

const $role: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}

const $location: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}

const $avatar: ImageStyle = {
  width: 150,
  height: 150,
  borderRadius: 75,
}

const $imageContainer: ViewStyle = {
  width: 170,
  height: 170,
  borderRadius: 85,
  borderWidth: 2,
  borderColor: 'cyan',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'grey',
}
