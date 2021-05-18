import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledFarming = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-color: #f4c609;
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
  color: #000000;
  font-weight: 600;
`
const Press = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: 8px;
  bottom: 14px;
  color: #FFFFFF;
`

// toChange

const Farming = () => {
  const TranslateString = useI18n()

  return (
    <StyledFarming>
      <CardBody>
        <Heading color="white" size="xl" mb="36px">
          Farming Launch
        </Heading>
        <Row>21st May Friday 1PM UTC</Row>
        <Press><a href="https://bscscan.com/block/countdown/7603000">Click for Countdown Here (Block 7603000)</a></Press>
      </CardBody>
    </StyledFarming>
  )
}

export default Farming
