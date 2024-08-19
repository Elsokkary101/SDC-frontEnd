import {
  FaHouseChimney,
  FaList,
  FaChartBar,
  FaCubes,
  FaMoneyBill,
  FaChartPie,
} from "react-icons/fa6";

export const sidebarData = [
  {
    name: "Dashboard",
    icon: FaHouseChimney,
  },
  {
    name: "Products",
    icon: FaCubes,
  },
  {
    name: "Orders",
    icon: FaList,
  },
  {
    name: "Analytics",
    icon: FaChartBar,
  },
];

export const infoCardData = [
  {
    title: "Orders",
    series: [{ name: "Expenses", data: [10, 25, 15, 30, 12, 15, 20] }],
    value: "62",
    icon: FaList,
    time: "Last 24 hours",
    color: "rgb(63, 76, 119)",
  },
  {
    title: "Sales",
    value: "75",
    icon: FaChartPie,
    series: [
      {
        name: "sales",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
    time: "Last 24 hours",
    color: "green",
  },
  {
    title: "Revenue",
    value: "88",
    series: [
      {
        name: "Revenue",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    icon: FaMoneyBill,
    time: "Last 24 hours",
    color: "orange",
  },
];

export const data_chart = {
  options: {
    chart: {
      type: "area",
      height: "auto",
    },

    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },

    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  },
};

const OrderStatus= {
  Delivered : "Delivered",
  Pending:  "Pending",
  Cancelled : "Cancelled",
}

export const orderData = [
  {
    orderId: 1232223,
    customerName: "John Doe",
    date: "20/12/2024",
    status: OrderStatus.Delivered,
    total: 100,
  },
  {
    orderId: 9320723,
    customerName: "Aly Hassan",
    date: "10/12/2024",
    status: OrderStatus.Delivered,
    total: 210,
  },
  {
    orderId: 7892827,
    customerName: "Mohamed Salah",
    date: "15/12/2024",
    status: OrderStatus.Cancelled,
    total: 324,
  },
  {
    orderId: 9338332,
    customerName: "salah",
    date: "12/12/2024",
    status: OrderStatus.Delivered,
    total: 999,
  },
  {
    orderId: 234322,
    customerName: "Rahmaa alaa",
    date: "15/12/2024",
    status: OrderStatus.Pending,
    total: 651,
  },
  {
    orderId: 2139938,
    customerName: "Sha3ban Abdelrahim",
    date: "11/12/2024",
    status: OrderStatus.Pending,
    total: 200,
  },
  {
    orderId: 3420044,
    customerName: "Mohamed Gamal",
    date: "13/12/2024",
    status: OrderStatus.Delivered,
    total: 400,
  },
  {
    orderId: 1232399,
    customerName: "Amr Murad",
    date: "12/12/2024",
    status: OrderStatus.Cancelled,
    total: 700,
  },
];