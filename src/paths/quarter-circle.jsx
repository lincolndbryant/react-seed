import React from 'react'

export function quarterCircle() {

  return (<g>
      <path d="M50 14
           L 50 86
           A 100 100, 0, 0, 0, 86, 50
           A 100 100, 0, 0, 0, 50, 14
           Z" fill="rgba(1, 0, 0, 0.9)"/>
      <path d="M50 14
          L 50 86
          A 100 100, 0, 0, 0, 86, 50
          A 100 100, 0, 0, 0, 50, 14
          Z" fill="rgba(1, 0, 0, 0.9)" transform="rotate(180)"/>
    </g>
  )
}

