// src/components/FormularioContato.types.ts
import { Contato } from '../../Teste Guarida/Contato';

export interface FormularioContatoProps {
  contatoAtual: Contato | null;
  onAdicionar: (contato: Contato) => void;
  onEditar: (contato: Contato) => void;
}
