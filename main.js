function deleteParam(key, value) {
  if (!window.history.pushState) {
    return;
  }

  if (!key) {
    return;
  }

  //gets the parameters from url and puts it in the list
  //newParamList except the parameter that is passed in to
  //be deleted
  var url = new URL(window.location.href);
  var paramList = window.location.search.substr(1).split("&");
  let newParamList = [];
  for (let i = 0; i < paramList.length; i++) {
    let pair = paramList[i].split("=");
    if (pair[0] != key || pair[1] != value) {
      pair = pair.join("=");
      newParamList.push(pair);
    }
  }
  newParam = "?" + newParamList.join("&");
  newParamObject = new window.URLSearchParams(newParam);

  url.search = newParamObject;
  url = url.toString();
  window.history.replaceState({ url: url }, null, url);
}
