import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Alert,
    ImageBackground
} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const welcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            style={styles.container}
            source={require('../image/ivan.jpg')}
        >
            <View style={{ backgroundColor: '#90717171', width: windowWidth, height: 300, }}>
                <Text style={styles.text1}>Blog Drama 14</Text>
                <Text style={styles.text1}>Kênh thông tin cho lập trình viên</Text>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable
                        style={({ pressed }) => [styles.button, { backgroundColor: pressed ? 'gray' : 'white' }]}
                        onPress={() => { navigation.navigate('loginScr') }}
                    >
                        <Text style={styles.text2}>LOGIN</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, { marginLeft: 10, backgroundColor: '#3BBCF8', }]}
                        onPress={() => { navigation.navigate('createAccScr') }}
                    >
                        <Text style={[styles.text2, { color: 'white' }]}>CREATE ACCOUNT</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    text1: {
        color: 'white',
        fontSize: 35,
        marginLeft: 20,
        marginBottom: 8,
    },
    button: {
        paddingTop: 20,
        paddingBottom: 20,
        flex: 2,
        borderRadius: 5
    },
    text2: {
        fontSize: 15,
        textAlign: 'center'
    }
});

export default welcomeScreen;