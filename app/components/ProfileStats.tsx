import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../theme"
import { Text } from "./Text"

export interface ProfileStatsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ProfileStats = observer(function ProfileStats(props: ProfileStatsProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <Text style={$text}>Hello</Text>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
