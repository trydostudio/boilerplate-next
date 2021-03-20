(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1076:function(module,exports,__webpack_require__){"use strict";__webpack_require__(8),__webpack_require__(3),__webpack_require__(49),__webpack_require__(1077),__webpack_require__(40),__webpack_require__(41),__webpack_require__(1078),__webpack_require__(31),__webpack_require__(42);var _clientApi=__webpack_require__(54),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1087);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1080:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(362).configure)([__webpack_require__(1081)],module,!1)}).call(this,__webpack_require__(103)(module))},1081:function(module,exports,__webpack_require__){var map={"./Main/stories.tsx":1086};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1081},1086:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return stories_Basic})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return stories_Default}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Wrapper=(__webpack_require__(4),__webpack_require__(3),__webpack_require__(9),__webpack_require__(159).default.main.withConfig({displayName:"styles__Wrapper",componentId:"sc-1udztya-0"})(["width:100%;height:100%;padding:2rem;background-color:#eeeeee;"])),jsx_runtime=__webpack_require__(51),Main_Main=(react_default.a.createElement,function Main(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"Camo - Boilerplate":_ref$title,_ref$description=_ref.description,description=void 0===_ref$description?"TypeScript, React, NextJS and Styled Components":_ref$description;return Object(jsx_runtime.jsxs)(Wrapper,{children:[Object(jsx_runtime.jsx)("h1",{children:title}),Object(jsx_runtime.jsx)("p",{children:description})]})});Main_Main.displayName="Main";var components_Main=Main_Main;try{Main_Main.displayName="Main",Main_Main.__docgenInfo={description:"",displayName:"Main",props:{title:{defaultValue:{value:"Camo - Boilerplate"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:"TypeScript, React, NextJS and Styled Components"},description:"",name:"description",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Main/index.tsx#Main"]={docgenInfo:Main_Main.__docgenInfo,name:"Main",path:"src/components/Main/index.tsx#Main"})}catch(__react_docgen_typescript_loader_error){}react_default.a.createElement,__webpack_exports__.default={title:"Main",component:components_Main,args:{title:"Titulo",description:"Descriçao default"}};var stories_Basic=function Basic(args){return Object(jsx_runtime.jsx)(components_Main,Object.assign({},args))};stories_Basic.displayName="Basic",stories_Basic.args={title:"Titulo customizado"};var stories_Default=function Default(args){return Object(jsx_runtime.jsx)(components_Main,Object.assign({},args))};stories_Default.displayName="Default"},1087:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators})),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var _templateObject,react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(478),styled_components_browser_esm=__webpack_require__(159),dist=__webpack_require__(479),global=Object(styled_components_browser_esm.createGlobalStyle)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  ","\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html{\n    font-size: 62.5%;\n  }\n\n  html, body, #__next {\n    height: 100%;\n  }\n\n  body{\n    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n    font-size: 1rem;\n  }\n"])),dist.normalize),jsx_runtime=__webpack_require__(51),decorators=(react_default.a.createElement,[function(Story){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(global,{}),Object(jsx_runtime.jsx)(Story,{})]})}]),parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},483:function(module,exports,__webpack_require__){__webpack_require__(484),__webpack_require__(639),__webpack_require__(640),__webpack_require__(798),__webpack_require__(1017),__webpack_require__(1050),__webpack_require__(1055),__webpack_require__(1067),__webpack_require__(1069),__webpack_require__(1074),__webpack_require__(1076),module.exports=__webpack_require__(1080)},551:function(module,exports){},640:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(362)}},[[483,1,2]]]);
//# sourceMappingURL=main.d4a5fe5a038b28a0cb4f.bundle.js.map