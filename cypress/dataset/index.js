const wrappedDataset = (dataset) => `[data-cy=${dataset}]`

export const TYPING_OPTIONS = {
  delay: 10,
}

//////////////////////////// HOME //////////////////////////////////
export const HOME = {
  BUTTON_SELECTION: wrappedDataset('home_selection_button'),
  BUTTON_COLLECTION: wrappedDataset('home_collection_button'),
}

//////////////////////////// MODAL //////////////////////////////////
export const MODAL = {
  MESSAGE_CONTENT: wrappedDataset('modal_content_message'),
  MESSAGE_TITLE: wrappedDataset('modal_title_message'),
  BUTTON_OK: wrappedDataset('modal_ok_button'),
  BUTTON_CANCEL: wrappedDataset('modal_cancel_button'),
}

//////////////////////////// MEDAL //////////////////////////////////
export const MEDAL = new Object()
for (let i=1; i<=10; i++) {
  MEDAL[`BUTTON_MEDAL_${i}`] = wrappedDataset(`medal_button_${i}`)
}

//////////////////////////// CEAL //////////////////////////////////
export const CEAL = new Object()
for (let i=1; i<=159; i++) {
  MEDAL[`BUTTON_CEAL_${i}`] = wrappedDataset(`ceal_button_${i}`)
}

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
}