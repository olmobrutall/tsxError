import * as React from 'react'
import { classes } from './Utils'

export interface Typeahead2Props {
    spanAttrs?: React.HTMLAttributes<HTMLSpanElement>;
}

export default class Typeahead2 extends React.Component<Typeahead2Props, {}>
{
    render() {

        return (
            <span {...this.props.spanAttrs} className={classes(this.props.spanAttrs && this.props.spanAttrs.className, "sf-typeahead")}/>
        );
    }
}