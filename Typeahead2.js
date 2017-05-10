"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Utils_1 = require("./Utils");
var Typeahead2 = (function (_super) {
    __extends(Typeahead2, _super);
    function Typeahead2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Typeahead2.prototype.render = function () {
        return (<span {...this.props.spanAttrs} className={Utils_1.classes(this.props.spanAttrs && this.props.spanAttrs.className, "sf-typeahead")}>
              
            </span>);
    };
    return Typeahead2;
}(React.Component));
exports.__esModule = true;
exports["default"] = Typeahead2;
