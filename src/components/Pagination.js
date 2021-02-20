import React from 'react'
import { useAppContext } from '../lib/context'

const Pagination = () => {
  const { context, setContext } = useAppContext()
  const { page, itemsPerPage } = context

  const handlePrev = (e) => {
    e.preventDefault()
    console.log('going back 1 page')
    setContext({
      ...context,
      page: page - 1,
    })
    window.location.href = `/?page=${page - 1}&itemsPerPage=${itemsPerPage}`
  }
  const handleNext = (e) => {
    e.preventDefault()
    console.log('going forward 1 page')
    setContext({
      ...context,
      page: page + 1,
    })
    window.location.href = `/?page=${page + 1}&itemsPerPage=${itemsPerPage}`
  }
  return (
    <div style={{ marginBottom: '10px' }}>
      <div>
        {page > 1 ? (
          <>
            <button onClick={handlePrev}>Prev</button>{' '}
          </>
        ) : null}
        <span>{page}</span> <button onClick={handleNext}>Next</button>
      </div>
      <div>
        Items per page: <input type='number' min={1} max={50} />{' '}
        <button onClick={() => {}}>Set</button>
      </div>
      <div>
        Go to page: <input type='number' min={1} max={50} />{' '}
        <button onClick={() => {}}>Go</button>
      </div>
    </div>
  )
}

export default Pagination
