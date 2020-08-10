import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

import { ReactComponent as IncreaseChevron } from "../assets/increase-chevron.svg";
import { ReactComponent as DecreaseChevron } from "../assets/decrease-chevron.svg";

import { SUMMARY } from "../data";

export const SummaryContent = () => {
  const [showChart, setShowChart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowChart(true);
    }, 500);
  });
  return (
    <div className="summary-content">
      <div className="text-block">
        <div className="text-block-number">{SUMMARY.new_prods.amount}</div>
        <div className="text-block-title">New products</div>
        <div className="progress-icon">
          {SUMMARY.new_prods.increased ? (
            <IncreaseChevron />
          ) : (
            <DecreaseChevron />
          )}
        </div>
      </div>
      <div className="text-block">
        <div className="text-block-number">{SUMMARY.avg_sent.amount}%</div>
        <div className="text-block-title">Average sentiment score</div>
        <div className="progress-icon">
          {SUMMARY.avg_sent.increased ? (
            <IncreaseChevron />
          ) : (
            <DecreaseChevron />
          )}
        </div>
      </div>
      <div>
        <div style={{ height: 150, width: 150 }}>
          {showChart && (
            <PieChart
              animate
              animationDuration={500}
              animationEasing="ease-out"
              data={[
                {
                  color: "#56CD38",
                  title: "Positive",
                  value: SUMMARY.sent_brkdown.positive * 100,
                },
                {
                  color: "#E76F6F",
                  title: "Negative",
                  value: SUMMARY.sent_brkdown.negative * 100,
                },
              ]}
              labelPosition={100}
              lengthAngle={360}
              //   viewBoxSize={[200, 200]}
              lineWidth={20}
              label={({ dataEntry }) =>
                dataEntry.title + ", " + dataEntry.value + "%"
              }
              labelStyle={(index) => ({
                fontSize: "8px",
                fontFamily: "Inter",
                textShadow: "1px 0px 0px white, 0px 1px 0px white",
              })}
            />
          )}
        </div>
        <div
          className="text-block-title"
          style={{ marginTop: 16, textAlign: "center" }}
        >
          Sentiment breakdown
        </div>
      </div>
    </div>
  );
};
