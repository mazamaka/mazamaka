var GmApi = {
  callCSharpHandler: function (calledFunction, callbackFunction, dataObj) {
    var dataObj = {
      calledFunction: calledFunction,
      callbackFunction: callbackFunction,
      data: dataObj
    };
    try {
      return gmApi(JSON.stringify(dataObj));
    } catch (err) {
      return false;
    }
  },

  gmOpenGoogleSearch: function (query) {
    this.callCSharpHandler("google_search", null, [query]);
  },

  gmInstallApp: function (
    icon_url,
    game_name,
    download_url,
    package_name,
    modify_date
  ) {
    if (modify_date != null)
      return this.callCSharpHandler("installapp", null, [
        icon_url,
        game_name,
        download_url,
        package_name,
        modify_date
      ]);
    else
      return this.callCSharpHandler("installapp", null, [
        icon_url,
        game_name,
        download_url,
        package_name
      ]);
  },

  gmOpenApp: function (icon_url, game_name, download_url, package_name) {
    this.callCSharpHandler("openapp", null, [
      icon_url,
      game_name,
      download_url,
      package_name
    ]);
  },

  gmInstallAppGoogle: function (
    icon_url,
    game_name,
    download_url,
    package_name
  ) {
    if (
      this.callCSharpHandler("installapp_google", null, [
        icon_url,
        game_name,
        download_url,
        package_name
      ]) === false
    ) {
      var url = "https://play.google.com/store/apps/details?id=" + package_name;
      window.open(url, "_blank");
    }
  },

  gmOpenUrl: function (url) {
    this.callCSharpHandler("openurl", null, [url]);
  },

  gmGetGuid: function () {
    return this.callCSharpHandler("getguid", null, null);
  },

  gmSendFeedback: function (email, app_name, desc, DownloadURL) {
    this.callCSharpHandler("feedback", null, [
      email,
      app_name,
      desc,
      DownloadURL
    ]);
  },

  gmGetUserToken: function () {
    return this.callCSharpHandler("getusertoken", null, null);
  },

  gmGetEngineVer: function () {
    return this.callCSharpHandler("EngineVersion", null, null);
  },

  gmGetClientVer: function () {
    return this.callCSharpHandler("ClientVersion", null, null);
  },

  gmGetCampaignName: function () {
    return this.callCSharpHandler("CampaignName", null, null);
  },

  gmGetOem: function () {
    return this.callCSharpHandler("get_oem", null, null);
  },
  gmShowWebPage: function (title, url) {
    this.callCSharpHandler("showWebPage", null, [title, url]);
  },
  gmSendFirebaseNotification: function (url) {
    this.callCSharpHandler("sendFirebaseNotification", null, [url]);
  },
  getPikaWorldUserId: function () {
    return this.callCSharpHandler("getPikaWorldUserId", null, null);
  },

  gmDevUrl: function () {
    return this.callCSharpHandler("DevCloudUrl", null, null);
  },
  gmGetLocale: function () {
    return this.callCSharpHandler("GetLocale", null, null);
  },
  gmSetCurrentPikaPoints: function (pika_points) {
    this.callCSharpHandler("currentpikapoints", null, [pika_points]);
  },
  gmSubscribeModule: function (tagList) {
    this.callCSharpHandler("subscribeModule", null, [tagList]);
  },
  gmHandleClick: function (payload) {
    return this.callCSharpHandler("HandleClick", null, [
      JSON.stringify(payload)
    ]);
  },
  gmGetInstalledApps: function () {
    return this.callCSharpHandler("installedapps", null, null);
  },
  gmUpdateQuestRules: function (quest_rules) {
    this.callCSharpHandler("UpdateQuestRules", null, [quest_rules]);
  },
  gmSearchAppCenter: function (searchQuery) {
    this.callCSharpHandler("searchappcenter", null, [searchQuery]);
  },
  gmGetMachineId: function () {
    return this.callCSharpHandler("GetMachineId", null, null);
  },
  gmShowWebPageInBrowser: function (url) {
    return this.callCSharpHandler("ShowWebPageInBrowser", null, [url]);
  },
  gmGetInstalledAppsJsonforJS: function () {
    return this.callCSharpHandler(
      "GetInstalledAppsJsonforJS",
      "installedAppsReceived",
      null
    );
  },
  gmGetGMPort: function () {
    return this.callCSharpHandler("GetGMPort", null, null);
  },
  gmSubscribeToVmSpecificClientTags: function (tagList) {
    this.callCSharpHandler("subscribeToVmSpecificClientTags", null, [tagList]);
  },
  gmChooseandinstallapk: function () {
    return this.callCSharpHandler("chooseandinstallapk", null, null);
  },
  gmInstalledappsforvm: function (vmName) {
    return this.callCSharpHandler("installedappsforvm", null, [vmName]);
  },
  gmRefreshhomehtml: function () {
    return this.callCSharpHandler("refreshhomehtml", null, null);
  },
  gmUninstallApp: function (pkg) {
    return this.callCSharpHandler("uninstallapp", null, [pkg]);
  },
};

function installedAppsReceived(data) {
  var event = new CustomEvent("installedAppsSent", { detail: data });
  window.dispatchEvent(event);
}
