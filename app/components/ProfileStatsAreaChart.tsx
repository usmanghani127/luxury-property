import React, { useEffect } from "react"
import { Dimensions, StyleProp, View, ViewStyle, Text, TextStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { colors, typography } from "../theme"
import { format } from "date-fns"
import { useStores } from "../models"

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
  const Store = useStores();

  useEffect(() => {
    Store.User.GetAreaGraphData()
  }, [])

  const keyColors = [colors.followers, colors.photos, colors.likes]
  const keys = ['followers', 'photos', 'likes']
  const svgs = [
    { onPress: () => console.log('followers') },
    { onPress: () => console.log('photos') },
    { onPress: () => console.log('likes') },
  ]

  const Legend = () => (
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
  )

  const MonthsGrid = () => {
    // @ts-ignore
    const months = Store.User.areaGraphData.map(item => format(new Date(item.month), 'MMM'))
    return (
      <View style={$monthsRow}>
        {months.map((month, index) => (
          <View key={index.toString()}>
            <Text style={$monthText}>{month}</Text>
            <View style={$gridLine} />
          </View>
        ))}
      </View>
    )
  }

  return (
    <View style={$container}>
      <Legend />
      <MonthsGrid />
      <StackedAreaChart
        style={$areaChart}
        data={Store.User.areaGraphData}
        keys={keys}
        colors={keyColors}
        curve={shape.curveNatural}
        showGrid={false}
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

const $monthsRow: ViewStyle = {
  flexDirection: 'row',
  justifyContent: "space-around",
}

const $gridLine: ViewStyle = {
  width: 1,
  backgroundColor: colors.white,
  height: Dimensions.get('window').height * 0.3,
  alignSelf: 'center',
  marginTop: 10,
  position: 'absolute',
  top: 10,
}

const $monthText: TextStyle = {
  color: colors.white,
  fontFamily: typography.primary.normal,
  fontSize: 14,
}
