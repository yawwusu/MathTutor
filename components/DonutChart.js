import React from "react";
import { useD3 } from "../utils/useD3";
import * as d3 from "d3";
import { schemeDark2 } from "d3";

function DonutChart({ data }) {
  const ref = useD3(
    (svg) => {
      const width = 750;
      const height = Math.min(width, 500);
      const radius = Math.min(width, height) / 2;

      const color = d3
        .scaleOrdinal()
        .domain(data.map((d) => d.topic))
        .range(
          d3
            .quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), data.length)
            .reverse()
        );

      const arc = d3
        .arc()
        .innerRadius(radius * 0.67)
        .outerRadius(radius - 1);

      const pie = d3.pie().padAngle(0.005).sort(null).value(100);
      // .value((d) => d.progress);

      const arcs = pie(data);

      svg.attr("viewBox", [-width / 2, -height / 2, width, height]);
      // .style("background", "lightgrey");

      svg
        .selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", (d) => color(d.data.topic))
        .attr("d", arc)
        .append("title")
        .text((d) => `${d.data.topic}: ${d.data.progress.toLocaleString()}`);

      svg
        .append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(arcs)
        .join("text")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .call((text) =>
          text
            .append("tspan")
            .attr("y", "-0.4em")
            .attr("font-weight", "bold")
            .text((d) => d.data.topic)
        )
        .call((text) =>
          text
            .filter((d) => d.endAngle - d.startAngle > 0.25)
            .append("tspan")
            .attr("x", 0)
            .attr("y", "0.7em")
            .attr("fill-opacity", 0.7)
            .text((d) => d.data.progress.toLocaleString())
        );
    },
    [data.length]
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

export default DonutChart;
