import { makeAnAPICall } from "../APICalls";
import {BE_URL} from "../const"


export const loadInitailUsersProduct = async (
  userInfo,
  likedVideoDispatch,
  watchLaterDispatch,
  playListDispatch
) => {
  await makeAnAPICall(
    `GET`,
    `${BE_URL}/api/likedvideos`,
    likedVideoDispatch,
    "LOAD_LIKED_VIDEOS",
    null,
    userInfo.token
  );
  makeAnAPICall(
    await `GET`,
    `${BE_URL}/api/watchlater`,
    watchLaterDispatch,
    "LOAD_WATCH_LATER",
    null,
    userInfo.token
  );
  await makeAnAPICall(
    `GET`,
    `${BE_URL}/api/playlist`,
    playListDispatch,
    "LOAD_PLAYLIST",
    null,
    userInfo.token
  );
};
