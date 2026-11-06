# Simple Menserger

Aplicativo simples com React Native, Expo e React Navigation. As mensagens ficam em memória e são separadas por contato. Reiniciar o aplicativo apaga os envios.

## Instalar e executar

Requer Node.js LTS e Expo Go compatível com o SDK 58.

```sh
npm install
npm start
```

Leia o QR code com Expo Go no celular, na mesma rede do computador. Para um emulador Android já configurado, use `npm run android`. O simulador iOS exige macOS.

## Testar

1. Abra cada um dos quatro contatos e confira seu nome no cabeçalho.
2. Confira a mensagem recebida à esquerda.
3. Envie uma mensagem: ela deve aparecer à direita e limpar o campo.
4. Deixe o campo vazio ou apenas com espaços: Enviar deve ficar desativado.
5. Volte e abra outro contato: o envio não deve aparecer nele.
6. Reabra a conversa original: o envio deve continuar disponível na sessão.
7. Reinicie o aplicativo: apenas as mensagens fictícias iniciais devem aparecer.

Verifique as dependências com `npx expo install --check` e `npx expo-doctor`.

## Estrutura

```text
App.js
src/
  screens/HomeScreen.js
  screens/ChatScreen.js
  components/Mensagem.js
  services/MensagemService.js
  repositories/MensagemRepository.js
```

As telas usam uma única instância de MensagemService. O Service valida o texto e usa MensagemRepository para armazenar as mensagens em um array. Não há API ou banco de dados.
