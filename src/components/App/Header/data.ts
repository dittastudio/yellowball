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
              { text: 'WordPress Development', url: '/' },
              { text: 'UX/UI Design', url: '/' },
              { text: 'WooCommerce Development', url: '/' },
              { text: 'Laravel Development', url: '/' },
              { text: 'White Label Web Development', url: '/' },
              { text: 'eCommerce', url: '/' },
            ],
          },
          {
            heading: 'Other Services',
            subMenuItems: [
              { text: 'SEO', url: '/' },
              { text: 'Paid Search', url: '/' },
              { text: 'Graphic Design', url: '/' },
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