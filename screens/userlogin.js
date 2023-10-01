import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState, React, useContext } from 'react';
// import { Axios } from 'axios';
import { useNavigation } from '@react-navigation/native';// import nev func
import axios from 'axios';
import { UserNameContext } from '../context/UserNameContext';
import { Buffer } from 'buffer';

const Userlogin = () => {
    const navigation = useNavigation();//create navigation func
    const [Username, setusername] = useState('')
    const [Password, setpassword] = useState('')
   
    const shareParam = useContext(UserNameContext)//declare context
    //fetch func.172.20.10.2
    const fetchUser = async () => {
        const url = `http://192.168.1.139:3000/api/select?username=${Username}&password=${Password}`;
        const response = await axios.get(url);
        console.log(response.data)
        if (response.data == true) {
            shareParam.setUsername(Username)
            navigation.navigate("Home")
        } else {
            alert("login fail!")
        }
    }

  
    return (
        // style={{flex: 1, backgroundColor: 'black'}}
       
        <View style={{flex: 1, backgroundColor: 'black'}}>
             
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >


                <View style={styles.inputContainer}>

                    <TextInput placeholder="Username"

                        style={styles.input}
                    onChangeText={newText => setusername(newText)}


                    />

                    <TextInput placeholder="Password"
                        maxLength={8}
                        style={styles.input}
                        secureTextEntry
                    onChangeText={newText => setpassword(Buffer.from(newText).toString('base64'))}
                    />{/*convert to base64 */}
                    <View style={styles}>
                    </View>
                    <View style={styles.buttonContainer}

                        onPress={() =>
                            navigation.navigate({})//button
                            
                        }>

                        <TouchableOpacity
                            // onPress={() => {}}
                            // onPress={()=>{onclick={submitReview}}}
                             onPress={fetchUser}
                            style={styles.button}>

                            <Text style={[styles.buttonOutlineText, styles.buttonText]}>Login</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}
                            // onPress={() => {}}
                            // onPress={()=>{onclick={submitReview}}}
                            // onPress={submitReview}
                            style>

                            <Text style={[styles.regtext]}>Don't have account?  Register</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </KeyboardAvoidingView>
        </View>
    )
}


export default Userlogin

const styles = StyleSheet.create({
    container: {
        marginTop: 230,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputContainer: {
        width: '80%'
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
        paddingTop:10,


    },
    button: {
        backgroundColor: '#FFFF00',
        width: '127%',
        padding: 15,
        borderRadius: 10,
        marginLeft: 95,
        
        
        

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,

        borderWidth: 2,
        alignContent:'center',
        alignItems:'center',


    },
    buttonText: {

        fontWeight: '700',
        fontSize: 16,
        textAlign:'center'
        

    },

    buttonOutlineText: {


        fontWeight: '700',
        fontSize: 16,

    },
    erorText: {
        color: 'red',
        marginLeft: 20,
    },
    regtext: {
        marginTop: 10,
        marginLeft:10,
        fontWeight:'bold',
        color:'white',
    },
    erorText: {
        color: 'red',
        marginLeft: 20,
    },

})