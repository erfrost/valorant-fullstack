import { selector } from "recoil";
import {
  agentsState,
  mapsState,
  skinsState,
  weaponsState,
} from "../atoms/main";

export const agentsSelector = selector({
  key: "agentsSelector",
  get: ({ get }) => get(agentsState),
  set: ({ set }, value) =>
    set(agentsState, (state) => ({ ...state, value: value })), // setter example
});
export const mapsSelector = selector({
  key: "mapsSelector",
  get: ({ get }) => get(mapsState),
  set: ({ set }, value) =>
    set(mapsState, (state) => ({ ...state, value: value })), // setter example
});
export const weaponsSelector = selector({
  key: "weaponsSelector",
  get: ({ get }) => get(weaponsState),
  set: ({ set }, value) =>
    set(weaponsState, (state) => ({ ...state, value: value })), // setter example
});
export const skinsSelector = selector({
  key: "skinsSelector",
  get: ({ get }) => get(skinsState),
  set: ({ set }, value) =>
    set(skinsState, (state) => ({ ...state, value: value })), // setter example
});
