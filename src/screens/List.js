import { useColorScheme, FlatList, SafeAreaView, View, Text } from "react-native";
import { useCallback } from 'react';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import CarList from "../components/CarList";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

const COLORS = {
    primary: '#A43333',
    secondary: '#5CB85F',
    darker: '#121212',
    lighter: '#ffffff'
};

function ListScreen() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? COLORS.darker : COLORS.lighter,
    };
    return(
        <SafeAreaView style={backgroundStyle}>
            <FocusAwareStatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={COLORS.lighter}
            />
        <FlatList/>
        <View>
            <Text>Its List</Text>
        </View>
        </SafeAreaView>
    )
}

export default ListScreen;