import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Powerful plugin API',
    icon: '/img/power.png',
    description: (
      <>
        Quickly add context menus, slash commands, message action buttons, message accessories (like embeds or bot buttons), and much more!
      </>
    ),
  },
  {
    title: 'Typescript, JSX, CSS, modular',
    icon: '/img/typescript.png',
    description: (
      <>
        Plugins can make use of Typescript, JSX syntax, import css files and modularise their code! Plexcord and many Discord modules are fully typed for your convenience.
      </>
    ),
  },
  {
    title: 'RegExp code patches',
    icon: '/img/regexp.png',
    description: (
      <>
        Rewrite Discord’s code in place using RegExp replacements instead of boring old monkey patches.
      </>
    ),
  },
  {
    title: 'Native Capabilities',
    icon: '/img/nodejs.png',
    description: (
      <>
        Plugins can define native functions that have full access to Node.js apis without compromising on security.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx('col col--5')}>
      <div className="padding-horiz--md">
        <Heading as="h3" style={{ display: "flex",alignItems: "center",gap: "10px"}}><img src={icon} alt='icon' /> {title}</Heading>
      <p>{description}</p>
    </div>
    </div >
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row"  style={{justifyContent: "space-evenly", gap: "20px"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
