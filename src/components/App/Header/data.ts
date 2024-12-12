export const navList: HeaderNavigation[] = [
  {
    position: 'left',
    menuItems: [
      {
        text: 'Services',
        subMenu: [
          {
            heading: 'Web Services',
            subMenuItems: [
              { text: 'WordPress Development', url: '/', color: 'yellow' },
              { text: 'UX/UI Design', url: '/', color: 'green' },
              { text: 'WooCommerce Development', url: '/', color: 'blue' },
              { text: 'Laravel Development', url: '/', color: 'purple' },
              { text: 'White Label Web Development', url: '/', color: 'green' },
              { text: 'eCommerce', url: '/', color: 'blue' },
            ],
          },
          {
            heading: 'Other Services',
            subMenuItems: [
              { text: 'SEO', url: '/', color: 'green' },
              { text: 'Paid Search', url: '/', color: 'blue' },
              { text: 'Graphic Design', url: '/', color: 'purple' },
            ],
          },
        ],
      },
      { text: 'Our Work', url: '/' },
      { text: 'Agency', url: '/' },
    ]
  },
  {
    position: 'right',
    menuItems: [
      { text: 'Guides', url: '/' },
      { text: 'Contact', url: '/' },
      {
        text: 'Work with us',
        url: '/',
        type: 'navy',
      },
    ]
  },
];