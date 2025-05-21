import { Image, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho roxo */}
      <View style={styles.header}>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Image
          source={require('@/assets/images/logo-music-point.png')}
          style={styles.mainImage}
        />
        {/* <ThemedText style={styles.title}>Music Point</ThemedText> */}
        <ThemedText style={styles.subtitle}>O melhor da música, num só lugar!</ThemedText>

        <Link href="./radios" style={styles.radioButton}>
          <ThemedText style={styles.buttonText}>Acessar Rádios</ThemedText>
        </Link>

        <Link href="/about-us" style={styles.radioButton}>
          <ThemedText style={styles.buttonText}>Sobre o App</ThemedText>
        </Link>
      </View>

      {/* Rodapé roxo */}
      <View style={styles.footer}>
        <ThemedText style={styles.footerText}>© 2025 Music Point App</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#fffff',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 30,
    textAlign: 'center',
  },
  mainImage: {
    width: 250,
    height: 250,
    marginBottom: 0,
    resizeMode: 'contain',
  },
  radioButton: {
    backgroundColor: '#6a0dad',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6a0dad',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#fffff',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});