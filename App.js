

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CustomAnimationProgress from './CustomAnimationProgress';

class App extends React.Component {

  render() {

    return (

      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}>

          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 100,
            backgroundColor: 'white'

          }}>

            <CustomAnimationProgress
              percent={80}
              width={300} //numeric only
              height={14}
            />




          </View>

        </ScrollView>
      </SafeAreaView>

    )
  }

};

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    width: "100%",
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
