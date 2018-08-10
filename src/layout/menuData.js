const menu = [
  {
    text: "电池管理",
    link: "1",
    icon: "iconfont icon-dashboard",
    children: [
      {
        text: "电池信息",
        link: "11",
        children: [{
          text: "电池列表",
          link: "/battery"
        },
        {
          text: "恢复拉黑设备",
          link: "/battery/defriend"
        },
        {
          text: "运行状况",
          link: "/battery/run"
        }
        ]
      },
      {
        text: "数据对比",
        link: "/battery/compare"
      },
      {
        text: "告警数据",
        link: "/battery/alarm"
      }
    ]
  },
  {
    text: "配置管理",
    link: "2",
    icon: "iconfont icon-manage",
    children: [{
      text: "报警阈值",
      link: "22",
      children: [{
        text: "按电池型号分类",
        link: "/set/model"
      },
      {
        text: "按企业全局分类",
        link: "/set/company"
      }
      ]
    },
    {
      text: "告警通知",
      link: "23",
      children: [{
        text: "告警接收人",
        link: "/set/receive"
      },
      {
        text: "已添加接收人",
        link: "/set/user"
      },
      {
        text: "外部告警接收人",
        link: "/set/outer"
      }
      ]
    }
    ],
  },
  {
    text: "用户管理",
    link: "/user",
    icon: "iconfont icon-user"
  },
  {
    text: "设备管理",
    link: "3",
    icon: "iconfont icon-device",
    children: [{
      text: "设备列表",
      link: "/device/list"
    },
    {
      text: "恢复拉黑设备",
      link: "/device/defriend"
    },
    {
      text: "设备升级",
      link: "/device/up"
    }
    ]
  }
];
export default menu;
