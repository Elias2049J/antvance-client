import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./Chart.css";

function Chart({ data = [], dataKey = "", name = "Métricas", unit = "" }) {
  return (
    <div className="chart">
      <h2 className="chart-title">{name}</h2>
      <div className="chart-content">
        {data && data.length > 0 && dataKey ? (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="timestamp" />
              <YAxis unit={unit} />
              <Tooltip />
              <Line type="monotone" dataKey={dataKey} stroke="#4f46e5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <span>No hay datos para mostrar</span>
        )}
      </div>
    </div>
  );
}

export default Chart;