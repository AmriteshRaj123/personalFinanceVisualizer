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
import type { Transaction } from '@/app/page';

type ExpensesChartProps = {
  transactions: Transaction[];
};

export default function ExpensesChart({ transactions }: ExpensesChartProps) {
  const monthlyData = transactions.reduce((acc: Record<string, number>, curr) => {
    const month = new Date(curr.date).toLocaleString('default', {
      month: 'short',
      year: '2-digit',
    });
    acc[month] = (acc[month] || 0) + curr.amount;
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

  if (chartData.length === 0) {
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
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          formatter={(value: number) => [`$${value.toFixed(2)}`, 'Total']}
        />
        <Bar dataKey="total" fill="hsl(var(--primary))" />
      </BarChart>
    </ResponsiveContainer>
  );
}