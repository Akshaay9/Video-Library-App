import { makeAnAPICall } from "../APICalls";

export const loadInitailUsersProduct = async (
  userInfo,
  likedVideoDispatch,
  watchLaterDispatch,
  playListDispatch
) => {
 await  makeAnAPICall(
    `GET`,
    `https://cryptic-hamlet-94693.herokuapp.com/api/likedvideos`,
    likedVideoDispatch,
    "LOAD_LIKED_VIDEOS",
    null,
    userInfo.token
  );
  makeAnAPICall(
    await `GET`,
    `https://cryptic-hamlet-94693.herokuapp.com/api/watchlater`,
    watchLaterDispatch,
    "LOAD_WATCH_LATER",
    null,
    userInfo.token
  );
  await makeAnAPICall(
    `GET`,
    `https://cryptic-hamlet-94693.herokuapp.com/api/playlist`,
    playListDispatch,
    "LOAD_PLAYLIST",
    null,
    userInfo.token
  );

};
