import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

function cunstomBtn1(onPress) {
    return (
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={onPress}
        >
            <Text style={styles.btnText}>我是通用按钮1->点我</Text>
        </TouchableOpacity>
    )
}

function cunstomBtn11(onPress) {
    return (
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={onPress}
        >
            <Text style={styles.btnText}>我是通用按钮11->点我</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: 'green',
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
    }
});

module.exports = {
    cunstomBtn1,
    cunstomBtn11
}