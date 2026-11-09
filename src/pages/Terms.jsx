import LegalDocument from '../components/LegalDocument'
import source from '../../docs/TERMS_AND_CONDITIONS_ZetioUsers.md?raw'

export default function Terms() {
  return <LegalDocument source={source} badge="Legal · Zetio" updated="9 de noviembre de 2026" />
}
