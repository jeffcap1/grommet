"use strict";

exports.__esModule = true;
exports.CheckBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _object = require("../../utils/object");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _FormContext = require("../Form/FormContext");

var _StyledCheckBox = require("./StyledCheckBox");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var stopLabelClick = function stopLabelClick(event) {
  // prevents clicking on the label trigging the event twice
  // https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
  if (event.target.type !== 'checkbox') {
    event.stopPropagation();
  }
};

var CheckBox = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref2;

  var a11yTitle = _ref.a11yTitle,
      checkedProp = _ref.checked,
      _ref$defaultChecked = _ref.defaultChecked,
      defaultChecked = _ref$defaultChecked === void 0 ? false : _ref$defaultChecked,
      disabled = _ref.disabled,
      fill = _ref.fill,
      focusProp = _ref.focus,
      id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      _onBlur = _ref.onBlur,
      _onChange = _ref.onChange,
      _onFocus = _ref.onFocus,
      _onMouseEnter = _ref.onMouseEnter,
      _onMouseLeave = _ref.onMouseLeave,
      _onMouseOut = _ref.onMouseOut,
      _onMouseOver = _ref.onMouseOver,
      pad = _ref.pad,
      reverse = _ref.reverse,
      toggle = _ref.toggle,
      indeterminate = _ref.indeterminate,
      rest = _objectWithoutPropertiesLoose(_ref, ["a11yTitle", "checked", "defaultChecked", "disabled", "fill", "focus", "id", "label", "name", "onBlur", "onChange", "onFocus", "onMouseEnter", "onMouseLeave", "onMouseOut", "onMouseOver", "pad", "reverse", "toggle", "indeterminate"]);

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var formContext = (0, _react.useContext)(_FormContext.FormContext);

  var _formContext$useFormI = formContext.useFormInput(name, checkedProp, defaultChecked),
      checked = _formContext$useFormI[0],
      setChecked = _formContext$useFormI[1];

  var _useState = (0, _react.useState)(focusProp),
      focus = _useState[0],
      setFocus = _useState[1];

  (0, _react.useEffect)(function () {
    return setFocus(focusProp);
  }, [focusProp]);
  (0, _react.useEffect)(function () {
    if (checkedProp && indeterminate) {
      console.warn('Checkbox cannot be "checked" and "indeterminate" at the same time.');
    }

    if (toggle && indeterminate) {
      console.warn('Checkbox of type toggle does not have "indeterminate" state.');
    }
  }, [checkedProp, toggle, indeterminate]);
  var themeableProps = {
    checked: checked,
    disabled: disabled,
    focus: focus,
    reverse: reverse,
    toggle: toggle,
    indeterminate: indeterminate
  };
  var hidden;

  if (disabled && checked) {
    hidden = /*#__PURE__*/_react["default"].createElement("input", {
      name: name,
      type: "hidden",
      value: "true"
    });
  }

  var _theme$checkBox$icons = theme.checkBox.icons,
      CheckedIcon = _theme$checkBox$icons.checked,
      IndeterminateIcon = _theme$checkBox$icons.indeterminate;
  var borderColor = (0, _utils.normalizeColor)(theme.checkBox.border.color, theme);

  if (checked) {
    borderColor = (0, _utils.normalizeColor)(theme.checkBox.color || 'control', theme);
  }

  var visual = toggle ? /*#__PURE__*/_react["default"].createElement(_StyledCheckBox.StyledCheckBoxToggle, themeableProps, /*#__PURE__*/_react["default"].createElement(_StyledCheckBox.StyledCheckBoxKnob, themeableProps)) : /*#__PURE__*/_react["default"].createElement(_StyledCheckBox.StyledCheckBoxBox, _extends({
    as: _Box.Box,
    align: "center",
    justify: "center",
    width: theme.checkBox.size,
    height: theme.checkBox.size,
    border: {
      size: theme.checkBox.border.width,
      color: borderColor
    },
    round: theme.checkBox.check.radius
  }, themeableProps), !indeterminate && checked && (CheckedIcon ? /*#__PURE__*/_react["default"].createElement(CheckedIcon, {
    theme: theme,
    as: _StyledCheckBox.StyledCheckBoxIcon
  }) : /*#__PURE__*/_react["default"].createElement(_StyledCheckBox.StyledCheckBoxIcon, _extends({
    theme: theme,
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet"
  }, themeableProps), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M6,11.3 L10.3,16 L18,6.2"
  }))), !checked && indeterminate && (IndeterminateIcon ? /*#__PURE__*/_react["default"].createElement(IndeterminateIcon, {
    theme: theme,
    as: _StyledCheckBox.StyledCheckBoxIcon
  }) : /*#__PURE__*/_react["default"].createElement(_StyledCheckBox.StyledCheckBoxIcon, _extends({
    theme: theme,
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet"
  }, themeableProps), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    d: "M6,12 L18,12"
  }))));
  var side = reverse ? 'left' : 'right';

  var checkBoxNode = /*#__PURE__*/_react["default"].createElement(_StyledCheckBox.StyledCheckBox, _extends({
    as: _Box.Box,
    align: "center",
    justify: "center",
    margin: label && (_ref2 = {}, _ref2[side] = theme.checkBox.gap || 'small', _ref2)
  }, themeableProps), /*#__PURE__*/_react["default"].createElement(_StyledCheckBox.StyledCheckBoxInput, _extends({}, rest, {
    ref: ref,
    type: "checkbox"
  }, (0, _object.removeUndefined)({
    id: id,
    name: name,
    checked: checked,
    disabled: disabled
  }), themeableProps, {
    onFocus: function onFocus(event) {
      setFocus(true);
      if (_onFocus) _onFocus(event);
    },
    onBlur: function onBlur(event) {
      setFocus(false);
      if (_onBlur) _onBlur(event);
    },
    onChange: function onChange(event) {
      setChecked(event.target.checked);
      if (_onChange) _onChange(event);
    }
  })), visual, hidden);

  var normalizedLabel = typeof label === 'string' ? /*#__PURE__*/_react["default"].createElement("span", null, label) : label;
  var first = reverse ? normalizedLabel : checkBoxNode;
  var second = reverse ? checkBoxNode : normalizedLabel;
  return /*#__PURE__*/_react["default"].createElement(_StyledCheckBox.StyledCheckBoxContainer, _extends({
    "aria-label": a11yTitle,
    fill: fill,
    reverse: reverse
  }, (0, _object.removeUndefined)({
    htmlFor: id,
    disabled: disabled
  }), {
    checked: checked,
    onClick: stopLabelClick,
    pad: pad,
    onMouseEnter: function onMouseEnter(event) {
      return _onMouseEnter == null ? void 0 : _onMouseEnter(event);
    },
    onMouseOver: function onMouseOver(event) {
      return _onMouseOver == null ? void 0 : _onMouseOver(event);
    },
    onMouseLeave: function onMouseLeave(event) {
      return _onMouseLeave == null ? void 0 : _onMouseLeave(event);
    },
    onMouseOut: function onMouseOut(event) {
      return _onMouseOut == null ? void 0 : _onMouseOut(event);
    }
  }, themeableProps), first, second);
});
CheckBox.displayName = 'CheckBox';
var CheckBoxDoc;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  CheckBoxDoc = require('./doc').doc(CheckBox);
}

var CheckBoxWrapper = CheckBoxDoc || CheckBox;
exports.CheckBox = CheckBoxWrapper;