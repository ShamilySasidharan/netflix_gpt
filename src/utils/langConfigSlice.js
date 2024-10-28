import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice = createSlice({
  name: "languageConfig",
  initialState: {
    lang:"en",
    showSelectorOption : false,
    

  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    showTheLanguageSelector :(state,action)=>{
      state.showSelectorOption = !(state.showSelectorOption)
    }
  },
});

export const {changeLanguage,showTheLanguageSelector} = langConfigSlice.actions

export default langConfigSlice.reducer