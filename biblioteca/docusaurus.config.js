module.exports = {
  title: 'Biblioteca Moura Neto',
  tagline: 'Fraternidade Acadêmica Pitágoras',
  url: 'https://bibliotecamouraneto.org.br',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'fap', // Usually your GitHub org/user name.
  projectName: 'Moura Neto', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    disableDarkMode: true,
    navbar: {
      title: 'Biblioteca Moura Neto',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/const_dig',
          activeBasePath: 'docs',
          label: 'Home',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://fapitagoras.org.br/',
          label: 'F.: A.: Pitágoras',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
       
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fraternidade Acadêmica Pitágoras.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
