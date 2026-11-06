import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const contatos = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Carla' },
  { id: 4, nome: 'Diego' },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.tela} edges={['left', 'right', 'bottom']}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contato}
            accessibilityRole="button"
            accessibilityLabel={`Abrir conversa com ${item.nome}`}
            onPress={() => navigation.navigate('Chat', { contatoId: item.id, nome: item.nome })}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>Abrir conversa</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#fff' },
  contato: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  nome: { fontSize: 18, color: '#222' },
  descricao: { fontSize: 14, color: '#555', marginTop: 4 },
});
