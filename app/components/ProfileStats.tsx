import * as React from "react"
import { Dimensions, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../theme"
import { Text } from "./Text"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useStores } from "../models"
import { useEffect } from "react"

export interface ProfileStatsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

export interface IStats {
  icon: string
  badge: number
  value: number
  label: string
}

/**
 * Describe your component here
 */
export const ProfileStats = observer(function ProfileStats(props: ProfileStatsProps) {
  const { style } = props
  const $styles = [$container, style]

  const Store = useStores();

  useEffect(() => {
    Store.User.GetUserStats();
  }, [])

  const StatsItem = ({ item }) => {
    const {icon, badge, value, label} = item;
    return (
      <View style={$statsItem}>
        <View style={$statsIcon}>
          <SimpleLineIcons name={icon} size={30} color={colors.white} />
        </View>
        <Text style={$statsValue}>{value}</Text>
        <Text style={$statsLabel}>{label}</Text>
      </View>
    )
  }

  return (
    <View style={$styles}>
      {Store.User.stats.map((item, index) => <StatsItem key={index.toString()} item={item} />)}
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  flex: 1,
  flexDirection: 'row',
  marginVertical: 10,
}

const $statsItem: ViewStyle = {
  justifyContent: "center",
  alignItems: 'center',
  flex: 1,
}

const $statsIcon: ViewStyle = {
  width: Dimensions.get('window').width * 0.15,
  height: Dimensions.get('window').width * 0.15,
  borderRadius: Dimensions.get('window').width * 0.75,
  borderWidth: 1,
  borderColor: colors.backgroundSecondary,
  marginBottom: 5,
  alignItems: "center",
  justifyContent: "center",
}

const $statsValue: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 18,
  color: colors.white,
}

const $statsLabel: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.white,
}


