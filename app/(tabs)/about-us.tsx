import { Image, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho roxo com botão de voltar */}
      <View style={styles.header}>
        {/* <Link href="/" style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Link> */}
        
        <View style={{ width: 24 }} /> {/* Espaço para alinhamento */}
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <ThemedText style={styles.title}>Sobre o Music Point</ThemedText>
        
        <Image
          source={require('@/assets/images/logo-music-point.png')}
          style={styles.mainImage}
        />

        <ThemedText style={styles.description}>
          O Music Point é a sua plataforma completa de experiências musicais:
        </ThemedText>

        <View style={styles.featureItem}>
          <Ionicons name="radio" size={20} color="#6a0dad" />
          <ThemedText style={styles.featureText}>Rádios globais em tempo real</ThemedText>
        </View>

        <View style={styles.featureItem}>
          <Ionicons name="search" size={20} color="#6a0dad" />
          <ThemedText style={styles.featureText}>Identificação instantânea de músicas</ThemedText>
        </View>

        <View style={styles.featureItem}>
          <Ionicons name="musical-notes" size={20} color="#6a0dad" />
          <ThemedText style={styles.featureText}>Integração com o Spotify</ThemedText>
        </View>

        <View style={styles.featureItem}>
          <Ionicons name="chatbubble-ellipses" size={20} color="#6a0dad" />
          <ThemedText style={styles.featureText}>Chatbot musical inteligente</ThemedText>
        </View>
        <ThemedText style={styles.finalText}>
          Tudo projetado para os verdadeiros amantes da música!
        </ThemedText>
      </View>
      <View style={styles.buttonContainer}>
              <Link style={styles.btn} href={"/"}>Home</Link>
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
    backgroundColor: '#6a0dad',
    paddingVertical: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25,
    textAlign: 'center',
  },
  mainImage: {
    width: 220,
    height: 220,
    marginBottom: 25,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: '80%',
  },
  featureText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 10,
  },
  finalText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 22,
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
  backButton: {
    padding: 5,
  },
  footer: {
    marginTop: 5,
    backgroundColor: '#6a0dad',
    padding: 12,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});