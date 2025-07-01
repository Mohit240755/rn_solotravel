import {configureStore} from '@reduxjs/toolkit';
import SavedItem from './Saveitem';

export default configureStore({
  reducer: {
    savedItems: SavedItem,
  },
});
