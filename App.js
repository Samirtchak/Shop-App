import 'react-native-gesture-handler';
import  React from 'react';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/product';
import ShopNavigator from './navigation/ShopNavigator';
import  {NavigationContainer}  from '@react-navigation/native';


const rootReducer = combineReducers({
   products:productReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator/>
      </NavigationContainer>
      
    </Provider>
  );
}


