Object.defineProperty(exports,"__esModule",{value:true});exports.DatePicker=undefined;var _jsxFileName='src\\basic\\DatePicker.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _datetimepicker=require('@react-native-community/datetimepicker');var _datetimepicker2=_interopRequireDefault(_datetimepicker);var _platform=require('../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);var _Text=require('./Text');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var DatePicker=exports.DatePicker=function(_React$Component){_inherits(DatePicker,_React$Component);function DatePicker(props){_classCallCheck(this,DatePicker);var _this=_possibleConstructorReturn(this,(DatePicker.__proto__||Object.getPrototypeOf(DatePicker)).call(this,props));_this.showDatePicker=function(){_this.setState({modalVisible:true});};_this.state={modalVisible:false,defaultDate:props.defaultDate?props.defaultDate:new Date(),chosenDate:!props.placeHolderText&&props.defaultDate?props.defaultDate:undefined};return _this;}_createClass(DatePicker,[{key:'setDate',value:function setDate(date){this.setState({chosenDate:new Date(date)});if(this.props.onDateChange){this.props.onDateChange(date);}}},{key:'formatChosenDate',value:function formatChosenDate(date){if(this.props.formatChosenDate){return this.props.formatChosenDate(date);}return[date.getDate(),date.getMonth()+1,date.getFullYear()].join('/');}},{key:'render',value:function render(){var _this2=this;var _props=this.props,animationType=_props.animationType,disabled=_props.disabled,locale=_props.locale,maximumDate=_props.maximumDate,minimumDate=_props.minimumDate,modalTransparent=_props.modalTransparent,placeHolderText=_props.placeHolderText,placeHolderTextStyle=_props.placeHolderTextStyle,textStyle=_props.textStyle,timeZoneOffsetInMinutes=_props.timeZoneOffsetInMinutes;var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform2.default;return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:66}},_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:67}},_react2.default.createElement(_Text.Text,{onPress:function onPress(){return!disabled?_this2.showDatePicker():undefined;},style:[{padding:variables.datePickerPadding,color:variables.datePickerTextColor},this.state.chosenDate?textStyle:placeHolderTextStyle],__source:{fileName:_jsxFileName,lineNumber:68}},this.state.chosenDate?this.formatChosenDate(this.state.chosenDate):placeHolderText||'Select Date'),_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:82}},_react2.default.createElement(_reactNative.Modal,{supportedOrientations:['portrait','landscape'],animationType:animationType,transparent:modalTransparent,visible:this.state.modalVisible,onRequestClose:function onRequestClose(){},__source:{fileName:_jsxFileName,lineNumber:83}},_react2.default.createElement(_Text.Text,{onPress:function onPress(){return _this2.setState({modalVisible:false});},style:{backgroundColor:variables.datePickerBg,flex:variables.datePickerFlex},__source:{fileName:_jsxFileName,lineNumber:90}}),_react2.default.createElement(_datetimepicker2.default,{date:this.state.chosenDate?this.state.chosenDate:this.state.defaultDate,onDateChange:function onDateChange(date){return _this2.setDate(date);},minimumDate:minimumDate,maximumDate:maximumDate,mode:'date',locale:locale,timeZoneOffsetInMinutes:timeZoneOffsetInMinutes,__source:{fileName:_jsxFileName,lineNumber:97}})))));}}]);return DatePicker;}(_react2.default.Component);DatePicker.defaultProps={disabled:false};
//# sourceMappingURL=DatePicker.js.map