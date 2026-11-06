import { useRef, useState } from 'react';
import { Button, FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Mensagem from '../components/Mensagem';
import mensagemService from '../services/MensagemService';

export default function ChatScreen({ route }) {
  const { contatoId } = route.params;
  const [mensagens, setMensagens] = useState(() => mensagemService.getMensagens(contatoId));
  const [texto, setTexto] = useState('');
  const lista = useRef(null);
  const headerHeight = useHeaderHeight();

  function enviar() {
    if (mensagemService.enviarMensagem(contatoId, texto)) {
      setMensagens(mensagemService.getMensagens(contatoId));
      setTexto('');
    }
  }

  return (
    <SafeAreaView style={styles.tela} edges={['left', 'right', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.tela}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
      >
        <FlatList
          ref={lista}
          style={styles.lista}
          contentContainerStyle={styles.mensagens}
          data={mensagens}
          keyExtractor={(item) => String(item.id)}
          onContentSizeChange={() => lista.current?.scrollToEnd({ animated: false })}
          renderItem={({ item }) => <Mensagem mensagem={item.texto} recebida={item.recebida} />}
        />
        <View style={styles.formulario}>
          <Text style={styles.rotulo}>Mensagem</Text>
          <View style={styles.linha}>
            <TextInput
              style={styles.campo}
              accessibilityLabel="Mensagem"
              placeholder="Digite uma mensagem"
              value={texto}
              onChangeText={setTexto}
              onSubmitEditing={enviar}
              returnKeyType="send"
            />
            <Button title="Enviar" color="#075e54" onPress={enviar} disabled={!texto.trim()} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#ece5dd' },
  lista: { flex: 1 },
  mensagens: { padding: 16 },
  formulario: { padding: 12, backgroundColor: '#fff' },
  rotulo: { fontSize: 14, color: '#333', marginBottom: 4 },
  linha: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  campo: { flex: 1, minHeight: 48, borderWidth: 1, borderColor: '#777', borderRadius: 8, padding: 12, fontSize: 16, color: '#222' },
});
