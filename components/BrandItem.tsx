import Image from 'next/image'
import * as React from 'react'
import styled from 'styled-components'

const BrandItemStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: .3s;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0)
  }
`

type Props = {
  image: string
  title: string
}

const BrandItem: React.FC<Props> = ({ image, title }) => {
  return (
    <BrandItemStyled>
      <Image
        src={image}
        alt={title}
        width="284"
        height="184"
        priority={false}
      />
    </BrandItemStyled>
  )
}

export default BrandItem
