import { detach, flow, Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import DummyData from "../services/DummyData"

/**
 * Model description here for TypeScript hints.
 */

const Profile = types.model('Profile', {
  name: types.optional(types.string, ""),
  role: types.optional(types.string, ""),
  location: types.optional(types.string, ""),
  avatar: types.optional(types.string, ""),
})

const Stats = types.model('Stats', {
  icon: types.optional(types.string, ""),
  badge: types.optional(types.number, 0),
  value: types.optional(types.number, 0),
  label: types.optional(types.string, ""),
})

const StatsAreaGraph = types.model('Stats Area Graph', {
  month: types.optional(types.string, ""),
  followers: types.optional(types.number, 0),
  photos: types.optional(types.number, 0),
  likes: types.optional(types.number, 0),
})

export const UserModel = types
  .model("User", {
    profile: types.array(Profile),
    stats: types.array(Stats),
    areaGraphData: types.array(StatsAreaGraph),
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    GetUserProfile: flow(function*() {
      detach(self.profile)
      // @ts-ignore
      self.profile = DummyData.Users;
    }),
    GetUserStats: flow(function*() {
      detach(self.stats);
      // @ts-ignore
      self.stats = DummyData.StatsList;

    }),
    GetAreaGraphData: flow(function*() {
      detach(self.areaGraphData);
      // @ts-ignore
      self.areaGraphData = DummyData.AreaGraphData
    })
  }))

export interface User extends Instance<typeof UserModel> {}
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
