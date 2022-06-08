import styled from 'styled-components'
import { string, func } from 'prop-types'
import { Button } from '../button'

export const Quotes = ({ quote, name, onUpdate = () => {} }) => {
  console.log(quote, name)
  return (
    <Wrapper>
      <Quote>"{quote}"</Quote>
      <Speaker>- {name}</Speaker>
      <Button onClick={onUpdate}>Quote No Jutsu</Button>
    </Wrapper>
  )
}

Quotes.propTypes = {
  quote: string,
  name: string,
  onUpdate: func
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Quote = styled.p`
  font-size: 2em;
  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
  flex: 1;
  margin: 0;
  color: black;
`

const Speaker = styled(Quote)`
  text-align: right;
  width: 100%;
  margin-bottom: 50px;
`
