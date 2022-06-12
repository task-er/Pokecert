const wrappedDataset = (dataset) => `[data-cy=${dataset}]`

export const TYPING_OPTIONS = {
  delay: 10,
}

export const HOME = {
  BUTTON_SELECTION: wrappedDataset('loginModalView_inputEmail'),
  BUTTON_COLLECTION: wrappedDataset('loginModalView_loginButton'),
}

export const MODAL = {
  INSERT: wrappedDataset(''),
  REMOVE: wrappedDataset(''),
  MEDAL: wrappedDataset(''),
}

export const SELECTION = {
  BUTTON_POKEMON: wrappedDataset('analysisStartSection_viewDetailButton'),
  BUTTON_MEDAL: wrappedDataset('analysisStartSection_viewDetailButton'),
  BUTTON_PREVIEW: wrappedDataset('analysisStartSection_viewDetailButton'),
  BUTTON_COMPLETE: wrappedDataset('analysisStartSection_viewDetailButton'),
  LABEL_NUMBER_OF_POKEMONS: wrappedDataset('analysisStartSection_viewDetailButton'),
}

export const COLLECTION = {
  BUTTON_POKEMON: wrappedDataset('profile_userEmail'),
  BUTTON_MEDAL: wrappedDataset('navbar_logo'),
}

export const COMPLETE = {
  BUTTON_DOWNLOAD: wrappedDataset('sideBar_loginButton'),
  BUTTON_HOME: wrappedDataset('sideBar_signupButton'),
}