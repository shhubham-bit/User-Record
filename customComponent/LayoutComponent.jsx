import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export const Column = ({children, 
    justifyConteny = 'flex-start', 
    alignItems = 'stretch',
    backgroundColor = 'white',
    flex = 1,
    borderColor = 'black',
    borderWidth = 0,
    margin = 0,
    padding = 0,
    borderRadius = 0
    })=>{
    return(
        <View style = {
                {flex: flex, 
                flexDirection: 'column', 
                backgroundColor: 'red',
                justifyContent: justifyConteny,
                alignItems: alignItems,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: borderWidth,
                margin: margin,
                padding: padding,
                borderRadius: borderRadius
                }
            }>
            {children}
        </View>
    )
}

export const Row = ({children, rowStyle ={} }) =>{
    return(
        <View style = {
                {
                flex: 1, 
                flexDirection: 'row',
                ...rowStyle,
            }
            }>
                {children}
        </View>
    )
}

export const SafeAreaColumn = ({children})=>{
    console.log("nkckdl", children)
    return(
        <SafeAreaView style = {{flex: 1}}>
            <Column>
                {children}
            </Column>
        </SafeAreaView>
    )
}

export const SafeAreaRow = ({children}) =>{
    return(
        <SafeAreaView style = {{flex: 1}}>
            <Row layout={children} />
        </SafeAreaView>
    )
}

