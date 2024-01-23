import { FlatList, StyleSheet, Text, View } from "react-native";
import { Column, SafeAreaColumn } from "../../customComponent/LayoutComponent";
import { useState } from "react";
import NoRecord from "./NoRecord";
import { useAppDispatch, useAppSelector } from "../../appHooks";
import RecordItem from "./RecordItem";
import TextButton from "../../customComponent/TextButton";
import { deleteRecord } from "../../reducers/AddRecordReducer";


function RecordListing({navigation}){
    
    const records = useAppSelector((state) => state.record.recordList)
    const dipatch = useAppDispatch()
    console.log("xjajsk", records)

    const addcallback = ()=> {
        navigation.navigate('AddRecord')
    }

    const updateUserCard = (index)=> {
        console.log("update user Card", index)
        const data = {...records[index], ind: index}
        navigation.navigate('AddRecord', data)
    }

    const deleteUserCard = (index)=> {
        console.log("delete user Card", index)
        dipatch(deleteRecord(index))
    }

    return(
        <SafeAreaColumn >
            {
                records.length == 0 ?
                <NoRecord addCallback={addcallback}/> :
                <Column backgroundColor="red">
                    <FlatList 
                    data={records}
                    renderItem={(item) => <RecordItem 
                        data={item.item} 
                        index={item.index}
                        updateCallback={updateUserCard}
                        deleteCallback={deleteUserCard}
                        />}
                    />
                    <TextButton 
                        buttonStyle={style.button}
                        label={"Add"}
                        textStyle={style.label}
                        callBack={addcallback}
                    />
                </Column>
            }
        </SafeAreaColumn> 
    )
}

const style = StyleSheet.create({
    button: {
        height: 50,
        width: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center'
    },
    headerStyle: {
        color: 'white',
        fontSize: 20
    },
    label: {
        color: 'white',
    }
})

export default RecordListing