# Vue Weather App

## Prerequisites

### Required local file for API access:


File in project root directory

```
.env.local
``` 

Contents of file:

```
VUE_APP_API_KEY_WEATHER=KEY1
VUE_APP_API_KEY_NEWS=KEY2
```

#### Required API Keys (free versions are sufficient):

KEY1 : [Openweather.org](https://openweathermap.org/api) - used for current location weather and forcasting

KEY2 : [Newsapi.org](https://newsapi.org/) - used for news widget (includes country specific news)

#### Additional API usage (key not required)

[Kanye.rest](https://kanye.rest) - used for Kanye West quotes

[Geocode.xyz](https://geocode.xyz/api) - used for checking users current location (by town) to ensure the app doesn't refresh on every minor lat/long change

## Project setup

```
npm install
npm run serve
```

### Example Running

![Example Running Image](https://i.imgur.com/7Kfc30G.png)

## Restrospective

### Original Brief

The task was to create an application that makes a request to an API and displays the data.

##### Learning Objectives

- Be able to create a multi-component web application, with Vue
- Be able to make API requests to load JSON data into the application

### Constraints

#### Time

Time was limited for this project as we initially (I've done minor updates since) only had one weekend to complete the request (requested Friday evening, presented Monday morning)

#### Knowledge

App was originally created after 2 weeks of JavaScript and 1 week of Vue.

To create the app I had to additionally research:

- gelocation integration
- [fusioncharts](https://www.fusioncharts.com/)
- CSS/[Bootstrap](https://getbootstrap.com/)
- setInterval
- Time/Date Manipulation (via date/today.)
	- to display users current dat/time
	- to reformat data supplied to fusioncharts for temperature forecasting

### Trade offs

While I have made changes since, (the inclusion of KEY3 api - geocode to verify which Town/City the user is accessing from,) the app previously could only verify a change in user location by accessing their latitude/longitude directly, as a result if the user moved around slightly the app would continually refresh due to recognising a change in physical location, this could have been rectified by forcing geolocation to x decimal places however I had already preplanned for a fix in future to allow Town/City verification instead.
