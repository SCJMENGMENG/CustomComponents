import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image, StyleSheet,
} from 'react-native';

const cunstomBtn2 = (onPress) =>{
    return(
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={onPress}
        >
            <Text style={styles.btnText}>我是通用按钮2->点我</Text>
        </TouchableOpacity>
    )
}

const cunstomBtn22 = (onPress) =>{
    return(
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={onPress}
        >
            <Text style={styles.btnText}>我是通用按钮22->点我</Text>
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

export {
    cunstomBtn2,
    cunstomBtn22,
}