import React, { Component } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

class EmotionChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Happy", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
      ],
      COLORS: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],

      RADIAN: Math.PI / 180
    };
  }
  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={this.state.data}
          cx={200}
          cy={200}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          label
        >
          {this.state.data.map((entry, index) => (
            <Cell fill={this.state.COLORS[index % this.state.COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}

export default EmotionChart;
