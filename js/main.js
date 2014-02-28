if (location.href.indexOf("#") > -1) {
   location.assign(location.href.replace(/(page\/page)#anchor/i, "$1"));
}