browser.windows.getCurrent().then((windowInfo) => {
  browser.windows.update(windowInfo.id, { state: "minimized" });
});