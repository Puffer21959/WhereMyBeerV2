import { View, Text, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useContext, useState, React } from 'react'
import { UserNameContext } from '../context/UserNameContext'
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Buffer } from 'buffer';

export default function EditProfile() {
  const shareParam = useContext(UserNameContext)//declare context as shareParam
  var UseForWhere = shareParam.SentUsername// store Username into UseForWhere
  //console.log(shareParam.SentUsername)
  console.log(UseForWhere)
  //console.log(Buffer.from(UseForWhere).toString('base64'))//testing base64 encode

  const [Username, setusername] = useState('')
  const [Password, setpassword] = useState('')
  const [F_name, setf_name] = useState('')
  const [L_name, setl_name] = useState('')
  const [Card_ID, setcard_id] = useState('')
  const [Birth_date, setBirth_date] = useState('')

  const [Username_check, setUsername_check] = useState(false);
  const [Password_check, setPassword_check] = useState(false);
  const [F_name_check, setF_name_check] = useState(false);
  const [L_name_check, setL_name_check] = useState(false);
  const [Card_ID_check, setCard_ID_check] = useState(false);
  const [Birth_date_check, setBirth_date_check] = useState(false);

  const navigation = useNavigation();//creat navigation func
  //Button func.
  const EditProfile = async () => {


    if (!Username) {
      setUsername_check(true)
    }
    else {
      setUsername_check(false)
    }
    if (!Password) {
      setPassword_check(true)
    }
    else {
      setPassword_check(false)
    }
    if (!F_name) {
      setF_name_check(true)
    }
    else {
      setF_name_check(false)
    }
    if (!L_name) {
      setL_name_check(true)
    }
    else {
      setL_name_check(false)
    }
    if (!Card_ID) {
      setCard_ID_check(true)
    }
    else {
      setCard_ID_check(false)
    }
    if (!Birth_date) {
      setBirth_date_check(true)
    }
    else {
      setBirth_date_check(false)
    }


    
    if (Username.length == 0 || Password.length == 0 || F_name.length == 0 || L_name.length == 0 || Card_ID.length == 0 || Birth_date.length == 0) {
      alert("UPDATE Fail please try again!")
    } else {
      
      Axios.put("http://192.168.1.139:3000/api/update",
        {
          Username: Username, Password: Password, F_name: F_name, L_name: L_name, Card_ID: Card_ID, Birth_date: Birth_date,UseForWhere:UseForWhere

        })
        shareParam.setUsername(Username)/*this fix the multiple edit issue*/
        navigation.goBack()
    }
  };


  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'black' }}
      behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput placeholder="Username"

          style={styles.input}
          onChangeText={newText => {setusername(newText)}}


        />

        {Username_check ? <Text style={styles.erorText}>Please enter valid username</Text> : null}

        <TextInput placeholder="Password :"
          maxLength={8}
          style={styles.input}
          secureTextEntry
          onChangeText={newText => setpassword(Buffer.from(newText).toString('base64'))}
        />
        {/* this line show validate output */}
        {Password_check ? <Text style={styles.erorText}>please enter valid password</Text> : null}
        {/* end */}


        <TextInput placeholder="First name"

          style={styles.input}
          onChangeText={newText => setf_name(newText)}
        />

        {/* this line show validate output */}
        {F_name_check ? <Text style={styles.erorText}>Fill first name again</Text> : null}
        {/* end */}
        <TextInput placeholder="Last name"

          style={styles.input}
          onChangeText={newText => setl_name(newText)}
        />

        {/* this line show validate output */}
        {L_name_check ? <Text style={styles.erorText}>Fill last name again</Text> : null}
        {/* end */}
        <TextInput placeholder="ID Card"

          style={styles.input}
          onChangeText={newText => setcard_id(newText)}
          keyboardType='numeric'
          maxLength={14}

        />

        {/* this line show validate output */}
        {Card_ID_check ? <Text style={styles.erorText}>Please try Card_ID 14 number</Text> : null}
        {/* end */}
        <TextInput placeholder="Birth date : DD/MM/YYYY"
          //parseInt
          style={styles.input}
          onChangeText={newText => setBirth_date(newText)}
        />
        {/* this line show validate output */}
        {Birth_date_check ? <Text style={styles.erorText}>Please enter birth date *format DD/MM/YYYY</Text> : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
           
            onPress={EditProfile}
            style={styles.button}>

            <Text style={[styles.buttonOutlineText, styles.buttonText]}>Edit</Text>

          </TouchableOpacity>

        </View>
        {/* end */}
      </View>

    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  ontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  inputContainer: {
    width: '80%',
    marginTop: 100,
    marginLeft: 40,
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
