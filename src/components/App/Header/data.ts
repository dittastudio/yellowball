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
              { text: 'WordPress Development', url: '/', color: 'yellow', shape: 'triangle' },
              { text: 'UX/UI Design', url: '/', color: 'green', shape: 'square' },
              { text: 'WooCommerce Development', url: '/', color: 'blue', shape: 'circle' },
              { text: 'Laravel Development', url: '/', color: 'purple', shape: 'pentagon' },
              { text: 'White Label Web Development', url: '/', color: 'green', shape: 'square' },
              { text: 'eCommerce', url: '/', color: 'blue', shape: 'circle' },
            ],
          },
          {
            heading: 'Other Services',
            subMenuItems: [
              { text: 'SEO', url: '/', color: 'green', shape: 'square' },
              { text: 'Paid Search', url: '/', color: 'blue', shape: 'circle' },
              { text: 'Graphic Design', url: '/', color: 'purple', shape: 'pentagon' },
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