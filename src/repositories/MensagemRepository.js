export default class MensagemRepository {
  constructor() {
    this.mensagens = [
      { id: 1, contatoId: 1, texto: 'Oi! Tudo bem?', recebida: true },
      { id: 2, contatoId: 2, texto: 'Olá! Como você está?', recebida: true },
      { id: 3, contatoId: 3, texto: 'Bom dia!', recebida: true },
      { id: 4, contatoId: 4, texto: 'Oi! Podemos conversar?', recebida: true },
    ];
  }

  getMensagens(contatoId) {
    return this.mensagens.filter((mensagem) => mensagem.contatoId === contatoId);
  }

  adicionarMensagem(mensagem) {
    this.mensagens.push(mensagem);
  }
}
