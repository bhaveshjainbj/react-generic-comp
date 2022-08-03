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

const Pie = () => {
  const getOption = () => {
    return {
      title: {
        text: "TEST",
        subtext: "SUB TEST",
        x: "center",
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ],
      color: ["red", "darkblue", "yellow", "green", "purple"],
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
              option={getOption()}
              className="echart-wrapper"
              lazyUpdate
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pie;
