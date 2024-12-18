export const USER_AVATAR = "https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg"

export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
    }
  };

  export const MOVIE_CARD_CDN_URL = "https://image.tmdb.org/t/p/w500"

  export const SUPPORTED_LANGUAGES = [
    {id:"en",name:"English"},
    {id:"hindi",name:"Hindi"},
    {id:"malayalam",name:"Malayalam"},
    {id:"spanish",name:"Spanish"}
  ]



  export const OPENAI_KEY =process.env.REACT_APP_OPENAI_KEY