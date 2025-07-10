import styles from './IndustriesSection.module.css'

export const IndustriesHeader = ({ casesCount }: { casesCount: number }) => (
  <header className={styles.header}>
    <span className={styles.expertise}>EXPERTISE</span>
    <h2 className={styles.title}>
      <span className={styles.industries}>INDUSTRIES</span>
      <span className={styles.weKnowWell}>
        WE KNOW WELL
        <span className={styles.casesCount}>({casesCount})</span>
      </span>
    </h2>
  </header>
)
