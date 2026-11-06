import MensagemRepository from '../repositories/MensagemRepository';

class MensagemService {
  constructor() {
    this.repository = new MensagemRepository();
    this.proximoId = 5;
  }

  getMensagens(contatoId) {
    return this.repository.getMensagens(contatoId);
  }

  enviarMensagem(contatoId, texto) {
    if (typeof texto !== 'string' || !texto.trim()) {
      return false;
    }
    this.repository.adicionarMensagem({
      id: this.proximoId++,
      contatoId,
      texto: texto.trim(),
      recebida: false,
    });
    return true;
  }
}

// As telas importam esta mesma instância.
export default new MensagemService();
