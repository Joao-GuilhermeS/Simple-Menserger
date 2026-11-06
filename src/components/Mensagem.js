import { StyleSheet, Text, View } from 'react-native';

export default function Mensagem({ mensagem, recebida }) {
  return (
    <View style={[styles.balao, recebida ? styles.recebida : styles.enviada]}>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  balao: { maxWidth: '80%', padding: 12, borderRadius: 8, marginVertical: 4 },
  recebida: { alignSelf: 'flex-start', backgroundColor: '#fff' },
  enviada: { alignSelf: 'flex-end', backgroundColor: '#dcf8c6' },
  texto: { fontSize: 16, color: '#222' },
});
