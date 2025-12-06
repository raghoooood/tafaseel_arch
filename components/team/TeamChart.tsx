"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#D4AF37", "#2A2A2A"]; // Gold + Charcoal

const barData = [
  { name: "Engineering Team", value: 15 },
  { name: "Execution Team", value: 32 },
];

const pieData = [
  { name: "Engineers", value: 15 },
  { name: "Workers", value: 32 },
];

export default function TeamChart() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 mt-12">
      
      {/* BAR CHART */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gold-light/30">
        <h3 className="text-xl font-semibold font-montserrat text-charcoal mb-4">
          Team Size Overview
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#D4AF37" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* PIE / DONUT CHART */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gold-light/30">
        <h3 className="text-xl font-semibold font-montserrat text-charcoal mb-4">
          Workforce Distribution
        </h3>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
              paddingAngle={4}
            >
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
