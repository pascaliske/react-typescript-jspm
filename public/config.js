/* eslint-disable no-undef, quotes */
SystemJS.config({
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "jsx": "react"
  },
  sassPluginOptions: {
    "autoprefixer": {
      "browsers": [
        "last 2 versions"
      ]
    }
  },
  paths: {
    "github:": "vendor/github/",
    "npm:": "vendor/npm/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "depCache": {
      "bootstrap.tsx": [
        "libraries/react",
        "libraries/react-dom",
        "components/application/application"
      ],
      "components/application/application.tsx": [
        "libraries/react",
        "libraries/classnames",
        "libraries/react-document-title",
        "libraries/react-router-dom",
        "components/overview/overview",
        "components/projects/projects",
        "./_application.scss"
      ],
      "components/footer/footer.tsx": [
        "libraries/react",
        "./_footer.scss"
      ],
      "components/header/header.tsx": [
        "libraries/react",
        "libraries/classnames",
        "components/navigation/navigation.tsx",
        "./_header.scss"
      ],
      "components/navigation/navigation.tsx": [
        "libraries/react",
        "libraries/classnames",
        "libraries/react-router-dom",
        "./_navigation.scss"
      ],
      "components/overview/overview.tsx": [
        "libraries/react",
        "libraries/classnames",
        "libraries/core-decorators",
        "libraries/react-router-dom",
        "components/header/header",
        "components/footer/footer",
        "./_overview.scss"
      ],
      "components/projects/projects.tsx": [
        "libraries/react",
        "libraries/classnames",
        "libraries/core-decorators",
        "libraries/react-router-dom",
        "components/header/header",
        "components/footer/footer",
        "./_projects.scss"
      ],
      "npm:core-decorators@0.20.0/lib/autobind.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/core-decorators.js": [
        "./override",
        "./deprecate",
        "./suppress-warnings",
        "./memoize",
        "./autobind",
        "./readonly",
        "./enumerable",
        "./nonenumerable",
        "./nonconfigurable",
        "./debounce",
        "./throttle",
        "./decorate",
        "./mixin",
        "./lazy-initialize",
        "./time",
        "./extendDescriptor",
        "./profile",
        "./applyDecorators"
      ],
      "npm:core-decorators@0.20.0/lib/debounce.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/decorate.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/deprecate.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/enumerable.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/extendDescriptor.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/lazy-initialize.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/memoize.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/mixin.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/nonconfigurable.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/nonenumerable.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/override.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/private/utils.js": [
        "../lazy-initialize"
      ],
      "npm:core-decorators@0.20.0/lib/profile.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/readonly.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/suppress-warnings.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/throttle.js": [
        "./private/utils"
      ],
      "npm:core-decorators@0.20.0/lib/time.js": [
        "./private/utils"
      ],
      "npm:fbjs@0.8.16/lib/EventListener.js": [
        "./emptyFunction",
        "process"
      ],
      "npm:fbjs@0.8.16/lib/ExecutionEnvironment.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/camelize.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/camelizeStyleName.js": [
        "./camelize",
        "process"
      ],
      "npm:fbjs@0.8.16/lib/containsNode.js": [
        "./isTextNode",
        "process"
      ],
      "npm:fbjs@0.8.16/lib/emptyFunction.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/emptyObject.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/focusNode.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/getActiveElement.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/hyphenate.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/hyphenateStyleName.js": [
        "./hyphenate",
        "process"
      ],
      "npm:fbjs@0.8.16/lib/invariant.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/isNode.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/isTextNode.js": [
        "./isNode",
        "process"
      ],
      "npm:fbjs@0.8.16/lib/shallowEqual.js": [
        "process"
      ],
      "npm:fbjs@0.8.16/lib/warning.js": [
        "./emptyFunction",
        "process"
      ],
      "npm:history@4.7.2/LocationUtils.js": [
        "resolve-pathname",
        "value-equal",
        "./PathUtils"
      ],
      "npm:history@4.7.2/createBrowserHistory.js": [
        "warning",
        "invariant",
        "./LocationUtils",
        "./PathUtils",
        "./createTransitionManager",
        "./DOMUtils"
      ],
      "npm:history@4.7.2/createHashHistory.js": [
        "warning",
        "invariant",
        "./LocationUtils",
        "./PathUtils",
        "./createTransitionManager",
        "./DOMUtils"
      ],
      "npm:history@4.7.2/createMemoryHistory.js": [
        "warning",
        "./PathUtils",
        "./LocationUtils",
        "./createTransitionManager"
      ],
      "npm:history@4.7.2/createTransitionManager.js": [
        "warning"
      ],
      "npm:history@4.7.2/index.js": [
        "./LocationUtils",
        "./PathUtils",
        "./createBrowserHistory",
        "./createHashHistory",
        "./createMemoryHistory"
      ],
      "npm:invariant@2.2.2/browser.js": [
        "process"
      ],
      "npm:jspm-nodelibs-process@0.2.1/process.js": [
        "@system-env"
      ],
      "npm:path-to-regexp@1.7.0/index.js": [
        "isarray"
      ],
      "npm:prop-types@15.6.0/checkPropTypes.js": [
        "fbjs/lib/invariant",
        "fbjs/lib/warning",
        "./lib/ReactPropTypesSecret",
        "process"
      ],
      "npm:prop-types@15.6.0/factoryWithThrowingShims.js": [
        "fbjs/lib/emptyFunction",
        "fbjs/lib/invariant",
        "./lib/ReactPropTypesSecret",
        "process"
      ],
      "npm:prop-types@15.6.0/factoryWithTypeCheckers.js": [
        "fbjs/lib/emptyFunction",
        "fbjs/lib/invariant",
        "fbjs/lib/warning",
        "object-assign",
        "./lib/ReactPropTypesSecret",
        "./checkPropTypes",
        "process"
      ],
      "npm:prop-types@15.6.0/index.js": [
        "./factoryWithTypeCheckers",
        "./factoryWithThrowingShims",
        "process"
      ],
      "npm:prop-types@15.6.0/lib/ReactPropTypesSecret.js": [
        "process"
      ],
      "npm:react-document-title@2.0.3/index.js": [
        "react",
        "prop-types",
        "react-side-effect"
      ],
      "npm:react-dom@16.1.1/cjs/react-dom.development.js": [
        "react",
        "fbjs/lib/invariant",
        "fbjs/lib/warning",
        "fbjs/lib/ExecutionEnvironment",
        "object-assign",
        "fbjs/lib/emptyFunction",
        "fbjs/lib/EventListener",
        "fbjs/lib/getActiveElement",
        "fbjs/lib/shallowEqual",
        "fbjs/lib/containsNode",
        "fbjs/lib/focusNode",
        "fbjs/lib/emptyObject",
        "prop-types/checkPropTypes",
        "fbjs/lib/hyphenateStyleName",
        "fbjs/lib/camelizeStyleName",
        "process"
      ],
      "npm:react-dom@16.1.1/cjs/react-dom.production.min.js": [
        "react",
        "fbjs/lib/ExecutionEnvironment",
        "object-assign",
        "fbjs/lib/emptyFunction",
        "fbjs/lib/EventListener",
        "fbjs/lib/getActiveElement",
        "fbjs/lib/shallowEqual",
        "fbjs/lib/containsNode",
        "fbjs/lib/focusNode",
        "fbjs/lib/emptyObject",
        "process"
      ],
      "npm:react-dom@16.1.1/index.js": [
        "./cjs/react-dom.production.min.js",
        "./cjs/react-dom.development.js",
        "process"
      ],
      "npm:react-router-dom@4.2.2/BrowserRouter.js": [
        "warning",
        "react",
        "prop-types",
        "history/createBrowserHistory",
        "./Router"
      ],
      "npm:react-router-dom@4.2.2/HashRouter.js": [
        "warning",
        "react",
        "prop-types",
        "history/createHashHistory",
        "./Router"
      ],
      "npm:react-router-dom@4.2.2/Link.js": [
        "react",
        "prop-types",
        "invariant"
      ],
      "npm:react-router-dom@4.2.2/MemoryRouter.js": [
        "react-router/MemoryRouter"
      ],
      "npm:react-router-dom@4.2.2/NavLink.js": [
        "react",
        "prop-types",
        "./Route",
        "./Link"
      ],
      "npm:react-router-dom@4.2.2/Prompt.js": [
        "react-router/Prompt"
      ],
      "npm:react-router-dom@4.2.2/Redirect.js": [
        "react-router/Redirect"
      ],
      "npm:react-router-dom@4.2.2/Route.js": [
        "react-router/Route"
      ],
      "npm:react-router-dom@4.2.2/Router.js": [
        "react-router/Router"
      ],
      "npm:react-router-dom@4.2.2/StaticRouter.js": [
        "react-router/StaticRouter"
      ],
      "npm:react-router-dom@4.2.2/Switch.js": [
        "react-router/Switch"
      ],
      "npm:react-router-dom@4.2.2/index.js": [
        "./BrowserRouter",
        "./HashRouter",
        "./Link",
        "./MemoryRouter",
        "./NavLink",
        "./Prompt",
        "./Redirect",
        "./Route",
        "./Router",
        "./StaticRouter",
        "./Switch",
        "./matchPath",
        "./withRouter"
      ],
      "npm:react-router-dom@4.2.2/matchPath.js": [
        "react-router/matchPath"
      ],
      "npm:react-router-dom@4.2.2/withRouter.js": [
        "react-router/withRouter"
      ],
      "npm:react-router@4.2.0/MemoryRouter.js": [
        "warning",
        "react",
        "prop-types",
        "history/createMemoryHistory",
        "./Router"
      ],
      "npm:react-router@4.2.0/Prompt.js": [
        "react",
        "prop-types",
        "invariant"
      ],
      "npm:react-router@4.2.0/Redirect.js": [
        "react",
        "prop-types",
        "warning",
        "invariant",
        "history"
      ],
      "npm:react-router@4.2.0/Route.js": [
        "warning",
        "invariant",
        "react",
        "prop-types",
        "./matchPath"
      ],
      "npm:react-router@4.2.0/Router.js": [
        "warning",
        "invariant",
        "react",
        "prop-types"
      ],
      "npm:react-router@4.2.0/StaticRouter.js": [
        "warning",
        "invariant",
        "react",
        "prop-types",
        "history/PathUtils",
        "./Router"
      ],
      "npm:react-router@4.2.0/Switch.js": [
        "react",
        "prop-types",
        "warning",
        "invariant",
        "./matchPath"
      ],
      "npm:react-router@4.2.0/matchPath.js": [
        "path-to-regexp"
      ],
      "npm:react-router@4.2.0/withRouter.js": [
        "react",
        "prop-types",
        "hoist-non-react-statics",
        "./Route"
      ],
      "npm:react-side-effect@1.1.3/lib/index.js": [
        "react",
        "exenv",
        "shallowequal"
      ],
      "npm:react@16.1.1/cjs/react.development.js": [
        "object-assign",
        "fbjs/lib/invariant",
        "fbjs/lib/emptyObject",
        "fbjs/lib/warning",
        "fbjs/lib/emptyFunction",
        "prop-types/checkPropTypes",
        "process"
      ],
      "npm:react@16.1.1/cjs/react.production.min.js": [
        "object-assign",
        "fbjs/lib/emptyObject",
        "fbjs/lib/emptyFunction",
        "process"
      ],
      "npm:react@16.1.1/index.js": [
        "./cjs/react.production.min.js",
        "./cjs/react.development.js",
        "process"
      ],
      "npm:warning@3.0.0/browser.js": [
        "process"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@8.0.0",
      "typescript": "npm:typescript@2.6.1",
      "module": "npm:jspm-nodelibs-module@0.2.1",
      "net": "npm:jspm-nodelibs-net@0.2.1",
      "sass": "github:dougludlow/plugin-sass@0.6.0",
      "graceful-fs": "npm:graceful-fs@4.1.11"
    },
    "packages": {
      "npm:typescript@2.6.1": {
        "map": {
          "source-map-support": "npm:source-map-support@0.5.0"
        }
      },
      "npm:source-map-support@0.5.0": {
        "map": {
          "source-map": "npm:source-map@0.6.1"
        }
      },
      "github:dougludlow/plugin-sass@0.6.0": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "css-url-rewriter-ex": "npm:css-url-rewriter-ex@1.0.6",
          "css-asset-copier": "npm:css-asset-copier@1.0.2",
          "sass.js": "npm:sass.js@0.9.13",
          "autoprefixer": "npm:autoprefixer@6.7.7",
          "reqwest": "github:ded/reqwest@2.0.5"
        }
      },
      "npm:autoprefixer@6.7.7": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "caniuse-db": "npm:caniuse-db@1.0.30000770",
          "browserslist": "npm:browserslist@1.7.7",
          "num2fraction": "npm:num2fraction@1.2.2",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
          "normalize-range": "npm:normalize-range@0.1.2"
        }
      },
      "npm:postcss@5.2.18": {
        "map": {
          "js-base64": "npm:js-base64@2.3.2",
          "chalk": "npm:chalk@1.1.3",
          "supports-color": "npm:supports-color@3.2.3",
          "source-map": "npm:source-map@0.5.7"
        }
      },
      "npm:css-url-rewriter-ex@1.0.6": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0"
        }
      },
      "npm:css-asset-copier@1.0.2": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.26.0",
          "fs-extra": "npm:fs-extra@0.30.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "supports-color": "npm:supports-color@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "has-ansi": "npm:has-ansi@2.0.0",
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
        }
      },
      "npm:browserslist@1.7.7": {
        "map": {
          "caniuse-db": "npm:caniuse-db@1.0.30000770",
          "electron-to-chromium": "npm:electron-to-chromium@1.3.27"
        }
      },
      "npm:fs-extra@0.30.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.11",
          "jsonfile": "npm:jsonfile@2.4.0",
          "klaw": "npm:klaw@1.3.1",
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "rimraf": "npm:rimraf@2.6.2"
        }
      },
      "npm:babel-runtime@6.26.0": {
        "map": {
          "regenerator-runtime": "npm:regenerator-runtime@0.11.0",
          "core-js": "npm:core-js@2.5.1"
        }
      },
      "npm:supports-color@3.2.3": {
        "map": {
          "has-flag": "npm:has-flag@1.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:rimraf@2.6.2": {
        "map": {
          "glob": "npm:glob@7.1.2"
        }
      },
      "npm:glob@7.1.2": {
        "map": {
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "inherits": "npm:inherits@2.0.3",
          "once": "npm:once@1.4.0",
          "minimatch": "npm:minimatch@3.0.4",
          "inflight": "npm:inflight@1.0.6",
          "fs.realpath": "npm:fs.realpath@1.0.0"
        }
      },
      "npm:inflight@1.0.6": {
        "map": {
          "once": "npm:once@1.4.0",
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:minimatch@3.0.4": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.8"
        }
      },
      "npm:once@1.4.0": {
        "map": {
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:brace-expansion@1.1.8": {
        "map": {
          "balanced-match": "npm:balanced-match@1.0.0",
          "concat-map": "npm:concat-map@0.0.1"
        }
      }
    }
  },
  packages: {
    "./": {
      "defaultExtension": "tsx"
    }
  },
  meta: {
    "*.ts": {
      "loader": "plugin-typescript"
    },
    "*.tsx": {
      "loader": "plugin-typescript"
    },
    "*.scss": {
      "loader": "sass"
    }
  },
  map: {
    "@hot": "@empty"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "libraries/classnames": "npm:classnames@2.2.5",
    "libraries/core-decorators": "npm:core-decorators@0.20.0",
    "libraries/react": "npm:react@16.1.1",
    "libraries/react-document-title": "npm:react-document-title@2.0.3",
    "libraries/react-dom": "npm:react-dom@16.1.1",
    "libraries/react-router": "npm:react-router@4.2.0",
    "libraries/react-router-dom": "npm:react-router-dom@4.2.2",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@16.1.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.8"
      }
    },
    "npm:buffer@5.0.8": {
      "map": {
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "randomfill": "npm:randomfill@1.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:randomfill@1.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1"
      }
    },
    "npm:pbkdf2@3.0.14": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:browserify-aes@1.1.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.1.3",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:sha.js@2.4.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "asn1.js": "npm:asn1.js@4.9.2"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:asn1.js@4.9.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.8",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.1.3"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "string_decoder": "npm:string_decoder@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:react@16.1.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.16",
        "prop-types": "npm:prop-types@15.6.0"
      }
    },
    "npm:react-dom@16.1.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.16",
        "prop-types": "npm:prop-types@15.6.0"
      }
    },
    "npm:prop-types@15.6.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:fbjs@0.8.16": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "core-js": "npm:core-js@1.2.7",
        "setimmediate": "npm:setimmediate@1.0.5",
        "promise": "npm:promise@7.3.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.17"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:promise@7.3.1": {
      "map": {
        "asap": "npm:asap@2.0.6"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
        "node-fetch": "npm:node-fetch@1.7.3"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.19"
      }
    },
    "npm:react-router@4.2.0": {
      "map": {
        "path-to-regexp": "npm:path-to-regexp@1.7.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "warning": "npm:warning@3.0.0",
        "prop-types": "npm:prop-types@15.6.0",
        "invariant": "npm:invariant@2.2.2",
        "history": "npm:history@4.7.2",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.3.1"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:history@4.7.2": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "warning": "npm:warning@3.0.0",
        "loose-envify": "npm:loose-envify@1.3.1",
        "value-equal": "npm:value-equal@0.4.0",
        "resolve-pathname": "npm:resolve-pathname@2.2.0"
      }
    },
    "npm:path-to-regexp@1.7.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:react-router-dom@4.2.2": {
      "map": {
        "invariant": "npm:invariant@2.2.2",
        "loose-envify": "npm:loose-envify@1.3.1",
        "react-router": "npm:react-router@4.2.0",
        "prop-types": "npm:prop-types@15.6.0",
        "history": "npm:history@4.7.2",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:react-document-title@2.0.3": {
      "map": {
        "react-side-effect": "npm:react-side-effect@1.1.3",
        "prop-types": "npm:prop-types@15.6.0"
      }
    },
    "npm:react-side-effect@1.1.3": {
      "map": {
        "shallowequal": "npm:shallowequal@1.0.2",
        "exenv": "npm:exenv@1.2.2"
      }
    }
  }
});
