import React from 'react'
import styled from 'styled-components'

const Banner = () => {
    const Section= styled.section`
        .parent{
            width: 100%;
            border: 2px solid red;
            height: 45px;
            background-color:#e74694;
            background-image: url('https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b7e4d7973addf81ed1f4010_pattern.png');
            background-size: 300px;
        }
    `
  return (
    <React.Fragment>
      <Section>
        <div className="parent text-center p-2 sm:text-base xs: text-sm lg:text-base md:text-base xl:text-base 2xl:text-base">
          <p>📣 Figma prototype testing just got a whole lot better! Read more →</p>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Banner
