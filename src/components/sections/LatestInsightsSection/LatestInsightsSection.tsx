import React from 'react'
import styles from './LatestInsightsSection.module.css'

const posts = [
  {
    image: 'images/pointing-graph-projection-screen.png',
    badge: 'NEWS',
    reading: '5 minutes reading',
    date: '25.05.2025',
    title: 'WHY YOUR MARKETING STRATEGY FEELS OFF — AND HOW TO FIX IT',
    excerpt: 'How to spot the weak points and adjust your strategy…',
  },
  {
    image: 'images/two-business.png',
    badge: 'ARTICLE',
    reading: '5 minutes reading',
    date: '25.05.2025',
    title: 'HOW TO PLAN A PAID CAMPAIGN WITHOUT BURNING THE BUDGET',
    excerpt: 'Key things to check before launching your first ad…',
  },
  {
    image: 'images/websites-with.png',
    badge: 'ARTICLE',
    reading: '5 minutes reading',
    date: '25.05.2025',
    title: 'HOW TO READ AD DATA LIKE A STRATEGIST',
    excerpt: 'Where to focus when every metric looks important…',
  },
]

export default function LatestInsightsSection() {
  return (
    <section className={styles.latestInsightsSection}>
      <div className={styles.latestInsightsHeader}>
        <div className={styles.latestInsightsLabel}>ARTICLES</div>
        <h2 className={styles.latestInsightsTitle}>
          LATEST <span className={styles.latestInsightsTitleItalic}>INSIGHTS</span>
        </h2>
      </div>
      <div className={styles.latestInsightsCards}>
        {posts.map((post, idx) => (
          <div className={styles.insightCard} key={idx}>
            <img className={styles.insightCardImage} src={post.image} alt={post.title} />
            <div className={styles.insightCardBadge}>{post.badge}</div>
            <div className={styles.insightCardMeta}>
              <div className={styles.insightCardMetaItem}>
                <img
                  src="/images/icons/revised card.svg"
                  alt="revised card"
                  style={{ width: '1vw', height: '1vw', marginRight: '0.3vw' }}
                />
                {post.reading}
              </div>
              <div className={styles.insightCardMetaItem}>
                <img
                  src="/images/icons/calendar.svg"
                  alt="calendar"
                  style={{ width: '1vw', height: '1vw', marginRight: '0.3vw' }}
                />
                {post.date}
              </div>
            </div>
            <div className={styles.insightCardTitle}>{post.title}</div>
            <div className={styles.insightCardExcerpt}>{post.excerpt}</div>
            <button className={styles.insightCardBtn}>
              <img
                src="/images/icons/revised card.svg"
                alt="revised card"
                className={styles.readMoreIcon}
              />
              <span className={styles.readMoreText}>Read more</span>
            </button>
          </div>
        ))}
      </div>
      <button className={styles.latestInsightsCta}>
        <img
          src="/images/icons/revised card.svg"
          alt="revised card"
          className={styles.readMoreIcon}
        />
        See all Integrity posts
      </button>
    </section>
  )
}
