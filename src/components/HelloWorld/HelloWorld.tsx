import React from 'react';
import { IHelloWorld } from './HelloWorld.interface';
import styles from './HelloWorld.module.scss';


const HelloWorld: React.FC<IHelloWorld> = ({ text }) => (
  <div className={styles.title}>
    Hello world,
    {' '}
    {text}
  </div>
);

export default HelloWorld;
