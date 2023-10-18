// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Edible Crayons",
  tagline: "Platform Engineering Topics",
  favicon: "img/boxofcrayons.ico",

  // Set the production url of your site here
  url: "https://ambitious-field-0f7fe3f10.3.azurestaticapps.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "limericks", // Usually your GitHub org/user name.
  projectName: "edible-crayons", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/boxofcrayons.png",
      navbar: {
        title: "Edible Crayons",
        logo: {
          alt: "Edible Crayons",
          src: "img/boxofcrayons.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "IntroductionSidebar",
            position: "left",
            label: "Introduction",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/limericks/edible-crayons/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Email",
                href: "mailto: limerickson@outlook.com",
              },
              {
                label: "Linked In",
                href: "https://www.linkedin.com/in/lukeerickson123/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/limericks/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Luke Erickson. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
