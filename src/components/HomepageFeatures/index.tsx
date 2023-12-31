import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Learn About Platform Engineering",
    Svg: require("@site/static/img/plate_of_crayons.svg").default,
    description: (
      <>
        Edible Crayons was designed with education in mind. Platform Engineering
        is a newer concept and our goal is to provide resources to learn more on
        the topic.
      </>
    ),
  },
  {
    title: "Platform Tooling",
    Svg: require("@site/static/img/melted_crayon_pot.svg").default,
    description: <>Edible Crayons provides guidance on platform tooling.</>,
  },
  {
    title: "Explore Platform Architecture",
    Svg: require("@site/static/img/robo_hungry.svg").default,
    description: (
      <>
        Explore platform architecture models and learn about planes in Platform
        Engineering.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): JSX.Element {
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
