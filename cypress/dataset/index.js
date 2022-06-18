const wrappedDataset = (dataset) => `[data-cy=${dataset}]`

export const TYPING_OPTIONS = {
  delay: 10,
}

//////////////////////////// HOME //////////////////////////////////
export const HOME = {
  BUTTON_SELECTION: wrappedDataset('home_selection_button'),
  BUTTON_COLLECTION: wrappedDataset('home_collection_button'),
  LABEL_TITLE: wrappedDataset('home_title_label'),
}

//////////////////////////// MODAL //////////////////////////////////
export const MODAL = {
  MESSAGE_CONTENT: wrappedDataset('modal_content_message'),
  MESSAGE_TITLE: wrappedDataset('modal_title_message'),
  BUTTON_OK: wrappedDataset('modal_ok_button'),
  BUTTON_CANCEL: wrappedDataset('modal_cancel_button'),
}

//////////////////////////// MEDAL //////////////////////////////////
const MEDAL_temp = new Object()
for (let i=1; i<=10; i++) {
  MEDAL_temp[`BUTTON_MEDAL_${i}`] = wrappedDataset(`medal_button_${i}`)
}
export const MEDAL = { ...MEDAL_temp }

//////////////////////////// CEAL //////////////////////////////////
const CEAL_temp = new Object()
for (let i=1; i<=159; i++) {
  CEAL_temp[`BUTTON_CEAL_${i}`] = wrappedDataset(`ceal_button_${i}`)
}
export const CEAL = { ...CEAL_temp }

//////////////////////////// SELECTION & COLLECTION //////////////////////////////////
export const SELECTION = {
  BUTTON_PREVIEW: wrappedDataset('selection_preview_button'),
  BUTTON_COMPLETE: wrappedDataset('selection_complete_button'),
  INPUT_SEARCH: wrappedDataset('selection_search_input'),
  LABEL_NUMBER_OF_POKEMONS: wrappedDataset('selection_number_of_pokemons_label'),
  LABEL_TITLE: wrappedDataset('selection_title_label'),
}

//////////////////////////// COMPLETE //////////////////////////////////
export const COMPLETE = {
  BUTTON_DOWNLOAD: wrappedDataset('complete_download_button'),
  BUTTON_HOME: wrappedDataset('complete_home_button'),
  LABEL_TITLE: wrappedDataset('complete_title_label'),
}