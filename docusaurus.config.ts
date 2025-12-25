import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";



const config: Config = {
  title: "Petar_mc Docs",
  tagline: "",
  favicon: "img/logo2.ico",

  future: {
    v4: true,
  },

  url: "https://docs.petarmc.com",
  baseUrl: "/",

  organizationName: "PetarMc1",
  projectName: "docs",
  onBrokenLinks: "throw",
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: "https://github.com/PetarMc1/docs",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Petar_mc Docs",
      logo: {
        src: "https://assets.petarmc.com/images/logo.svg",
      },
      items: [
        {
          href: "/petarlib",
          label: "PetarLib",
          position: "left",
          sidebarId: "petarLib",
        },
        {
          href: "/fish-tracker",
          label: "Fish Tracker",
          position: "left",
          sidebarId: "fishTracker",
        },
                {
          href: "/mc-api",
          label: "Minecraft Items API v2",
          position: "left",
          sidebarId: "mcApi",
        },
        {
          href: "https://github.com/PetarMc1/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Discord",
      //         href: "https://discord.gg/Uah2dNRhFV",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Other",
      //     items: [
      //       {
      //         label: "Main site",
      //         href: "https://petarmc.com",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Petar_mc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['groovy', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
