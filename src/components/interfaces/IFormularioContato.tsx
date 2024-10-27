// src/components/interfaces/IFormularioContato.ts
import { ContatoProps } from './IContato';

export interface FormularioContatoProps {
  contatoAtual: ContatoProps | null;
  onAdicionar: (contato: ContatoProps) => void;
  onEditar: (contato: ContatoProps) => void;
}
