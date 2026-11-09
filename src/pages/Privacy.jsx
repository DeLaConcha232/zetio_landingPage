import LegalDocument from '../components/LegalDocument'
import source from '../../docs/PRIVACY_POLICY_ZetioUsers.md?raw'

export default function Privacy() {
  return <LegalDocument source={source} badge="Legal · Zetio" updated="9 de noviembre de 2026" />
}
