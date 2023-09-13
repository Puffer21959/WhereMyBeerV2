import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState, React } from 'react';
// import { Axios } from 'axios';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';



// import axios, { Axios } from 'axios';
// import * as axios from 'axios';
// import axios, * as others from 'axios';
const Register = () => {
    //==================================================================
    // const[Username,Password,F_name,L_name,Card_ID,Age] = useState('')
    const [Username, setusername] = useState('')
    const [Password, setpassword] = useState('')
    const [F_name, setf_name] = useState('')
    const [L_name, setl_name] = useState('')
    const [Card_ID, setcard_id] = useState('')
    const [Birth_date, setBirth_date] = useState('')

    ///////////// Create validate statement
    const [Usernameerr, setUsernameerr] = useState(false);
    const [Passworderr, setPassworderr] = useState(false);
    const [F_nameerr, setF_nameerr] = useState(false);
    const [L_nameerr, setL_nameerr] = useState(false);
    const [Card_IDerr, setCard_IDerr] = useState(false);
    const [Birth_dateerr, setBirth_dateerr] = useState(false);
    
    const navigation = useNavigation();//creat navigation func
    
    //////////// End validate statement
    const submitReview = async () => {
        ///////////// Create validate statement +++
        

        if (!Username) {
            setUsernameerr(true)
        }
        else {
            setUsernameerr(false)
        }
        if (!Password) {
            setPassworderr(true)
        }
        else {
            setPassworderr(false)
        }
        if (!F_name) {
            setF_nameerr(true)
        }
        else {
            setF_nameerr(false)
        }
        if (!L_name) {
            setL_nameerr(true)
        }
        else {
            setL_nameerr(false)
        }
        if (!Card_ID) {
            setCard_IDerr(true)
        }
        else {
            setCard_IDerr(false)
        }
        if (!Birth_date) {
            setBirth_dateerr(true)
        }
        else {
            setBirth_dateerr(false)
        }
        
        
        // console.warn("stop")
        //////////// End validate statement
        //192.168.1.123 home
        //172.20.10.2  me
        if(Username.length==0||Password.length==0||F_name.length==0||L_name.length==0||Card_ID.length==0||Birth_date.length==0){
            alert("Account Register's Fail please try again!")
        }else{
            Axios.post("http://192.168.1.123:3000/api/insert", {
                Username: Username, Password: Password, F_name: F_name, L_name: L_name, Card_ID: Card_ID, Birth_date: Birth_date
            })
            
        }if(!Username.length==0&&!Password.length==0&&!F_name.length==0&&!L_name.length==0&&!Card_ID.length==0&&!Birth_date.length==0){
            navigation.goBack()
        }
        
    };
    //==================================================================



    return (
        
        <KeyboardAvoidingView 
        style={{flex:1, backgroundColor: 'black'}}
            behavior="padding"
            
        >


            <View style={styles.inputContainer}>

                <TextInput placeholder="Username"

                    style={styles.input}
                    onChangeText={newText => setusername(newText)}


                />
                {/* this line show validate output */}
                {Usernameerr ? <Text style={styles.erorText}>Please enter valid username</Text> : null}
                {/* end */}
                <TextInput placeholder="Password :"
                    maxLength={8}
                    style={styles.input}
                    secureTextEntry
                    onChangeText={newText => setpassword(newText)}
                />
                {/* this line show validate output */}
                {Passworderr ? <Text style={styles.erorText}>please enter valid password</Text> : null}
                {/* end */}


                <TextInput placeholder="First name"

                    style={styles.input}
                    onChangeText={newText => setf_name(newText)}
                />

                {/* this line show validate output */}
                {F_nameerr ? <Text style={styles.erorText}>Fill first name again</Text> : null}
                {/* end */}
                <TextInput placeholder="Last name"

                    style={styles.input}
                    onChangeText={newText => setl_name(newText)}
                />

                {/* this line show validate output */}
                {L_nameerr ? <Text style={styles.erorText}>Fill last name again</Text> : null}
                {/* end */}
                <TextInput placeholder="ID Card"

                    style={styles.input}
                    onChangeText={newText => setcard_id(newText)}
                    keyboardType='numeric'
                    maxLength={14}

                />

                {/* this line show validate output */}
                {Card_IDerr ? <Text style={styles.erorText}>Please try Card_ID 14 number</Text> : null}
                {/* end */}
                <TextInput placeholder="Birth date : DD/MM/YYYY"
                    //parseInt
                    style={styles.input}
                    onChangeText={newText => setBirth_date(newText)}
                />
                {/* this line show validate output */}
                {Birth_dateerr ? <Text style={styles.erorText}>Please enter birth date *format DD/MM/YYYY</Text> : null}
                {/* end */}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        // onPress={() => {}}
                        // onPress={()=>{onclick={submitReview}}}
                        onPress={submitReview}
                        style={styles.button}>

                        <Text style={[styles.buttonOutlineText, styles.buttonText]}>Register</Text>

                    </TouchableOpacity>

                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    inputContainer: {
        width: '80%',
        marginTop:100,
        marginLeft:40,
    },
    input: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        textAlign: 'left',
        padding: 10



    },
    buttonContainer: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,


    },
    button: {
        backgroundColor: '#FFFF00',
        width: '100',
        padding: 15,
        borderRadius: 10,
        marginLeft: 110


    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,

        borderWidth: 2,


    },
    buttonText: {

        fontWeight: '700',
        fontSize: 16,


    },

    buttonOutlineText: {


        fontWeight: '700',
        fontSize: 16,

    },
    erorText: {
        color: 'red',
        marginLeft: 20,
    },
   


})