import { StyleSheet, Text, View } from "react-native";
import { Column, Row, SafeAreaColumn } from "../../customComponent/LayoutComponent";
import InputField from "../../customComponent/InputField";
import { useRef, useState } from "react";
import TextButton from "../../customComponent/TextButton";
import { useAppDispatch } from "../../appHooks";
import { addNewRecord, updateRecord } from "../../reducers/AddRecordReducer";
import nameValidation from "../../validation/namevalidator";
import phoneValidation from "../../validation/phonevalidator";

function AddRecord( {route, navigation} ){

    const detail = route.params;
    console.log(detail)

    const nameRef = useRef()
    const phoneRef = useRef()
    const dobRef = useRef()
    const emailRef = useRef()

    const dispach = useAppDispatch()

    const [userDetail, setUserDetail] = useState({
        name: detail?.name || '',
        phoneNumber: detail?.phoneNumber || '',
        email: detail?.email || '',
        dob: detail?.dob || ''
    }) 

    const [buttonState, setButtonState] = useState({
        label: detail?.name ? 'Update' : 'Add'
    })

    const listener = (type, value)=> {
        console.log(".....listner.....", type, value)
        setUserDetail({...userDetail, [type]: value})
    }

    function getTimeStamp(){
        return new Date().getTime(); 
    }

    const submitUserDetail = ()=> {
        if(validateAllField()){
            const record = {
                name: userDetail.name,
                email: userDetail.email,
                phoneNumber: userDetail.email,
                dob: userDetail.dob,
                id: detail?.id || getTimeStamp()
            }
            if(detail?.id){
                const k = {
                    data: record,
                    index: detail?.ind
                }
                dispach(updateRecord(k))
            }else{
                dispach(addNewRecord(record))
            }
            navigation.goBack()
        } 
    }

    function validateAllField(){
        return nameValidation(userDetail.name) && 
            phoneValidation(userDetail.phoneNumber)
    }

    return(
        <SafeAreaColumn>
            <InputField 
                id={"name"}
                value={userDetail.name}
                onTextChange={listener}
                showIcon = {false}
                style={style.fieldStyle}
                hint={"Enter Name"}
                ref={nameRef}
            />
            <InputField 
                id={"phoneNumber"}
                value={userDetail.phoneNumber}
                onTextChange={listener}
                showIcon = {false}
                style={style.fieldStyle}
                hint={"Enter Phone Number"}
                ref={phoneRef}
            />
            <InputField 
                id={"email"}
                value={userDetail.email}
                onTextChange={listener}
                showIcon = {false}
                style={style.fieldStyle}
                hint={"Enter Email"}
                ref={emailRef}
            />
            <Column 
                justifyConteny="center" 
                alignItems= 'center'>
                <TextButton  
                    buttonStyle={style.button}
                    label={buttonState.label}
                    callBack={submitUserDetail}
                />
            </Column>
        </SafeAreaColumn>
    )
}

const style = StyleSheet.create({
    fieldStyle: {
        height: 60,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        color: 'black',
        padding: 16,
        flex: 1,
        margin: 16
    },
    button: {
        height: 50,
        width: 200,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default AddRecord