import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { bgColor, Tailwind, textColor, zIndexClasses } from './types';

interface ButtonProps<S> {
  children: React.ReactNode;
  zIndexClasses?: zIndexClasses;
  colorClasses?: textColor;
  bgColorClasess?: bgColor;
  customClasses?: Tailwind<S>;
}

const Button = <S extends string>(props: ButtonProps<S>) => {
  const { children, customClasses } = props;
  // const classes = `${zIndexClasses || 'z-1'} ${colorClasses || 'text-white'} ${
  //   bgColorClasess || 'bg-indigo-600'
  // } px-4 py-2 rounded-sm`;
  const classes = `${
    customClasses || 'bg-indigo-600 text-white z-1'
  } px-4 py-2 rounded-sm`;
  return <button className={classes}>{children}</button>;
};

const App = () => {
  return (
    <main className="m-10">
      <Button customClasses="text-white-700 z-10">Primary</Button>
      <Button customClasses="text-white-700 z-1x0">Primary</Button>
      <Button customClasses="z-[400] bg-rose-100">Primary</Button>
      <Button customClasses="container">Primary</Button>
    </main>
  );
};

render(<App />, document.getElementById('root'));
