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

### Links

- **Atomic Design**: https://bradfrost.com/blog/post/atomic-web-design/
- **Redux**: https://redux.js.org/
- **Saga**: https://redux-saga.js.org/
- **Axios**: https://github.com/axios/axios
