Page({
	data: {
		avatarUrl: "/images/center/login.png",
		userInfo: {},
		canIUseGetUserProfile: true,
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
	getUserInfo() {
		wx.getUserProfile({
			lang: "zh",
			desc: "获取用户授权",
			success: res => {
				console.log("userProfile", res);
				const userInfo = JSON.parse(res.rawData);
				this.setData({
					userInfo: userInfo,
					avatarUrl: userInfo.avatarUrl,
					canIUseGetUserProfile: false,
				});
			},
			fail: res => {
				console.log("获取失败", res);
			},
		});
		// wx.getSetting({
		// 	complete: res => {
		// 		console.log(res);
		// 	},
		// });
		// wx.getUserInfo({
		// 	complete: res => {
		// 		const userInfo = JSON.parse(res.rawData);
		// 		console.log(userInfo.avatarUrl);
		// 		this.setData({
		// 			userInfo: userInfo,
		// 			avatarUrl: userInfo.avatarUrl,
		// 		});
		// 	},
		// });
	},
	getInfo() {
		wx.login({
			success: res => {
				wx.getUserInfo({
					success: res => {
						console.log("userProfile", res);
						const userInfo = JSON.parse(res.rawData);
						this.setData({
							userInfo: userInfo,
							avatarUrl: userInfo.avatarUrl,
							canIUseGetUserProfile: false,
						});
					},
					fail: res => {
						console.log("获取失败", res);
					},
				});
			},
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
