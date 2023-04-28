import {Icon } from "react-native-elements"
import MainPage from "./MainPage"
import Regiones from "./Regiones"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import RegionesForm from "./Departamentos"
import Departamentos from "./Departamentos"

const Tab = createBottomTabNavigator()
function BarraNav() {
    return (
<Tab.Navigator>
        <Tab.Screen 
        name= 'Inicio'
        component={MainPage}
        options = {{
            tabBarIcon:({color, size}) =>(
                <Icon name="home"
                    type="font-awesome"
                    color={color}
                    size={size}
                />
            )
        }}
        
        />
           <Tab.Screen 
        name= 'Regiones'
        component={Regiones}
        options = {{
            tabBarIcon:({color, size}) =>(
                <Icon name="map"
                    type="font-awesome"
                    color={color}
                    size={size}
                />
            )
        }}
        
        />

<Tab.Screen 
        name= 'Departamentos'
        component={Departamentos}
        options = {{
            tabBarIcon:({color, size}) =>(
                <Icon name="map"
                    type="font-awesome"
                    color={color}
                    size={size}
                />
            )
        }}
        
        />
</Tab.Navigator>
    )
}
export default BarraNav;