$(function () {
  _arabica.setTheme();
  window.addEventListener("installedAppsSent", loadInstalledApps);
  window.GmApi.gmGetInstalledAppsJsonforJS();
  window.GmApi.gmSubscribeToVmSpecificClientTags({
    appInstallUninstallNotification: ["appInstalled", "appUninstalled"],
    appInstallNotifications: [
      "apkInstallStarted",
      "apkInstallCompleted",
      "apkInstallFailed"
    ],
    appDownloadNotification: [
      "apkDownloadStarted",
      "apkDownloadCompleted",
      "apkDownloadFailed",
      "apkDownloadCurrentProgress"
    ],
    vmNameNotification: ["getVmInfo"]
  });
  // window.installedApps = [
  //   { name: "pubg", package: "com.tencent.ig", installFailed: true },
  //   { name: "rok", package: "com.a.b", isDownloading: true, downloadProgress: 10 }
  // ];
  // generateGameList(installedApps);
  // loadInstalledApps({detail: `[{"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}]`})
  // window.installedApps = [];
  // var res = `{"eventRaised": "apkInstallStarted", "extraData": {"PackageName": "com.tencent.ig", "AppName": "pubg" }}`;
  // var res1 = `{"eventRaised": "appInstalled", "extraData": {"PackageName": "com.tencent.ig", "AppName": "pubg" }}`;

  // setTimeout(function(){appInstallNotifications(res)}, 3000);
  // setTimeout(function(){appInstallUninstallNotification(res1)}, 5000);
});

window.vmNameNotification = function (res) {
  var response = JSON.parse(res);
  var vmName = response.vmName;
  var vmId = response.extraData.VmId;
  window.vmInfo = {
    vm_name: vmName,
    vm_id: vmId
  }
}

window.appDownloadNotification = function (res) {
  var response = JSON.parse(res);
  var eventRaised = response.eventRaised;
  var packageName = response.extraData.PackageName;
  var name = response.extraData.AppName;
  var path = response.extraData.ApkUrl;
  var progress = response.extraData.DownloadPercent;
  if (eventRaised === "apkDownloadStarted") {
    var isInstalled = installedApps.find(app => app.package === packageName);
    var isDownloading = installedApps.find(app => app.package === packageName && app.isDownloading);
    if (isDownloading) {
      return;
    }
    else if (isInstalled) {
      installedApps = installedApps.map(function(app) {
        if (app.package === packageName) {
          return {...app, isDownloading: true, downloadFailed: false, downloadSuccess: false};
        }
        else return {...app};
      })
    }
    else {
      var newInstalledApp = {
        isDownloading: true,
        downloadFailed: false,
        package: packageName,
        downloadSuccess: false,
        icon_url:
          "https://cloud.bluestacks.com/app/icon?pkg=" + packageName,
        action: "InstallPlay",
        name: name,
        apkPath: path
      };
      installedApps.push(newInstalledApp);
    }
    generateGameList(installedApps);
  } else if (eventRaised === "apkDownloadCompleted") {
    for (var i = 0; i < installedApps.length; i++) {
      if (installedApps[i].package === packageName) {
        installedApps[i].isDownloading = false;
        installedApps[i].downloadFailed = false;
        installedApps[i].downloadSuccess = true;
        break;
      }
    }
    generateGameList(installedApps);
  } else if (eventRaised === "apkDownloadFailed") {
    for (var i = 0; i < installedApps.length; i++) {
      if (installedApps[i].package === packageName) {
        installedApps[i].isDownloading = false;
        installedApps[i].downloadFailed = true;
        installedApps[i].downloadSuccess = false;
        break;
      }
    }
    generateGameList(installedApps);
  } else if (eventRaised === "apkDownloadCurrentProgress") {
    for (var i = 0; i < installedApps.length; i++) {
      if (installedApps[i].package === packageName) {
        installedApps[i].downloadProgress = progress;
        break;
      }
    }
    generateGameList(installedApps);
  }
};

window.appInstallUninstallNotification = function (res) {
  var response = JSON.parse(res);
  var packageName = response.extraData.PackageName;
  var appName = response.extraData.AppName;
  var eventRaised = response.eventRaised;
  if (eventRaised === "appInstalled") {
    var isInstalled = installedApps.find(app => app.package === packageName);
    if (isInstalled) {
      installedApps = installedApps.map(function(app) {
        if (app.package === packageName) {
          return {...app, isInstalling: false, installFailed: false, installSuccess: true};
        }
        else return {...app};
      })
    }
    else {
      var newInstalledApp = {
        isInstalling: false,
        installFailed: false,
        package: packageName,
        installSuccess: true,
        icon_url:
          "https://cloud.bluestacks.com/app/icon?pkg=" + packageName,
        action: "InstallPlay",
        name: appName,
        apkPath: path
      };
      installedApps.push(newInstalledApp);
    }
    generateGameList(installedApps);
  } else if (eventRaised === "appUninstalled") {
    installedApps = installedApps.filter(app => app.package !== packageName);
    generateGameList(installedApps);
  }
};

window.appInstallNotifications = function (res) {
  var response = JSON.parse(res);
  var eventRaised = response.eventRaised;
  var packageName = response.extraData.PackageName;
  var name = response.extraData.AppName;
  var path = response.extraData.ApkFilePath;
  if (eventRaised === "apkInstallStarted") {
    var isInstalled = installedApps.find(app => app.package === packageName);
    var isInstalling = installedApps.find(app => app.package === packageName && app.isInstalling);
    if (isInstalling) {
      return;
    }
    else if (isInstalled) {
      installedApps = installedApps.map(function(app) {
        if (app.package === packageName) {
          return {...app, isInstalling: true, installFailed: false, installSuccess: false};
        }
        else return {...app};
      })
    }
    else {
      var newInstalledApp = {
        isInstalling: true,
        installFailed: false,
        package: packageName,
        installSuccess: false,
        icon_url:
          "https://cloud.bluestacks.com/app/icon?pkg=" + packageName,
        action: "InstallPlay",
        name: name,
        apkPath: path
      };
      installedApps.push(newInstalledApp);
    }
    generateGameList(installedApps);
  } else if (eventRaised === "apkInstallFailed") {
    for (var i = 0; i < installedApps.length; i++) {
      if (installedApps[i].package === packageName) {
        installedApps[i].isInstalling = false;
        installedApps[i].installFailed = true;
        installedApps[i].installSuccess = false;
        break;
      }
    }
    generateGameList(installedApps);
  }
};

function loadInstalledApps(e) {
  window.installedApps = JSON.parse(e.detail);
  if (installedApps.length) {
    generateGameList(installedApps);
  }
}

function generateGameList(apps) {
  $("#installedApps li:not(:first-child)").remove();
  var port = window.GmApi.gmGetGMPort();
  var gameList = apps.map(function (item) {
    var li = document.createElement("li");
    li.className = "pointer";
    li.style.width = "100px";
    li.addEventListener("click", function () {
      return installApp(item);
    });
    var installedGame = document.createElement("div");
    installedGame.className = "installedGame";
    var image = document.createElement("img");
    image.setAttribute(
      "src",
      "http://localhost:" + port + "/staticicon/" + item.package + ".png"
    );
    var deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = window._arabica.localizedData["delete"];
    deleteButton.addEventListener("click", function () {
      return uninstallApp(item, event);
    });
    var installLoader = document.createElement("div");
    if (item.isInstalling) installLoader.className = "installLoader show";
    else installLoader.className = "installLoader";
    var installFailedContainer = document.createElement("div");
    if (item.installFailed || item.downloadFailed) installFailedContainer.className = "installFailed show";
    else installFailedContainer.className = "installFailed";
    installFailedContainer.addEventListener("click", function () {
      return window.GmApi.gmRetryapkinstall(item.apkPath);
    })
    var retryIcon = document.createElement("p");
    retryIcon.className = "retryIcon";
    var retryText = document.createElement("p");
    retryText.className = "retryText";
    retryText.innerHTML = window._arabica.localizedData["retry"];
    installFailedContainer.appendChild(retryIcon);
    installFailedContainer.appendChild(retryText);
    var downloadingContainer = document.createElement("div");
    if (item.isDownloading) downloadingContainer.className = "downloadProgress show";
    else downloadingContainer.className = "downloadProgress";
    var outerProgress = document.createElement("p");
    outerProgress.className = "outerProgress";
    var innerProgress = document.createElement("p");
    innerProgress.className = "innerProgress";
    innerProgress.style.width = item.downloadProgress + "%";
    outerProgress.appendChild(innerProgress);
    downloadingContainer.appendChild(outerProgress);
    installedGame.appendChild(image);
    installedGame.appendChild(deleteButton);
    installedGame.appendChild(installLoader);
    installedGame.appendChild(installFailedContainer);
    installedGame.appendChild(downloadingContainer);
    li.appendChild(installedGame);
    var gameName = document.createElement("p");
    gameName.className = "bold ellipsis gameName";
    gameName.innerHTML = item.name;
    li.appendChild(gameName);
    if (item.isInstalling) {
      var installTextContainer = document.createElement("p");
      installTextContainer.className = "installText flex vrtlCenter";
      var installText = document.createElement("span");
      installText.innerHTML = window._arabica.localizedData["installingApp"];
      var installIndicator = document.createElement("span");
      installIndicator.className = "installIndicator";
      installTextContainer.appendChild(installIndicator);
      installTextContainer.appendChild(installText);
      li.appendChild(installTextContainer);
    }
    if (item.installSuccess) {
      var installTextContainer = document.createElement("p");
      installTextContainer.className = "installText flex vrtlCenter";
      var installText = document.createElement("span");
      installText.innerHTML = window._arabica.localizedData["newApp"];
      var installIndicator = document.createElement("span");
      installIndicator.className = "installIndicator";
      installTextContainer.appendChild(installIndicator);
      installTextContainer.appendChild(installText);
      li.appendChild(installTextContainer);
    }
    if (item.installFailed) {
      var installTextContainer = document.createElement("p");
      installTextContainer.className = "installText flex vrtlCenter";
      var installText = document.createElement("span");
      installText.innerHTML = window._arabica.localizedData["installFailed"];
      var installIndicator = document.createElement("span");
      installIndicator.className = "installIndicator";
      installTextContainer.appendChild(installIndicator);
      installTextContainer.appendChild(installText);
      li.appendChild(installTextContainer);
    }
    return li;
  });
  $("#installedApps").append(gameList);
}

function installApp(item) {
  if (window.disableClick || item.isInstalling || item.isDownloading || item.installFailed || item.downloadFailed) {
    return false;
  }
  var port = window.GmApi.gmGetGMPort();
  window.GmApi.gmInstallAppGoogle(
    "http://localhost:" + port + "/staticicon/" + item.package + ".png",
    item.name,
    "InstallPlay",
    item.package
  );
}

function uninstallApp(item, event) {
  event.stopPropagation();
  $("#installedApps").css("z-index", 99999);
  $(".deleteButton").fadeOut();
  $(".uninstallPopup").fadeIn();
  window._arabica.currentPackage = item;
}

function uninstallGame() {
  hideDeleteButton();
  var installedGames = window.GmApi.gmInstalledappsforvm(window.vmInfo.vm_name);
  if (
    installedGames &&
    installedGames.indexOf(window._arabica.currentPackage.package) !== -1 &&
    !window._arabica.currentPackage.installFailed
  ) {
    window.GmApi.gmUninstallApp(window._arabica.currentPackage.package);
    installedApps = installedApps.filter(
      app => app.package !== window._arabica.currentPackage.package
    );
  } else {
    installedApps = installedApps.filter(
      app => app.package !== window._arabica.currentPackage.package
    );
  }
  generateGameList(installedApps);
}

function hideDeleteButton() {
  $(".uninstallPopup").fadeOut();
  $(".deleteButton").fadeOut();
  $(".deleteOverlay").fadeOut();
  window.disableClick = false;
}

function openSystemApps() {
  $(".modalContainer").css("display", "flex");
}

function hideSystemApps() {
  $(".modalContainer").css("display", "none");
}

var payload = {
  playStore: {
    click_action_app_activity: ".AssetBrowserActivity",
    click_action_app_icon_id: "google_play_20180914_myapps_1",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/dock_apps/com.android.vending.png",
    click_action_key: "com.android.vending",
    click_action_packagename: "com.android.vending",
    click_action_title: "Google Play Store",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  camera: {
    click_action_app_activity: "com.android.camera.CameraLauncher",
    click_action_app_icon_id: "com.android.camera2_20180914_more_1",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/com.android.camera2.png",
    click_action_key: "com.android.camera2",
    click_action_packagename: "com.android.camera2",
    click_action_title: "Camera",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  chrome: {
    click_action_app_activity:
      "org.chromium.chrome.browser.ChromeTabbedActivity",
    click_action_app_icon_id: "com.android.chrome_20180916_more_2",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/com.android.chrome.png",
    click_action_key: "com.android.chrome",
    click_action_packagename: "com.android.chrome",
    click_action_title: "Browser",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  android: {
    click_action_app_activity: ".SettingsActivity",
    click_action_app_icon_id: "com.bluestacks.settings_20180914_more_3",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/com.bluestacks.settings.png",
    click_action_key: "com.bluestacks.settings",
    click_action_packagename: "com.bluestacks.settings",
    click_action_title: "Android Settings",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  media: {
    click_action_app_activity: "com.bluestacks.filemanager.MainActivity",
    click_action_app_icon_id: "com.bluestacks.filemanager_20180914_more_4",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/com.bluestacks.filemanager.png",
    click_action_key: "com.bluestacks.filemanager",
    click_action_packagename: "com.bluestacks.filemanager",
    click_action_title: "Media Manager",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  helpCenter: {
    click_action_app_activity: "",
    click_action_app_icon_id: "helpcenter_20180919_more_6",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/help_center.png",
    click_action_key: "feedback_text",
    click_action_packagename: "feedback_text",
    click_action_title: "HelpCenter",
    click_action_value:
      "http://arabica-dot-bs3-appcenter-engg.appspot.com/bs3/feedback",
    click_generic_action: "ApplicationBrowser",
    payloadtype: "generic"
  }
};

function handleClick(param) {
  window.GmApi.gmHandleClick(payload[param]);
}

function refreshhomehtml() {
  window.GmApi.gmRefreshhomehtml();
}

function handleTabClick(tab) {
  $(".link").removeClass("activeLink");
  $(".link." + tab).addClass("activeLink");
  $(".tab").fadeOut();
  if (tab !== "library") {
    tab = "noInternet";
  }
  $("#" + tab).fadeIn();
}

function showMenuOptions() {
  $(".menuOptionsContainer").fadeIn();
}

function hideMenuOptions(e) {
  e.stopPropagation();
  $(".menuOptionsContainer").fadeOut();
}

function installApk(e) {
  hideMenuOptions(e);
  e.stopPropagation();
  window.GmApi.gmChooseandinstallapk();
}

function deleteApps(e) {
  hideMenuOptions(e);
  e.stopPropagation();
  if (installedApps.length) {
    $(".deleteButton").fadeIn();
    $(".deleteOverlay").fadeIn();
    window.disableClick = true;
    $("#installedApps").css("z-index", 9999999);
  }
}
