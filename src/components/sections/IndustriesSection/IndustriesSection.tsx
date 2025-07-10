import styles from './IndustriesSection.module.css'
import { IndustriesGrid } from './IndustriesGrid'
import { IndustriesHeader } from './IndustriesHeader'

export const IndustriesSection = () => (
  <section className={styles.section}>
    <IndustriesHeader casesCount={5} />
    <IndustriesGrid />
  </section>
)
