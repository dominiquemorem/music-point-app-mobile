import { StyleSheet, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

export default function RadioGardenScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho roxo com logo */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/logo-music-point.png')} // Substitua pelo caminho do seu logo
          style={styles.logo}
        />
      </View>
      
      {/* Botão Home */}
      <View style={styles.buttonContainer}>
        <Link style={styles.btn} href={"/"}>Home</Link>
      </View>
      
      {/* WebView ocupando o restante da tela */}
      <WebView 
        source={{ uri: 'https://radio.garden/visit/' }}
        style={styles.webview}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#6a0dad',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  logo: {
    height: 100,
    width: 220,
    resizeMode: 'contain',
  },
  buttonContainer: {
    backgroundColor: '#000',
    padding: 10,
  },
  btn: {
    backgroundColor: '#6a0dad',
    padding: 12,
    borderRadius: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
    backgroundColor: '#000',
  },
});