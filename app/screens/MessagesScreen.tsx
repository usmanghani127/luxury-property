import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, FlatList, Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, Text } from "../components"
import { differenceInHours, differenceInMinutes, format } from "date-fns"
import { colors } from "../theme"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Messages: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Messages" component={MessagesScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const MessagesScreen: FC<StackScreenProps<AppStackScreenProps, "Messages">> = observer(function MessagesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const DUMMY_MESSAGES = [
    {
      id: 1,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mVfEhYypleNJBcPrMkIPcRqrNnMyUEZOOrSpyJ66qA&s',
      name: 'Charlotte Adams',
      lastMessage: 'Hey, how are you? What\'s going on?',
      lastMessageTime: '2023-01-17T18:00:31.319Z',
      isLastMessageAReply: true,
      isLastMessageAnAttachment: false,
    },
    {
      id: 2,
      avatar: 'data:image/jpeg;base64,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',
      name: 'Robb Flynn',
      lastMessage: 'What\'s happened to you dude? Are you Okay?',
      lastMessageTime: '2023-01-17T18:45:31.319Z',
      status: 'Delivered',
      isLastMessageAtReply: false,
      isLastMessageAnAttachment: false,
    },
    {
      id: 3,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mVfEhYypleNJBcPrMkIPcRqrNnMyUEZOOrSpyJ66qA&s',
      name: 'Mariana Segura',
      lastMessage: 'So we meet there tomorrow.',
      lastMessageTime: '2023-01-17T16:37:31.319Z',
      status: 'Send',
      isLastMessageAtReply: false,
      isLastMessageAnAttachment: false,
    },
    {
      id: 4,
      avatar: 'data:image/jpeg;base64,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',
      name: 'John Otto',
      lastMessage: 'See you later buddy.',
      lastMessageTime: '2023-01-15T01:22:31.319Z',
      status: 'Delivered',
      isLastMessageAtReply: false,
      isLastMessageAnAttachment: true,
    }
  ]

  const Conversation = ({ item }) => {
    const {
      avatar,
      name,
      lastMessage,
      lastMessageTime,
      status,
      isLastMessageAReply,
      isLastMessageAnAttachment,
    } = item;

    const lastMessageTimeObj = new Date(lastMessageTime);
    let displayTime = format(lastMessageTimeObj, 'dd MMM, yyyy');
    let difference = differenceInHours(new Date(), lastMessageTimeObj)
    if (difference < 6) {
      if (difference >= 1) {
        displayTime = `${difference} hour${difference < 2 ? '' : 's'} ago`
      } else {
        difference = differenceInMinutes(new Date(), lastMessageTimeObj)
        displayTime = `${difference} min ago`

      }
    }

    return (
      <View style={$item}>
        <View style={$avatarContainer}>
          <Image source={{uri: avatar}} style={$avatar} />
        </View>
        <View style={$description}>
          <Text style={$name}>{name}</Text>
          <Text style={$lastMessage} numberOfLines={1}>{lastMessage}</Text>
        </View>
        <View style={$stats}>
          <Text style={$time}><Icon name={'clock-time-three-outline'} color={colors.dim}/> {displayTime}</Text>
          <Icon
            name={
            isLastMessageAReply ? 'reply'
              : isLastMessageAnAttachment ? 'attachment'
                : status === 'Delivered' ? 'check-all'
                  : 'check'}
            size={20}
            color={colors.dim}
          />
        </View>
      </View>
    )
  }

  return (
    <Screen style={$root} preset="scroll">
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={DUMMY_MESSAGES}
        style={$flatList}
        renderItem={({item}) => <Conversation item={item} />}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $flatList: ViewStyle = {
  marginVertical: 10,
}

const $item: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  padding: 5,
  borderBottomWidth: 1,
  borderColor: colors.backgroundSecondary,
}

const $avatarContainer: ImageStyle = {
  // flex: 0.22
}

const $avatar: ImageStyle = {
  width: Dimensions.get('window').width * 0.125,
  height: Dimensions.get('window').width * 0.125,
  borderRadius: Dimensions.get('window').width * 0.0625,
  marginRight: 10,
}

const $description: ViewStyle = {
  flex: 1
}

const $name: TextStyle = {
  color: colors.primary,
}

const $time: TextStyle = {
  color: colors.dim,
  fontSize: 10,
}


const $lastMessage: TextStyle = {
  color: colors.dim,
}

const $stats: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
}

