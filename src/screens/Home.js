import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import Button from '../components/Button';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const COLORS = {
  primary: '#A43333',
  secondary: '#5CB85F',
  darker: '#121212',
  lighter: '#ffffff'
};

const ButtonIcon = ({ icon, title, borderRadius }) => (
  <Button style={{borderRadius: borderRadius}}>
    <View style={styles.iconWrapper}>
      <Icon name={icon} size={25} color="#fff" />
    </View>
    <Text style={styles.iconText}>{title}</Text>
  </Button>
);

function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.darker : COLORS.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <FocusAwareStatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.primary}
      />
      <FlatList 
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View style={styles.headerContainer}>
                <View>
                  <Text style={styles.headerText}>Hi, </Text>
                  <Text style={styles.headerTextLocation}>Your Location</Text>
                </View>
                <View >
                  <Image style={styles.imageRounded} source={{ uri: "https://i.pravatar.cc/100" }} width={50} height={50} />
                </View>
              </View>
              {/* banner */}
              <View style={{
                ...styles.headerContainer,
                ...styles.bannerContainer
              }}>
                <View style={styles.bannerDesc}>
                  <Text style={styles.bannerText}>Sewa Mobil Berkualitas di kawasanmu</Text>
                  <Button
                    borderRadius={6}
                    color={COLORS.secondary}
                    title='Sewa Mobil'
                  />
                </View>
                <View style={styles.bannerImage}>
                  <Image source={require('../assets/images/img_car.png')} width={50} height={50} />
                </View>
              </View>
            </View>
            <View style={styles.iconContainer}>
              <ButtonIcon icon="truck" title="Sewa Mobil" />
              <ButtonIcon icon="box" title="Oleh-Oleh" />
              <ButtonIcon icon="key" title="Penginapan" />
              <ButtonIcon icon="camera" title="Wisata" />
            </View>
          </>
        }
        renderItem={({ item }) =>
          <CarList
            key={item.id}
            image={{ uri: item.img }}
            carName={item.name}
            passengers={item.seat}
            baggage={item.baggage}
            price={item.price}
            onPress={() => navigation.navigate('Detail', { id: item.id })}
          />
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    height: 150,
    paddingBottom: 20,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', // posisi horizontal
    alignItems: 'center', // posisi
    padding: 10,
  },
  imageRounded: {
    borderRadius: 30,
  },
  headerText: {
    color: COLORS.lighter,
    fontWeight: 700,
    fontSize: 12
  },
  headerTextLocation: {
    color: COLORS.lighter,
    fontWeight: 700,
    fontSize: 14
  },
  bannerContainer: {
    borderRadius: 10,
    padding: 0,
    backgroundColor: '#AF392F',
    marginHorizontal: 10,
    flexWrap: 'wrap',
    position: 'absolute',
    top: 80, 
    left: 5,
    right: 5,
  },
  bannerText: {
    fontSize: 16,
    marginBottom: 10,
    color: COLORS.lighter,
  },
  bannerDesc: {
    paddingHorizontal: 10,
    width: '40%',
  },
  iconContainer: {
    marginTop: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  iconWrapper: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 15
  },
  iconText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 700,
    minWidth: 65,
    marginTop: 5,
    textAlign: 'center'
  }
});

export default Home;
