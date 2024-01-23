import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Column, Row, SafeAreaColumn } from "../../customComponent/LayoutComponent";
import InputField from "../../customComponent/InputField";
import { useEffect, useRef, useState } from "react";
import TextButton from "../../customComponent/TextButton";
import { useAppDispatch } from "../../appHooks";
import { addNewRecord, updateRecord } from "../../reducers/AddRecordReducer";
import nameValidation from "../../validation/namevalidator";
import phoneValidation from "../../validation/phonevalidator";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import InputFieldWithIcon from "../../customComponent/InputFieldWithIcon";
import emailValidation from "../../validation/emailValidator";

function AddRecord( {route, navigation} ){

    const detail = route.params;

    const dispach = useAppDispatch()
    const [showData, setDate] = useState(false)

    const nameRef = useRef()
    const phoneRef = useRef()
    const dobRef = useRef()
    const emailRef = useRef()

    const [userDetail, setUserDetail] = useState({
        name: detail?.name || '',
        phoneNumber: detail?.phoneNumber || '',
        email: detail?.email || '',
        dob: detail?.dob || ''
    }) 

    const [errorState, setErrorState] = useState({
        name: false,
        phoneNumber: false,
        email: false,
        dob: false
    }) 

    const [buttonState, setButtonState] = useState({
        label: detail?.name ? 'Update' : 'Add'
    })

    const listener = (type, value)=> {
        console.log(".....listner.....", type, value)
        setUserDetail({...userDetail, [type]: value})
        setErrorState({...errorState, [type]: false})
        
    }

    const focusUpdate = (type) => {
       
    }

    // const blurUpdate = (type) => {
    //     setFocusState({...focusUpdate, [type]: false})
    // }

    function getTimeStamp(){
        return new Date().getTime(); 
    }

    const submitUserDetail = ()=> {
        console.log("bdjjkas back")
        if(validateAllField()){
            const record = {
                name: userDetail.name,
                email: userDetail.email,
                phoneNumber: userDetail.phoneNumber,
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
        else{
            let isValidName = true
            let isValidPhoneNo = true
            let isValidEmail = true
            let isValidDob = true
            if(!nameValidation(userDetail.name)){
                isValidName = false
            }
            if(!phoneValidation(userDetail.phoneNumber)){
                isValidPhoneNo = false
            }
            if(!emailValidation(userDetail.email)){
                isValidEmail = false
            }
            if(!nameValidation(userDetail.dob)){
                isValidDob = false
            }
            
            setErrorState({...errorState,
                name: !isValidName,
                phoneNumber: !isValidPhoneNo,
                email: !isValidEmail,
                dob: !isValidDob
            })
            console.log("erroro....", errorState)
        }
    }

    function validateAllField(){
        return nameValidation(userDetail.name) && 
            phoneValidation(userDetail.phoneNumber) &&
            nameValidation(userDetail.dob)
    }

    const dateChangeListener = (date) => {
        if(date.type == 'set'){
            const k = new Date(date.timeStamp)
            const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
            const formattedDate = formatter.format(k);
            setUserDetail({...userDetail, dob: formattedDate})
            console.log("bdhgashdj", date.timeStamp, formattedDate)
            setDate(false)
        } 
    };
    
    const dobIconCallback = ()=> {
        setDate(true)
    }
    return(
        <SafeAreaColumn>
            <ScrollView
            keyboardShouldPersistTaps='always'>
                <InputField 
                id={"name"}
                value={userDetail.name}
                onTextChange={listener}
                style={style.fieldStyle}
                focusStyle={style.focusedFieldStyle}
                hint={"Enter Name"}
                innerRef={nameRef}
                onSubmitEditing={()=> 
                    phoneRef.current.focus()
                }
                showError={errorState.name}
                errorStyle={style.errorFieldStyle}
                errorText={"Please entry name"}
                onFocus={focusUpdate}
                inputMode="text"
            />
            <InputField 
                id={"phoneNumber"}
                value={userDetail.phoneNumber}
                onTextChange={listener}
                style={style.fieldStyle}
                focusStyle={style.focusedFieldStyle}
                hint={"Enter Phone Number"}
                innerRef={phoneRef}
                onSubmitEditing={()=> emailRef.current.focus()}
                onFocus={focusUpdate}
                showError={errorState.phoneNumber}
                errorStyle={style.errorFieldStyle}
                errorText={"Phone number is not valid"}
                inputMode="tel"
            />
            <InputField 
                id={"email"}
                value={userDetail.email}
                onTextChange={listener}
                style={style.fieldStyle}
                focusStyle={style.focusedFieldStyle}
                hint={"Enter Email"}
                innerRef={emailRef}
                onSubmitEditing={()=> setDate(true)}
                onFocus={focusUpdate}
                showError={errorState.email}
                errorStyle={style.errorFieldStyle}
                errorText={"Email Id is not valid"}
                inputMode="email"
            />
            <InputFieldWithIcon 
                id={"dob"}
                value={userDetail.dob}
                onTextChange={listener}
                style={style.buttonImage}
                focusStyle={style.focusbuttonImage}
                hint={"Enter Date of Birth"}
                innerRef={dobRef}
                onIconClick={dobIconCallback}
                readOnly = {true}
                onFocus={focusUpdate}
            />
            { showData && <RNDateTimePicker 
                value={new Date()} 
                mode="date"
                display="spinner"
                dateFormat="dayofweek day month" 
                minimumDate={new Date(1950, 0, 1)}
                maximumDate={new Date(2030, 10, 20)}
                onChange={(date)=> dateChangeListener(date)}
                onConfirm = {()=> {
                    console.log("svhghka")
                }}
            />}
            <Column 
                justifyConteny="center" 
                alignItems= 'center'>
                <TextButton  
                    buttonStyle={style.button}
                    label={buttonState.label}
                    callBack={submitUserDetail}
                />  
            </Column>
            
            </ScrollView>
            
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
        paddingHorizontal: 12,
        flex: 1,
        marginHorizontal: 16,
        marginTop: 12
    },
    focusedFieldStyle: {
        height: 60,
        borderRadius: 20,
        borderColor: 'green',
        borderWidth: 1,
        color: 'green',
        paddingHorizontal: 12,
        flex: 1,
        marginHorizontal: 16,
        marginTop: 12
    },
    errorFieldStyle: {
        height: 60,
        borderRadius: 20,
        borderColor: '#B00020',
        borderWidth: 1,
        color: 'white',
        backgroundColor: '#FFCDD2',
        paddingHorizontal: 12,
        flex: 1,
        marginHorizontal: 16,
        marginTop: 12
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
    buttonImage: {
        flex: 0, 
        justifyContent: 'center',
        itemAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        padding: 16,
        margin: 16, 
        backgroundColor: 'red'
    },
    focusbuttonImage: {
        flex: 0, 
        justifyContent: 'center',
        itemAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        padding: 16,
        margin: 16
    }
})

export default AddRecord