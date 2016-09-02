import React from 'react';
import classnames from 'classnames';
import Logo from '@nib-components/logo';

const VALID_COLOURS = [
  'queen-elizabeth',
  'white'
];

export default function HeaderSmall(props) {
  const headerClassNames = classnames('micro-header', 'grid', props.className, {
    [`micro-header--${props.color}`]: props.color
  });

  const logoColour = props.color === 'white'
    ? 'queen-elizabeth'
    : 'white';

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
          <Logo color={logoColour} />
        </a>

      </div>
      <div className="grid__unit" g-xs="cols:2">{props.rhs}</div>
    </div>
  );
}

HeaderSmall.propTypes = {
  color: React.PropTypes.oneOf(VALID_COLOURS),
  lhs: React.PropTypes.node,
  rhs: React.PropTypes.node,
  className: React.PropTypes.string
};

HeaderSmall.defaultProps = {
  color: 'queen-elizabeth'
};
