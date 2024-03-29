import React from 'react'
import QuoteSvg from '../../assets/svg/quote.svg'

const Right = () => {
  return (
    <>
      <img src={QuoteSvg} alt="Quotes" width={32}/>
      <p className="pb-lg-4 ps-2 right--text">
        An adrenal crisis is life-
        threatening, but hard to
        diagnose. I had a crisis at
        work, and MedicAlert was
        there to tell the EMTs
        exactly what I needed. ”
    </p>
    </>
  )
}

export default Right
