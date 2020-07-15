import { createStackNavigator} from '@react-navigation/stack';
import  React from 'react';
import Productscreen from '../screens/shop/ProductOverviewScreen';

const Stack = createStackNavigator();

const  ShopNavigator = () => {
    return (
     <Stack.Navigator>
        <Stack.Screen name="Products" component={Productscreen} 
            options={{
                title:'all products',
                headerStyle: {
                    backgroundColor: '#2683D4',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }}
            
        />
    </Stack.Navigator>
    )
}

export default ShopNavigator