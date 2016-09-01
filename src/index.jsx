import React from 'react';
import classnames from 'classnames';
import NibLogo from './NibLogo';
import {LOGO_THEMES, HEADER_THEMES} from './constants';

export default function HeaderSmall(props) {
  const headerClassNames = classnames('micro-header', 'grid', props.className, {
    'micro-header--white': props.theme === HEADER_THEMES.white,
    'micro-header--green': props.theme === HEADER_THEMES.green
  });

  const logoTheme = props.theme === HEADER_THEMES.white
    ? LOGO_THEMES.green
    : LOGO_THEMES.white;

  return (
    <div className={headerClassNames}>
      <div className="grid__unit" g-xs="cols:2">{props.lhs}</div>
      <div className="grid__unit" g-xs="cols:max">
        <a
          className="micro-header__logo"
          href="/"
          id="ga-inlink-logo-homepage"
          title="nib Private Health Insurance"
        >
          <NibLogo theme={logoTheme} />
        </a>
      </div>
      <div className="grid__unit" g-xs="cols:2">{props.rhs}</div>
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
