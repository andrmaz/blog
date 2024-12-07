import {style} from '@vanilla-extract/css';

export const container = style({
    margin: 'auto',
    maxWidth: '500px',
    fontFamily: 'sans-serif'
});
export const heading = style({
    color: 'rebeccapurple',
    textTransform: 'capitalize',
    fontSize: '3rem'
});
export const navLinks = style({
    display: 'flex',
    listStyle: 'none',
    paddingLeft: 0
});
export const navLinkItem = style({
    paddingRight: '2rem'
});
export const navLinkText = style({
    color: 'black'
});