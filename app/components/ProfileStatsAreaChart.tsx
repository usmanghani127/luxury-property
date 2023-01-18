import React from "react"
import { Dimensions, StyleProp, View, ViewStyle, Text, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { colors, typography } from "../theme"

export interface ProfileStatsAreaChartProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ProfileStatsAreaChart = observer(function ProfileStatsAreaChart(props: ProfileStatsAreaChartProps) {
  const { style } = props
  const $styles = [$container, style]

  const data = [
    {
      month: new Date(2022, 6, 1),
      followers: 683,
      photos: 242,
      likes: 771,
    },
    {
      month: new Date(2022, 7, 1),
      followers: 789,
      photos: 274,
      likes: 943,
    },
    {
      month: new Date(2022, 8, 1),
      followers: 1043,
      photos: 309,
      likes: 1043,
    },
    {
      month: new Date(2022, 9, 1),
      followers: 973,
      photos: 358,
      likes: 1263,
    },
    {
      month: new Date(2022, 10, 1),
      followers: 777,
      photos: 489,
      likes: 1452,
    },
    {
      month: new Date(2022, 11, 1),
      followers: 846,
      photos: 573,
      likes: 1693,
    },
    {
      month: new Date(2022, 12, 1),
      followers: 923,
      photos: 699,
      likes: 2053,
    },
  ]

  const keyColors = [colors.followers, colors.photos, colors.likes]
  const keys = ['followers', 'photos', 'likes']
  const svgs = [
    { onPress: () => console.log('followers') },
    { onPress: () => console.log('photos') },
    { onPress: () => console.log('likes') },
  ]

  return (
    <View style={$container}>
      <View style={$legend}>
        <Text style={$heading}>Statistics</Text>
        <View style={$legendItem}>
          <View style={[$legendBox, $likes]}/>
          <Text style={$legendItemText}>Likes</Text>
        </View>
        <View style={$legendItem}>
          <View style={[$legendBox, $followers]}/>
          <Text style={$legendItemText}>Followers</Text>
        </View>
        <View style={$legendItem}>
          <View style={[$legendBox, $pictures]}/>
          <Text style={$legendItemText}>Pictures</Text>
        </View>
      </View>
      <StackedAreaChart
        style={$areaChart}
        data={data}
        keys={keys}
        colors={keyColors}
        curve={shape.curveNatural}
        showGrid={true}
        svgs={svgs}
      />
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  backgroundColor: colors.backgroundSecondary,
}

const $legend: ViewStyle = {
  flexDirection: 'row',
  padding: 10,
  backgroundColor: colors.backgroundTertiary,
}

const $heading: TextStyle = {
  color: colors.white,
  fontFamily: typography.primary.bold,
  fontSize: 18,
  flex: 1,
}

const $legendItem: ViewStyle = {
  flexDirection: 'row',
}

const $legendBox: ViewStyle = {
  height: 15,
  width: 15,
  marginHorizontal: 5,
}

const $likes: ViewStyle = {
  backgroundColor: colors.likes,
}

const $followers: ViewStyle = {
  backgroundColor: colors.followers,
}

const $pictures: ViewStyle = {
  backgroundColor: colors.photos,
}


const $legendItemText: TextStyle = {
  color: colors.white,
  fontFamily: typography.primary.bold,
  fontSize: 14,
}

const $areaChart: ViewStyle = {
  height: Dimensions.get('window').height * 0.36,
  paddingVertical: 20,
}
