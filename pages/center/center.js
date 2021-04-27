Page({
	data: {
		demos: [
			{
				title: "木马远控",
				num: 2,
				assets: "3.4.5.6",
				imageUrl: "/images/center/trojan.png",
			},
			{
				title: "高级黑客",
				num: 3,
				assets: "10.10.10.10",
				imageUrl: "/images/center/bruteForce.png",
			},
		],
	},
	makeCall() {
		wx.makePhoneCall({
			phoneNumber: "400-828-6655",
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
