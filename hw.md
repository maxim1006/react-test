1. Create AppInfoContext

AppInfoContext = {
documentWidth,
documentHeight,
browser,
currentDeviceType ('desktop', 'tablet', 'mobile')
}

width for currentDeviceType take from bootstrap layout

https://getbootstrap.com/docs/4.0/layout/overview/

AppInfoContext should be updated on window resize;
