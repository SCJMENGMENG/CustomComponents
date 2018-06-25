import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

function cunstomBtn1(bg_styles,onPress) {
    return (
        <TouchableOpacity
            style={bg_styles}
            onPress={onPress}
        >
            <Text style={styles.btnText}>我是通用按钮1->点我</Text>
        </TouchableOpacity>
    )
}

function cunstomBtn11(bg_styles,onPress) {
    return (
        <TouchableOpacity
            style={bg_styles}
            onPress={onPress}
        >
            <Text style={styles.btnText}>我是通用按钮11->点我</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: 'white',
        fontSize: 16,
    }
});

module.exports = {
    cunstomBtn1,
    cunstomBtn11
}