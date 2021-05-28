import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Alert,
    TextInput,
    ScrollView
} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const createAccScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Tạo{'\n'}Tài khoản.</Text>
                    <View style={{width:80,backgroundColor:'#3BBCF8',height:3,borderRadius:4}}></View>
                </View>
                <View style={styles.body1}>
                    <TextInput multiline={false} style={styles.input} placeholder='Tên đầy đủ' />
                    <TextInput multiline={false} style={styles.input} placeholder='Email' />
                    <TextInput multiline={false} style={styles.input} placeholder='Mật khẩu' />
                </View>
                <View style={styles.body2}>
                    <Pressable
                        style={styles.button}
                    >
                        <Text style={styles.buttonTitle}>TẠO TÀI KHOẢN</Text>
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footer1}>
                        <Text style={styles.text}>Đã có tài khoản?</Text>
                    </View>
                    <View style={styles.footer2}>
                        <Text style={[styles.text, { color: '#3BBCF8' }]}> Đăng nhập</Text>
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
        flex: 40,
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        fontSize: 18,
        marginBottom: 14,
        width: windowWidth - 40
    },
    body2: {
        flex: 30,
    },
    button: {
        backgroundColor: '#3BBCF8',
        borderRadius: 6,
        paddingVertical: 18,
        width: windowWidth - 40
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 24,
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

export default createAccScreen;
