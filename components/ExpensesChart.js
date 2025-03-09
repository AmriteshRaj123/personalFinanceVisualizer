'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function ExpensesChart({ transactions = [] }) {
  const monthlyData = transactions.reduce((acc, curr) => {
    const month = new Date(curr.date).toLocaleString('default', {
      month: 'short',
      year: '2-digit',
    });
    acc[month] = (acc[month] || 0) + Number(curr.amount);
    return acc;
  }, {});

  const chartData = Object.entries(monthlyData)
    .map(([month, total]) => ({
      month,
      total,
    }))
    .sort((a, b) => {
      const [monthA, yearA] = a.month.split(' ');
      const [monthB, yearB] = b.month.split(' ');
      return (
        new Date(`${monthA} 1, 20${yearA}`).getTime() -
        new Date(`${monthB} 1, 20${yearB}`).getTime()
      );
    });

  if (!transactions || chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-muted-foreground">
        No data to display
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="month"
          tick={{ fill: 'hsl(var(--foreground))' }}
          tickLine={{ stroke: 'hsl(var(--foreground))' }}
          axisLine={{ stroke: 'hsl(var(--foreground))' }}
        />
        <YAxis
          tick={{ fill: 'hsl(var(--foreground))' }}
          tickLine={{ stroke: 'hsl(var(--foreground))' }}
          axisLine={{ stroke: 'hsl(var(--foreground))' }}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          formatter={(value) => [`$${Number(value).toFixed(2)}`, 'Total']}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius)',
          }}
          labelStyle={{ color: 'hsl(var(--foreground))' }}
        />
        <Bar 
          dataKey="total" 
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}