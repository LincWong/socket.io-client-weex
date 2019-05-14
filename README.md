# socket.io-client-weex

socket.io-client for weex, Developed based on `engine.io-client-weex` and `weex.adapter.websocket`, The underlying webSocket implementation is replaced by the `weex` socket implementation.

# Docs

same as `socket.io-client` https://github.com/socketio/socket.io-client

# What Changed

- Only support socket connection, remove polling transport support
- Use the `webpack plugin` replace `engine.io-client` with `engine.io-client-weex`，The details are as follows `·/webpack.config.js`

# Some Links

- [engine.io-client-weex](https://www.npmjs.com/package/engine.io-client-weex)
- [weex.adapter.websocket](https://www.npmjs.com/package/weex.adapter.websocket)

# Reference Materials
- https://github.com/10cella/weapp.socket.io