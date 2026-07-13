"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
exports.__esModule = true;
exports.createHighlightComponent = createHighlightComponent;
var _react = _interopRequireWildcard(require("react"));
var _platform = require("./platform");
var _excluded = ["style", "className"]; // @flow
/*:: // @flow
import { type Node } from 'react';*/
/*:: import { type HighlightRanges } from '../../index';*/
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*:: type Style = ?{ [string]: mixed }*/
/*:: type ClassName = ?string*/
/*:: type Props = $Exact<{
  text: string,
  ranges: ?HighlightRanges,
  style?: Style,
  className?: ClassName,
}>*/
var FullSelection /*: HighlightRanges*/ = [[0, Number.MAX_VALUE]];
var defaultStyle /*: Style*/ = {
  backgroundColor: 'rgba(245,220,0,.25)'
};

/**
 * Highlights `text` at `ranges`.
 *
 * To override default styling, pass `style` and `className` or use `createHighlightComponent` to
 * create a custom component with default styles overriden.
 *
 * To higlight all of text, pass `ranges={Highlight.FullSelection}`.
 */
var Highlight /*: React$StatelessFunctionalComponent<Props>*/ = function Highlight /*: React$StatelessFunctionalComponent<Props>*/(props) {
  var text = props.text,
    ranges = props.ranges,
    style = props.style,
    className = props.className;
  if (!ranges) {
    return text;
  }
  var lastHighlightedIndex = 0;
  var nodes /*: Array<Node | string>*/ = [];
  ranges.forEach(function (_ref) {
    var start = _ref[0],
      end = _ref[1];
    // Broken range, ignore
    if (start < lastHighlightedIndex || end < start) {
      // eslint-disable-next-line no-console
      console.warn("Broken range in <Highlight>: " + start + "-" + end + ", last: " + lastHighlightedIndex);
      return;
    }
    if (start > lastHighlightedIndex) {
      nodes.push( /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
        key: "t" + lastHighlightedIndex + "-" + start
      }, text.slice(lastHighlightedIndex, start)));
    }
    nodes.push( /*#__PURE__*/_react["default"].createElement(_platform.TextElement, {
      style: style != null ? style : defaultStyle,
      className: className,
      key: start + "-" + end
    }, text.slice(start, end + 1)));
    lastHighlightedIndex = end + 1;
  });
  if (text.length > lastHighlightedIndex) {
    nodes.push( /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: "last"
    }, text.slice(lastHighlightedIndex, text.length)));
  }
  return nodes;
};
/*:: type HighlightExport = React$ComponentType<Props> &
  $Exact<{
    FullSelection: typeof FullSelection,
  }>*/
var ExportedHighlight /*: HighlightExport*/ = Object.assign(((0, _react.memo)(Highlight) /*: any*/), {
  FullSelection: FullSelection
});
var _default = ExportedHighlight;
/**
 * Creates a variant of `<Highlight />` component with default styles set to `customStyle` and
 * `customClassName`.
 */
exports["default"] = _default;
function createHighlightComponent(customStyle /*: Style*/, customClassName /*: ClassName*/) /*: HighlightExport*/{
  var HighlightComponent = function HighlightComponent(_ref2 /*:: */) {
    var style = _ref2 /*:: */.style,
      className = _ref2 /*:: */.className,
      props = _objectWithoutPropertiesLoose(_ref2 /*:: */, _excluded);
    return Highlight(_extends({}, props, {
      style: style != null ? style : customStyle,
      className: className != null ? className : customClassName
    }));
  };
  HighlightComponent.FullSelection = FullSelection;
  // $FlowFixMe[incompatible-exact]
  return HighlightComponent;
}