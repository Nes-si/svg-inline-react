'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var process = process || { env: {} };

var InlineSVG = function (_React$Component) {
    _inherits(InlineSVG, _React$Component);

    function InlineSVG() {
        _classCallCheck(this, InlineSVG);

        return _possibleConstructorReturn(this, (InlineSVG.__proto__ || Object.getPrototypeOf(InlineSVG)).apply(this, arguments));
    }

    _createClass(InlineSVG, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var children = _ref.children;

            if ("production" !== process.env.NODE_ENV && children != null) {
                console.info('<InlineSVG />: `children` prop will be ignored.');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var Element = void 0,
                __html = void 0,
                svgProps = void 0;

            var _props = this.props,
                element = _props.element,
                raw = _props.raw,
                src = _props.src,
                otherProps = _objectWithoutProperties(_props, ['element', 'raw', 'src']);

            if (raw === true) {
                Element = 'svg';
                svgProps = (0, _util.extractSVGProps)(src);
                __html = (0, _util.getSVGFromSource)(src).innerHTML;
            }
            __html = __html || src;
            Element = Element || element;
            svgProps = svgProps || {};

            return _react2.default.createElement(Element, _extends({}, svgProps, otherProps, { src: null, children: null,
                dangerouslySetInnerHTML: { __html: __html } }));
        }
    }]);

    return InlineSVG;
}(_react2.default.Component);

exports.default = InlineSVG;


InlineSVG.defaultProps = {
    element: 'i',
    raw: false,
    src: ''
};

InlineSVG.propTypes = {
    src: _propTypes.string.isRequired,
    element: _propTypes.string,
    raw: _propTypes.bool
};