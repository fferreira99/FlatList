import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const dummyArray = [
  {id: '1', value: 'Flamengo', background: require('./assets/img-fla.jpg'), logo: require('./assets/fla-img.png') },
  {id: '2', value: 'Vasco', background: require('./assets/img-vas.jpg'), logo: require('./assets/img-vas.png') },
  {id: '3', value: 'Fluminense', background: require('./assets/img-flu.jpg'), logo: require('./assets/flu-img.png') },
  {id: '4', value: 'Botafogo', background: require('./assets/img-bot.jpg'), logo: require('./assets/bot-img.png') },
];

const App = () => {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <ImageBackground source={item.background} style={styles.backgroundImage}>
          <View style={styles.contentContainer}>
            <Image source={item.logo} style={styles.logo} />
            <Text
              style={styles.itemText}
              onPress={() => getItem(item)}>
              {item.value}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8'
        }}
      />
    );
  };

  const getItem = (item) => {
    if (item.id === '1')
      alert('Campeonato Brasileiro (8 títulos) \n\n 1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020');
    if (item.id === '2')
      alert('Campeonato Brasileiro (4 títulos) \n\n 1974, 1989, 1997 e 2000');
    if (item.id === '3')
      alert('Campeonato Brasileiro (4 títulos) \n\n 1970, 1984, 2010 e 2012');
    if (item.id === '4')
      alert('Campeonato Brasileiro (2 títulos) \n\n 1968, 1995.');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listItems}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  itemContainer: {
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  itemText: {
    fontSize: 45,
    color: 'white', 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 150, // Ajuste conforme necessário
  },
  logo: {
    width: 75,
    height: 75,
    marginHorizontal: 5,
    resizeMode: 'contain', 
  },
});

export default App;
