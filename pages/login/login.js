Page({
	data: {
		submitDisable: true,
		protocol: false,
		password: "",
		username: "",
	},

	submitLogin() {
		const { username, password } = this.data;
		console.log(username, password);
	},

	protocolChange(e) {
		this.setData({
			protocol: !this.data.protocol,
		});
		this.changeSubmitDisable();
	},

	usernameChange(e) {
		this.setData({
			username: e.detail.value,
		});
		this.changeSubmitDisable();
	},

	passwordChange(e) {
		this.setData({
			password: e.detail.value,
		});
		this.changeSubmitDisable();
	},

	changeSubmitDisable() {
		const { protocol, username, password } = this.data;
		const res = protocol && username && password;
		this.setData({
			submitDisable: !res,
		});
	},

	makeCall() {
		wx.makePhoneCall({
			phoneNumber: "400-828-6655",
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
