import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CustomHeader = props => {
    return (
        <View>
            <TouchableOpacity>
                <Text>{props.children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CustomHeader;