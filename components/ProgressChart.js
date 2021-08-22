import React from "react";
import { useD3 } from "../utils/useD3";
import * as d3 from "d3";

function ProgressChart({ progress }) {
  const ref = useD3(
    (svg) => {
      const width = 700;
      const height = Math.min(width, 500);
      const radius = Math.min(width, height) / 2;
      const innerRadius = radius * 0.67;
      const outerRadius = radius - 1;
      const nbArcs = 20;
      const data = d3
        .range(nbArcs)
        .map((d, i) => ({ id: "something", progress: progress / nbArcs }))
        .concat({ id: "something", progress: 100 - progress, color: "none" });
      // console.log("data", data);

      svg.attr("text-anchor", "middle").style("font", "12px sans-serif");

      // svg.attr("viewBox", [-width / 2, -height / 2, width, height])
      //   .style("background", "lightgrey");

      const defs = svg.append("defs");

      const arcWidth = (outerRadius + innerRadius) / 2;

      // const colorScale = d3
      //   .scaleOrdinal()
      //   .domain([data.map((d) => d.topic)])
      //   .range(
      //     d3
      //       .quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), data.length)
      //       .reverse()
      //   );

      const colorScale = d3
        .scaleDiverging(d3.interpolateRainbow)
        .domain([0, data.length]);

      const tempColor = "rgb(78, 254, 51)";

      const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

      const pie = d3
        .pie()
        // .padAngle(0)
        .sort(null)
        .value((d) => d.progress);

      const arcs = pie(data);
      // console.log("arcs", arcs);

      const gradients = defs
        .selectAll("linearGradient")
        .data(arcs, (d) => d.data.id)
        .join("linearGradient")
        .attr("id", (d) => d.data.id)
        .attr("gradientUnits", (d) => "userSpaceOnUse")
        .attr("x1", (d) => Math.cos(d.startAngle - Math.PI / 2) * arcWidth)
        .attr("y1", (d) => Math.sin(d.startAngle - Math.PI / 2) * arcWidth)
        .attr("x2", (d) => Math.cos(d.endAngle - Math.PI / 2) * arcWidth)
        .attr("y2", (d) => Math.sin(d.endAngle - Math.PI / 2) * arcWidth);

      gradients
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", (d, i) => colorScale(i));

      gradients
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", (d, i) => colorScale(i + 1));

      d3.selectAll("svg > g > *").remove();

      const g = svg
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .attr("fill", "grey");

      g.selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", (d, i) =>
          d.data.color === "none" ? "lightgrey" : colorScale(i)
        )
        .attr("stroke", (d, i) =>
          d.data.color === "none" ? "none" : colorScale(i)
        )
        .attr("stroke-width", "1px")
        .attr("d", arc);

      g.selectAll("text")
        .data([progress])
        .join("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".3em")
        .style("font", "10px sans-serif")
        .style("max-width", "100%")
        .style("height", "auto")
        .attr("text-anchor", "middle")
        .attr("fill", (d) => colorScale(0))
        .text((d) => d + "%")
        .attr("transform", `scale(${innerRadius / 15})`);
    },
    [progress]
  );

  return (
    <svg
      ref={ref}
      // style={{
      //   height: 500,
      //   width: "100%",
      //   marginRight: "0px",
      //   marginLeft: "0px",
      // }}
    ></svg>
  );
}

export default ProgressChart;
