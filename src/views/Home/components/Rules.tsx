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
  min-height: 376px;
  background-size: cover;
  align-items: center;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: 8px;
`

// toChange

const Rules = () => {
  const TranslateString = useI18n()

  return (
    <StyledRules>
      <CardBody>
        <Heading color="white" size="xl" mb="36px">
          Features and Information
        </Heading>
        <ul>
          <Row><li> Emission Reduction Mechanism </li></Row>
          <Row><li> Buyback and Burn Mechanism </li></Row>
          <Row><li> 2% Transfer Tax for Price Stability</li></Row>
          <Row><li> Anti Whale of 1.5% </li></Row>
          <Row><li> Liquidity will be locked </li></Row>
          <Row><li> Removal of Migrator Code</li></Row>
          <Row><li> HIGH RISK. DYOR and Invest with Money you can lose</li></Row>
        </ul>
      </CardBody>
    </StyledRules>
  )
}

export default Rules
