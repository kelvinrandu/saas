'use client'; // if you use app dir, don't forget this line

import dynamic from 'next/dynamic';
//@ts-ignore
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function ExampleChart(props: any) {
  const { chartData, chartOptions } = props;

  return (
    <>
      <ApexChart
      //@ts-ignore
        type="line"
        options={chartOptions}
        series={chartData}
        height="100%"
        width="100%"
      />
    </>
  );
}
