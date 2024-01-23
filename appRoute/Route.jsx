
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecordListing from "../screens/RecordListing/RecordListing";
import AddRecord from "../screens/AddRecord/AddRecord";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import appStore from "../appStore";

const Stack = createNativeStackNavigator();

function Route(){
    return(
        <Provider store={appStore}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="RecordListing" 
                        component={RecordListing}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="AddRecord" 
                        component={AddRecord}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
        
    )
}

export default Route