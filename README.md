# ADP Labs - Challenge

The project was created with the intention of being a challenge for ADP Labs.

## How run the project?

### iOS

For iOS run the commands:

- `cp .env.example .env`
- `yarn`
- `cd ios && pod install && cd ..`
- `react-native run-ios` or `npx react-native run-ios`

### Android

For Android run the commands:

- `cp .env.example .env`
- `yarn`
- `react-native run-android` or `npx react-native run-android`

## Structure

The project was created based on the folder structure of `Atomic Design`.

```
└─── components
│   └─── atoms
│   └─── molecules
│   └─── organisms
│   └─── templates
└─── pages
```

To save and manipulate the state of the application, we used `redux` and `saga`

For communication with the API we used the `axios`

## Best Practices

For best practices control we used eslint and prettier configuration files

## Prototype

<img width="554" alt="Screen Shot 2021-10-01 at 03 28 47" width="300" src="https://user-images.githubusercontent.com/20867197/135575919-7b8c52a8-8a43-42f3-86a9-48ec5b7e3b98.png">
<img width="554" alt="Screen Shot 2021-10-01 at 03 28 53" src="https://user-images.githubusercontent.com/20867197/135575926-5f4fe185-bd46-4fd3-8048-5bc511067694.png">
<img width="554" alt="Screen Shot 2021-10-01 at 03 29 01" src="https://user-images.githubusercontent.com/20867197/135575938-109be1f4-8541-4a78-96b8-470e5f79b590.png">


### Links

- **Atomic Design**: https://bradfrost.com/blog/post/atomic-web-design/
- **Redux**: https://redux.js.org/
- **Saga**: https://redux-saga.js.org/
- **Axios**: https://github.com/axios/axios
