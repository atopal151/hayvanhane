// CustomIcons.js
import React from 'react';
import { Icon, Path } from 'react-native-svg';

// Home Icon
const HomeIcon = () => (
  <Icon size="2xl" viewBox="0 0 24 24" name="home">
    <Path
      fill="#222f3e"
      d="M21 12.155l-9-8.48-9 8.48v9.827h6v-6h6v6h6v-9.827z"
    />
    <Path
      fill="none"
      stroke="#222f3e"
      strokeWidth="1"
      d="M21 12.155l-9-8.48-9 8.48v9.827h6v-6h6v6h6v-9.827z"
    />
  </Icon>
);

export default HomeIcon;

/*
// Heart Outline Icon
export const HeartOutlineIcon = () => (
  <Icon size="2xl" viewBox="0 0 24 24" name="heart-outline">
    <Path
      fill="none"
      stroke="#222f3e"
      strokeWidth="1"
      d="M21 12.155l-9-8.48-9 8.48v9.827h6v-6h6v6h6v-9.827z"
    />
  </Icon>
);

// Heart Icon
export const HeartIcon = () => (
  <Icon size="2xl" viewBox="0 0 24 24" name="heart">
    <Path
      fill="#222f3e"
      d="M12 21.35l-1.45-1.32C5.4 15.36 1 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.19 5.5 2.5C15.09 4.19 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 22.11z"
    />
  </Icon>
);

// Reorder Outline Icon
export const ReorderOutlineIcon = () => (
  <Icon size="2xl" viewBox="0 0 24 24" name="reorder-outline">
    <Path
      fill="none"
      stroke="#222f3e"
      strokeWidth="1"
      d="M21 15v2H3v-2h18zm0-5v2H3v-2h18zm0-5v2H3V5h18"
    />
  </Icon>
);

// Reorder Icon
export const ReorderIcon = () => (
  <Icon size="2xl" viewBox="0 0 24 24" name="reorder">
    <Path
      strokeWidth="2"
      fill="#222f3e"
      d="M21 15v2H3v-2h18zm0-5v2H3v-2h18zm0-5v2H3V5h18zm-2-6v2H5V1h14z"
    />
  </Icon>
);
*/