import { IStats, IUser } from "../components"

const Users: IUser[] = [{
  name: 'John Kensington',
  role: 'UI/UX Designer & Developer',
  location: 'Sidney, Australia',
  avatar: 'https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png',
}];

const StatsList: IStats[] = [
  {
    icon: 'user-following',
    badge: 4,
    value: 863,
    label: 'FOLLOWERS',
  },
  {
    icon: 'picture',
    badge: 0,
    value: 2471,
    label: 'PHOTOS',
  },
  {
    icon: 'heart',
    badge: 7,
    value: 1593,
    label: "LIKES",
  },
]

const AreaGraphData = [
  {
    month: '2022-03-31T19:00:00.000Z',
    followers: 683,
    photos: 242,
    likes: 771,
  },
  {
    month: '2022-04-31T19:00:00.000Z',
    followers: 789,
    photos: 274,
    likes: 943,
  },
  {
    month: '2022-05-31T19:00:00.000Z',
    followers: 1043,
    photos: 309,
    likes: 1043,
  },
  {
    month: '2022-06-31T19:00:00.000Z',
    followers: 973,
    photos: 358,
    likes: 1263,
  },
  {
    month: '2022-07-31T19:00:00.000Z',
    followers: 777,
    photos: 489,
    likes: 1452,
  },
  {
    month: '2022-08-31T19:00:00.000Z',
    followers: 846,
    photos: 573,
    likes: 1693,
  },
  {
    month: '2022-09-31T19:00:00.000Z',
    followers: 923,
    photos: 699,
    likes: 2053,
  },
  {
    month: '2022-10-31T19:00:00.000Z',
    followers: 999,
    photos: 732,
    likes: 2193,
  },
]

export default {Users, StatsList, AreaGraphData}
