# react-redux-berry

```bash
$ yarn
$ yarn start
Error: A package is trying to access a peer dependency that should be provided by its direct ancestor but isn't

Required package: react-dom (via "react-dom")
Required by: react-redux@virtual:a602b37985407a220de5935c5aa8e3538270fed02c90b6ddba1752b5d30b6e5a8de13194ba5c34c08a43f32d86a533ff7aa182bbec883942fc00ae917b28479d#npm:7.1.1 (via /home/eps1lon/Development/src/js/throwaway/react-redux-berry/.yarn/virtual/react-redux-virtual-fef4562c73/0/cache/react-redux-npm-7.1.1-4da24f12ba.zip/node_modules/react-redux/lib/utils/reactBatchedUpdates.js)
```

Fixed by

```bash
$ yarn add react-dom
$ yarn start
```
