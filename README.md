# hooks-webpack-hmr-bug

This repository shows a bug using the new Hooks API from `react` with `webpack-dev-server` and `HMR` enabled.

**react: 16.7.0-alpha.0**

**react-dom: 16.7.0-alpha.0**

**webpack: 4.25.1**

## Steps to reproduce:

1. Run `yarn start`
2. Visit localhost:8081/

**Expected Behaviour**
- The callback given to `useEffect` should run and log `"USING EFFECT WITH HMR"`
- Typing into the input should update the text `state: ...`

**Actual Behaviour**
- The callback given to `useEffect` is not run and typing into the input does no update

### Demo
![broken-hooks](https://user-images.githubusercontent.com/5312329/48104464-e8b22a80-e233-11e8-87f4-37a72a788f62.gif)

### NOTES

It is possible to get the hooks to run by doing one (just one, not necessarily both) of the following:

1. Delete the line `new webpack.HotModuleReplacementPlugin()` from `webpack.config.js`

```diff
diff --git a/webpack.config.js b/webpack.config.js
index 12be95a..2700132 100644
--- a/webpack.config.js
+++ b/webpack.config.js
@@ -19,7 +19,6 @@ module.exports = {
   },
   plugins: [
     new HtmlWebpackPlugin(),
-    new webpack.HotModuleReplacementPlugin(),
   ],
   devtool: "source-map",
 }
 ```

2. Change the mode from `development` to `production` in `webpack.config.js`

```diff
diff --git a/webpack.config.js b/webpack.config.js
index 12be95a..c7cb59d 100644
--- a/webpack.config.js
+++ b/webpack.config.js
@@ -2,7 +2,7 @@ const HtmlWebpackPlugin = require('html-webpack-plugin')
 const webpack = require('webpack');

 module.exports = {
-  mode: 'development',
+  mode: 'production',
   entry: './index.js',
   output: {
     path: __dirname + '/dist',
```
