import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import extProps from './propTypes';
import languageProvider from '../../../../translations';
import {useWeb3React} from "@web3-react/core";
import {Action} from "../../../../components";
import {tokenDoApprove, tokenGetAllowance, tokenGetBalance} from "../../../../redux/features/token/action";
import {stakingDoStake, stakingDoClaim, stakingDoWithdraw} from "../../../../redux/features/staking/action";


const ActionContainer = ({ classes }) => {
  const { library } = useWeb3React();
  const language = useSelector(state => state.settings.language);
  const walletID = useSelector(state => state.settings.walletID);
  const stakingContract = useSelector(state => state.staking.contract);
  const tokenContract = useSelector(state => state.token.contract);
  const walletAddress = useSelector(state => state.settings.walletAddress);
  const yourStake = useSelector(state => state.staking.yourStake);
  const allowance = useSelector(state => state.token.allowance);
  const balance = useSelector(state => state.token.balance);
  const approve = useSelector(state => state.token.approve);
  const stake = useSelector(state => state.staking.stake);
  const claim = useSelector(state => state.staking.claim);
  const withdraw = useSelector(state => state.staking.withdraw);
  const dispatch = useDispatch();
  const getAllowance = useCallback(() => dispatch(tokenGetAllowance(tokenContract, walletAddress.value)), [dispatch, walletAddress]);
  const getBalance = useCallback(() => dispatch(tokenGetBalance(tokenContract, walletAddress.value)), [dispatch, walletAddress]);
  const doApprove = useCallback((amount) => dispatch(tokenDoApprove(tokenContract, walletAddress.value, amount)), [dispatch, walletAddress]);
  const doStake = useCallback((amount) => dispatch(stakingDoStake(stakingContract, walletAddress.value, amount)), [dispatch, walletAddress]);
  const doClaim = useCallback(() => dispatch(stakingDoClaim(stakingContract, walletAddress.value)), [dispatch, walletAddress]);
  const doWithdraw = useCallback((amount) => dispatch(stakingDoWithdraw(stakingContract, walletAddress.value, amount)), [dispatch, walletAddress]);

  useEffect(() => {
    if (!!tokenContract && walletAddress.value && !allowance.isLoading && !allowance.isLoaded) getAllowance();
  }, [tokenContract, walletAddress, allowance, getAllowance]);

  useEffect(() => {
    if (!!tokenContract && walletAddress.value && !balance.isLoading && !balance.isLoaded) getBalance();
  }, [tokenContract, walletAddress, balance, getBalance]);

  const messages = languageProvider[language];

  return (
    <Action messages={messages} allowance={allowance} balance={balance} onApprove={doApprove} approve={approve}
            stake={stake} onStake={doStake} isLocked={walletID === 1} claim={claim} withdraw={withdraw}
            onClaim={doClaim} onWithdraw={doWithdraw} pendingReward={(yourStake.value.pendingReward || 0) / (10 ** 18)}
            yourStake={(yourStake.value.balance || 0) / (10 ** 18)}
            withdrawTime={yourStake.value.withdrawalWaitTime || 90 * 24 * 60 * 60}
            claimTime={yourStake.value.rewardWaitTime  || 90 * 24 * 60 * 60} />
  );
};

ActionContainer.propTypes = extProps;

export default ActionContainer;