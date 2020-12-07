Object.defineProperty(exports,"__esModule",{value:true});exports.Header=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\basic\\Header.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _mapPropsToStyleNames=require('../utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);var _getStyle=require('../utils/getStyle');var _getStyle2=_interopRequireDefault(_getStyle);var _platform=require('../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Header=function(_Component){_inherits(Header,_Component);function Header(){_classCallCheck(this,Header);return _possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));}_createClass(Header,[{key:'render',value:function render(){var _this2=this;var _props=this.props,androidStatusBarColor=_props.androidStatusBarColor,iosBarStyle=_props.iosBarStyle,style=_props.style,transparent=_props.transparent,translucent=_props.translucent;var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform2.default;var platformStyle=variables.platformStyle;return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:33}},_react2.default.createElement(_reactNative.StatusBar,{backgroundColor:androidStatusBarColor?androidStatusBarColor:variables.statusBarColor,barStyle:iosBarStyle?iosBarStyle:platformStyle==='material'?'light-content':variables.iosStatusbar,translucent:transparent?true:translucent,__source:{fileName:_jsxFileName,lineNumber:34}}),_react2.default.createElement(_reactNative.SafeAreaView,{style:{backgroundColor:(0,_getStyle2.default)(style).backgroundColor},__source:{fileName:_jsxFileName,lineNumber:49}},_react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{__source:{fileName:_jsxFileName,lineNumber:54}}))));}}]);return Header;}(_react.Component);Header.contextTypes={theme:_propTypes2.default.object};Header.propTypes=_extends({},_reactNative.ViewPropTypes,{style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),searchBar:_propTypes2.default.bool,rounded:_propTypes2.default.bool});var StyledHeader=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.Header',{},_mapPropsToStyleNames2.default)(Header);exports.Header=StyledHeader;
//# sourceMappingURL=Header.js.map