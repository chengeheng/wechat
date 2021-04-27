Page({
	data: {
		demos: [
			{
				title: "Sangfor005",
				address: "深圳-南山总部",
				broadband: 59,
				cpu: 60,
				ram: 51,
				disc: 87,
			},
		],
	},
	showInfo() {
		wx.showModal({
			title: "说明",
			content:
				"云瞻为您实时监控设备运行情况。TOP3设备； 取自带宽、CPU、内存、磁盘利用率4个指标中TOP3的设备运行数据。",
			confirmText: "我知道了",
			confirmColor: "#408ee9",
			showCancel: false,
		});
	},
	onTrial() {
		wx.showModal({
			title: "如何申请试用？",
			content: `方式1.拨打客服电话：400-806-0282咨询 方式2.注册云瞻账号，在云瞻-产品服务页面，申请试用，请在PC端打开链接：https://ti.hillstonenet.com.cn`,
			confirmText: "知道了",
			confirmColor: "#408ee9",
			showCancel: false,
		});
	},

	jumpToLogin() {
		wx.navigateTo({
			url: "/pages/login/login",
		});
	},
	onLoad(options) {},
	onReady() {},
	onShow() {},
	onHide() {},
	onUnload() {},
	onShareAppMessage() {
		return {
			title: "",
		};
	},
});
