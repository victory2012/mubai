export default {
  accountType: (type) => {
    let str = type.toString();
    switch (str) {
      case "1":
        return "平台管理员";
      case "2":
        return "管理员";
      case "3":
        return "用户";
      default:
        return "未知";
    }
  }
};
