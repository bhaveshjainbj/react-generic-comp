/* eslint-disable no-debugger, no-console */
import React, { useContext, useEffect, useRef, useState } from "react";
// import { Wrapper } from "styled";
// import { useHistory } from "react-router-dom";
// import CONSTANTS from "common/constants";
import { BarChart, PieChart, LineChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  DatasetComponent,
  LegendComponent,
  DataZoomComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { UniversalTransition } from "echarts/features";
import * as echarts from "echarts/core";
import ReactEChartsCore from "echarts-for-react/lib/core";
// import store from "app/store";
// import { setHeaderTitleText } from "components/Header/header.slice";
// import { SummaryService } from "services/api/summary.api";
// import PermissionContext from "services/PermissionManager/PermissionContext";
// import { SignInWrapper } from "./styled";
// import ClientRole from "./Client/ClientsRole";
// import TransactionalChannel from "./Datahub/TransactionalChannel";
// import TransactionalLogs from "./Datahub/TransactionalLogs";
// import TransactionalStatus from "./Datahub/TransactionalStatus";

// export interface Summary {
//   credentials: {
//     total: number;
//     active: number;
//     inactive: number;
//   };
//   clients: {
//     total: number;
//     active: number;
//     inactive: number;
//   };
//   users: {
//     total: number;
//     active: number;
//     inactive: number;
//     pending: number;
//   };
// }

const GenericPieChart = (props: any) => {
  const { data, title, color, backgroundColor} = props;
  const pieChartDom = useRef(null);
  let chartInstance: any = null;

  const getChartOption = () => {
    return {
      title: {
        top: '10%',
        text: title,
        x: "center",
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '85%',
        left: 'center'
        
      },
      series: [
        {
          name: "Access Form",
          type: 'pie',
          radius: ['30%', '60%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderColor: 'black',
            borderWidth: 2,
            backgroundColor: backgroundColor
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold',
            }
          },
          labelLine: {
            show: false
          },
          data,
        }
      ],
      color,
    };
  };

  echarts.use([
    CanvasRenderer,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    DatasetComponent,
    PieChart,
    BarChart,
    LegendComponent,
    LineChart,
    UniversalTransition,
    DataZoomComponent,
  ]);
  
  return (
    <div className="d-flex flex-column">
      <div>
        <div className="container flex-grow-1">
          <div className="row card-wrapper mb-3">
            <ReactEChartsCore
              echarts={echarts}
              option={getChartOption()}
              className="echart-wrapper"
              lazyUpdate
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPieChart;
