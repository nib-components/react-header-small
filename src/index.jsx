import React from 'react';
import classnames from 'classnames';
import NibLogo from './NibLogo';
import {LOGO_THEMES, HEADER_THEMES} from './constants';

export default function HeaderSmall(props) {
  const headerClassNames = classnames('micro-header', props.className, {
    'micro-header--white': props.theme === HEADER_THEMES.white,
    'micro-header--green': props.theme === HEADER_THEMES.green
  });

  const logoTheme = props.theme === HEADER_THEMES.white
    ? LOGO_THEMES.green
    : LOGO_THEMES.white;

  const lhsContent = props.lhs
    ? <div className="micro-header__lhs">{props.lhs}</div>
    : null;

  const rhsContent = props.rhs
    ? <div className="micro-header__rhs">{props.rhs}</div>
    : null;

  return (
    <div className={headerClassNames}>
      {lhsContent}
      <a
        className="micro-header__logo"
        href="/"
        id="ga-inlink-logo-homepage"
        title="nib Private Health Insurance"
      >
        <NibLogo theme={logoTheme} />
      </a>
      {rhsContent}
    </div>
  );
}

HeaderSmall.propTypes = {
  theme: React.PropTypes.oneOf(Object.keys(HEADER_THEMES)),
  lhs: React.PropTypes.node,
  rhs: React.PropTypes.node,
  className: React.PropTypes.string
};

HeaderSmall.defaultProps = {
  theme: HEADER_THEMES.green
};
