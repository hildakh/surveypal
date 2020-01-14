import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import Box from '@material-ui/core/Box';

export default function Graph() {
  return (
    <div style={{ width: '100%', height: '40em', backgroundColor: 'f9fbe7', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

      <Box boxShadow={3} data-aos="fade-right" style={{ backgroundColor: 'white', width: '40%', height: '70%', margin: '3%', borderRadius: '3%' }}>
        <Chart
          style={{ margin: '0 auto', marginTop: '7%' }}
          width={'90%'}
          height={'90%'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'Total', 'Sheltered', 'Unsheltered'],
            ['2011', 1581, '1,427', '154'],
            ['2012', 1602, '1,296', '306'],
            ['2013', 1600, '1,327', '273'],
            ['2014', 1803, '1,267', '536'],
            ['2015', 1746, '1,258', '488'],
            ['2016', 1847, '1,308', '539'],
            ['2017', 2138, '1,601', '537'],
            ['2018', 2181, '1,522', '659'],
            ['2019', 2223, '1,609', '614'],
          ]}
          options={{
            chart: {
              title: 'Vancouver Homeless Population Trends 2011 to 2019',
            },
          }}
        />
      </Box>
      <Box boxShadow={3} data-aos="fade-right" style={{ backgroundColor: 'white', width: '40%', height: '70%', margin: '3%', borderRadius: '3%' }}>
        <Chart
          style={{ margin: '0 auto', marginTop: '7%' }}
          width={'90%'}
          height={'90%'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Addiction', 'Counts'],
            ['No Addictions', 31],
            ['Cigarettes', 38],
            ['Opioids', 33],
            ['Methamphetamine', 29],
            ['Alcohol', 22],
            ['Marijuana', 21],
            ['Cocaine', 14],
            ['Other', 5],

          ]}
          options={{
            title: 'Types of Addictions Issues 2019',
            animation: {
              startup: true,
              easing: 'linear',
              duration: 1500,
            },
            enableInteractivity: false,
          }}
          chartEvents={[
            {
              eventName: 'animationfinish',
              callback: () => {
                console.log('Animation Finished')
              },
            },
          ]}
          rootProps={{ 'data-testid': '1' }}
        />
      </Box>
    </div>
  )
}