import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Alert,
    ScrollView,
    TextInput,
    Image
} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const loginScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Chào mừng{'\n'}Quay lại.</Text>
                    <View style={{width:80,backgroundColor:'#3BBCF8',height:3,borderRadius:4}}></View>
                </View>
                <View style={styles.body1}>
                    <TextInput multiline={false} style={styles.input} placeholder='Email' />
                    <TextInput multiline={false} style={styles.input} placeholder='Mật khẩu' />
                    <Text style={styles.quenMK}>Quên mật khẩu?</Text>
                </View>
                <View style={styles.body2}>
                    <Pressable
                        style={styles.button}
                    >
                        <Text style={styles.buttonTitle}>TẠO TÀI KHOẢN</Text>
                    </Pressable>
                    <Text style={{textAlign:'center',fontSize:22,marginRight:40,marginVertical:20}}>Hoặc</Text>
                    <Pressable
                        style={[styles.button,{flexDirection:'row',justifyContent:'center',alignItems:'center'}]}
                    >
                        <Image
                            style={{width:35,height:35}}
                            source={require('../image/twitter.png')}
                        />
                        <Text style={styles.buttonTitle}>Đăng nhập bằng Twitter</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.buttonfb,{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}]}
                    >
                        <Image
                            style={{width:35,height:35}}
                            source={require('../image/fb.png')}
                        />
                        <Text style={styles.buttonTitle}>Đăng nhập bằng Facebook</Text>
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footer1}>
                        <Text style={styles.text}>Truy cập lần đầu?</Text>
                    </View>
                    <View style={styles.footer2}>
                        <Text style={[styles.text, { color: '#3BBCF8' }]}> Đăng ký</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
        height: windowHeight - 40,
        width: windowWidth,
        flexDirection: 'column',
        marginHorizontal: 20
    },
    header: {
        flex: 20,
        justifyContent: 'flex-end'
    },
    headerTitle: {
        fontSize: 35
    },
    body1: {
        flex: 35,
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: 18,
        marginBottom: 25,
        width: windowWidth - 40
    },
    quenMK:{
        textAlign:'right',
        marginRight:50,
        color:'gray'
    },
    body2: {
        flex: 35,
    },
    button: {
        backgroundColor: '#3BBCF8',
        borderRadius: 6,
        paddingVertical: 18,
        width: windowWidth - 40
    },
    buttonfb:{
        backgroundColor: '#3B5998',
        borderRadius: 6,
        paddingVertical: 18,
        width: windowWidth - 40
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    footer: {
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 25
    },
    text: {
        fontSize: 16,
    }
})

  
  export default loginScreen;
  