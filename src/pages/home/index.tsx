import React, { useMemo } from 'react'
import {
  useRecoilValue,
  useRecoilState
} from 'recoil'
import {
  useMdSourceQuery,
  useDividerList
} from '../../models/data'
import {
  Wrapper,
  Para
} from './_components'
import MarkdownIt from 'markdown-it'

function Markdown() {
  const mdSource: string[] = useRecoilValue(useMdSourceQuery)
  const [dividerList, setDividerList] = useRecoilState(useDividerList)
  const markdownIt = useMemo(() => new MarkdownIt(), [])

  function setDivider(index: number) {
    const nextDividerList = {
      ...dividerList,
      [index]: true
    }

    setDividerList(nextDividerList)
  }

  function handleSave() {
    const slideReadyData: any[] = []
    let pageIndex: number = 0

    mdSource.forEach((item, index) => {
      if (!slideReadyData[pageIndex]) {
        slideReadyData[pageIndex] = {
          data: []
        }
      }

      slideReadyData[pageIndex].data.push(item)

      if (dividerList[index]) {
        pageIndex += 1
      }
    })

    console.log(slideReadyData)
  }

  return (
    <Para>
      {mdSource.map((item, index) => (
        <li key={index}>
          <p dangerouslySetInnerHTML={{ __html: markdownIt.render(item) }}></p>
          <button onClick={() => setDivider(index)}>set divider</button>
          {dividerList[index] && (<hr />)}
        </li>
      ))}
      <button onClick={handleSave}>SAVE</button>
    </Para>
  )
}

export default function() {

  return (
    <Wrapper>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Markdown />
        <button> SAVE </button>
      </React.Suspense>
    </Wrapper>
  )
}