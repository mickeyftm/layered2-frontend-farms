import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledContractAddress = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: left;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin-bottom: 8px;
`

// toChange

const ContractAddress = () => {
  const TranslateString = useI18n()

  return (
    <StyledContractAddress>
      <CardBody>
        <Heading color="white" size="xl" mb="24px">
          GrizzlySwap Contract Address
        </Heading>
        <ul>
          <Row><li> Contract Address: <a href="https://bscscan.com/address/0xDf5a096D33dE84b11041A7FF78E7008c328184ab">0xDf5a096D33dE84b11041A7FF78E7008c328184ab</a></li></Row>
          <Row><li> MasterChef: <a href="https://bscscan.com/address/0x6aD77aEB7fc86751f375EA1711Dc2CB25c9d4d16">0x6aD77aEB7fc86751f375EA1711Dc2CB25c9d4d16</a></li></Row>
          <Row><li> TimeLock:  <a href="https://bscscan.com/address/0xF5dA3062EF9786e4C20Cb0de4541D1d00D344eC6">0xF5dA3062EF9786e4C20Cb0de4541D1d00D344eC6</a></li></Row>
          </ul>
          <Row color="#66FCF1"> <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xDf5a096D33dE84b11041A7FF78E7008c328184ab">Purchase GRZ Here</a> </Row>
      </CardBody>
    </StyledContractAddress>
  )
}

export default ContractAddress
