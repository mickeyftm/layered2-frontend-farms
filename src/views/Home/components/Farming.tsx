import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledRules = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-image: url('/images/egg/info.png');
  background-repeat: no-repeat;
  background-position: right;
  min-height: 180px;
  background-size: cover;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 28px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const Link = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 30px;
`

// toChange

const Rules = () => {
  const TranslateString = useI18n()

  return (
    <StyledRules>
      <CardBody>
        <Heading color="white" size="xl" mb="36px">
          Farming Launch
        </Heading>
          <Row> 21st May 3PM GMT</Row>
          <Link>Farming Start<a href="https://bscscan.com/block/countdown/7446000">Countdown</a></Link>
      </CardBody>
    </StyledRules>
  )
}

export default Rules
