import React from 'react';
import {LOGO_THEME_COLORS} from './constants';

export default function NibLogo(props) {
  return (
    <svg
      x="0px"
      y="0px"
      width="42px"
      height="22px"
      viewBox="2.5 0.2 42 22"
      aria-labelledby="title"
      aria-describedby="desc"
      role="img"
    >
      <title id="title">nib</title>
      <desc id="desc">nib logo</desc>
      <g id="nib-logo">
        <path fill={LOGO_THEME_COLORS[props.theme]} d="M3.1,21V6.5h5.3v1.8h0.1c1-1.4,2.5-2.2,4.7-2.2c2.6,0,5,1.6,5,4.9v10h-5.5v-7.6c0-1.7-0.2-2.9-1.8-2.9
          c-1,0-2.3,0.5-2.3,2.8V21H3.1z M20.4,21V6.5h5.5V21H20.4z M25.9,1v3.9h-5.5V1H25.9z M38.3,13.7c0-1.7-0.5-3.6-2.5-3.6
          c-1.9,0-2.4,1.9-2.4,3.6s0.5,3.6,2.4,3.6C37.8,17.3,38.3,15.4,38.3,13.7z M28.1,21V1h5.5v7.1h0.1c0.8-1.3,2.3-2,3.9-2
          c4.9,0,6.2,4.1,6.2,7.6c0,3.6-2,7.7-6.1,7.7c-2.7,0-3.5-1.1-4.2-2h-0.1V21H28.1z"/>
      </g>
    </svg>
  );
}

NibLogo.propTypes = {
  theme: React.PropTypes.oneOf(Object.keys(LOGO_THEME_COLORS))
};

NibLogo.defaultProps = {
  theme: LOGO_THEME_COLORS.green
};
