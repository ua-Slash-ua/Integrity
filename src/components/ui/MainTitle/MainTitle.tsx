import React from 'react'
import s from './MainTitle.module.css'

const MainTitle = ({ title }: { title: string }) => {
  return (
    <h2 className={s.mainTitle}>
      {title
        ? title.split(/(\[\[.*?\]\])/g).map((part, i, arr) => {
            if (part.startsWith('[[') && part.endsWith(']]')) {
              // Додаємо <br /> лише якщо попередня частина закінчується на '>'
              const prevPart = arr[i - 1]
              const needBr = prevPart && prevPart.trim().endsWith('>')
              return (
                <React.Fragment key={i}>
                  {needBr && <br />}
                  <span>{part.slice(2, -2).trim()}</span>
                </React.Fragment>
              )
            }
            // Якщо наступна частина це [[...]], обрізаємо кінець '>'
            const nextPart = arr[i + 1]
            if (nextPart && nextPart.startsWith('[[') && part.trim().endsWith('>')) {
              return part.replace(/\s*>\s*$/, '')
            }
            return part
          })
        : null}
    </h2>
  )
}

export default MainTitle
