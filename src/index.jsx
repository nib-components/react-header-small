import React from 'react';
import classnames from 'classnames';

export default class HeaderSmall extends React.Component {
  render() {
    const headerClassNames = classnames('micro-header', this.props.className, {
      'micro-header--white': this.props.white
    });

    const lhsContent = this.props.lhs
      ? <div className="micro-header__lhs">{this.props.lhs}</div>
      : null;

    const rhsContent = this.props.rhs
      ? <div className="micro-header__rhs">{this.props.rhs}</div>
      : null;

    return (
      <div className={headerClassNames}>
        {lhsContent}
        <a className="micro-header__logo" href="/" id="ga-inlink-logo-homepage" title="nib Private Health Insurance">
          nib Private Health Insurance
        </a>
        {rhsContent}
      </div>
    );
  }
}

HeaderSmall.propTypes = {
  white: React.PropTypes.bool,
  lhs: React.PropTypes.node,
  rhs: React.PropTypes.node,
  className: React.PropTypes.string
};

HeaderSmall.defaultProps = {
  white: false
};
