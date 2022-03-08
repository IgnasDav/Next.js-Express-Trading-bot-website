import { LineChart, Line } from "recharts";
const CoinLineChart = ({ data, dataKey, width, height, stroke }) => {
  return (
    <LineChart width={width} height={height} data={data}>
      <Line dataKey={dataKey} stroke={stroke} />
    </LineChart>
  );
};
export default CoinLineChart;
