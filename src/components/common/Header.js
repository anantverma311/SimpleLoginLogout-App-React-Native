// Import library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

//create a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.HeaderText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 35,
        paddingBottom: 15,
        elevation: 2,
        position: 'relative',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0 , height: 2}
    },
    textStyle: {
        fontSize: 20,
        color: '#000'
    }
};

//Make the components available for other parts of the app
export  { Header };
