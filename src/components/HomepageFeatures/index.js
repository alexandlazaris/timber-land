import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'General woodworking',
    Svg: require('@site/static/img/static-wood.svg').default,
    description: (
      <>
        Timberland is my go-to place for woodworking beginner knowledge and general skills. Topics range 
        from types of timber to tool tips.
      </>
    ),
  },
  {
    title: 'Building stuff',
    Svg: require('@site/static/img/static-construction.svg').default,
    description: (
      <>
        Includes guides + tutorials for common woodworking projects to ensure
        you're not left alone whilst building your dream creations.
      </>
    ),
  },
  {
    title: 'Fixing stuff',
    Svg: require('@site/static/img/static-screw-driver.svg').default,
    description: (
      <>
        Filling screw holes, re-attaching (timber) limbs or patching up marks, there'll be plenty of helpful
        tips along the way.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
