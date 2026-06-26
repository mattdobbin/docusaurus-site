import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
      <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <Heading as="h2">About me</Heading>
            <p>
            blah blah blah blah text text corporate dribble blah blah blah blah text text corporate dribble blah blah blah blah text text corporate dribble blah blah blah blah text text corporate dribble blah blah blah blah text text corporate dribble 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <Heading as="h2">About this site</Heading>
            <p>
            This site was built using Docusaurus and a docs-as-code workflow. The content is written in Markdown, and changes are managed through Git and pull requests. Updates are  deployed automatically through a CI/CD pipeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
        <Heading as="h3">{title}</Heading>
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
*/
