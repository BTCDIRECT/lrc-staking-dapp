import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Chart from 'react-apexcharts';
import Skeleton from '@material-ui/lab/Skeleton';

import extProps from './propTypes';
import ShortAddressCopyButton from '../ShortAddressCopyButton';
import StakeProfileMenu from './BlockiesMenu';
import AmountSpan from './AmountSpan';

const defaultOption = {
  chart: {
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ['#5383ff'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    color: '#5383ff',
    gradient: {
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0,
      shade: 'light',
      shadeIntensity: 0.3,
      stops: [0, 100],
      type: 'vertical',
    },
  },
  labels: [],
  legend: {
    show: false,
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      endingShape: 'rounded',
      horizontal: false,
    },
  },
  stroke: {
    color: '#495368',
    curve: 'smooth',
    show: true,
    width: 2,
  },
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  yaxis: {
    min: 0,
  },
};
const defaultData = [
  {
    data: [],
    name: 'Token',
  },
];

const Profile = React.memo(({
  classes, messages, walletAddress, stake, pendingReward, tokenAge,
  stakeTotal, feesTotal, share, tokenAgeList, onEditAddress, onLogout, isLoading, isChartLoading,
}) => {
  const [chartData, setChartData] = useState(defaultData);
  const [chartOption, setChartOption] = useState(defaultOption);

  useEffect(() => {
    if (!!tokenAgeList && !!tokenAgeList.length && !chartData[0].data.length) {
      setChartOption({
        ...chartOption,
        labels: tokenAgeList.map((_, i) => `${tokenAgeList.length - i} Day`),
      });
      setChartData([{
        ...chartData[0],
        data: tokenAgeList,
      }]);
    }
  }, [tokenAgeList, chartOption, chartData, setChartData, setChartOption]);

  return (
    <>
      <StakeProfileMenu
        messages={messages}
        walletAddress={walletAddress}
        onLogout={onLogout}
        onEditAddress={onEditAddress}
      />
      <ShortAddressCopyButton messages={messages} walletAddress={walletAddress} />
      <div className={classes.divYourStake}>
        <AmountSpan title={messages['Your Stake']} number={stake} messages={messages} isShowLoopring isXl isLoading={isLoading} />
      </div>

      <div className="divider my-4" />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <AmountSpan title={messages['Your Pending Reward']} number={pendingReward} isShowLoopring isLoading={isLoading} />
        </Grid>
        <Grid item xs={6}>
          <AmountSpan title={messages['Your Token Age']} number={tokenAge} isDay format="(0.0a)" isLoading={isChartLoading} />
        </Grid>
      </Grid>
      <div className="divider my-4" />
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <AmountSpan title={messages['Total Stake']} number={stakeTotal} isShowLoopring isLoading={isLoading} />
        </Grid>
        <Grid item xs={4}>
          <AmountSpan title={messages['Total Reward']} number={feesTotal} isShowLoopring isLoading={isLoading} />
        </Grid>
        <Grid item xs={4}>
          <AmountSpan title={messages['Your Share']} number={share} isPercent isLoading={isChartLoading} format="(0.000a)" />
        </Grid>
      </Grid>
      <div className="divider my-4" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <div className="card-header border-0 d-block">
            <span className="text-uppercase pb-1 pt-1 text-black d-block text-center font-weight-bold font-size-lg">
              {messages['Staked Tokens Age Distribution']}
            </span>
          </div>
          { !!chartData[0].data.length && !isChartLoading ? (
            <Chart
              options={chartOption}
              series={chartData}
              type="area"
              height={150}
            />
          ) : (<Skeleton height={150} />)}
        </Grid>
      </Grid>
    </>
  );
});

Profile.propTypes = extProps;

export default Profile;
