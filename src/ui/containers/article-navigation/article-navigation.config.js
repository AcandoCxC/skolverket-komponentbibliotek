module.exports = {
  name: 'Artikelpuffar',
  handle: 'article-navigation',
  default: 'Standard',
  context: {
    sections: [
      {
        title: 'En bildpuff',
        colspan: 6,
        items: [
          { imageUrl: '/styleguide/tmp/img/people-16x9-1.jpg' },
          {
            title: 'Quisque augue dui suscipit consequat',
            description:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
          }
        ]
      },
      {
        title: 'En bildpuff',
        colspan: 6,
        items: [
          { imageUrl: '/styleguide/tmp/img/people-16x9-1.jpg' },
          {
            title: 'Quisque augue dui suscipit consequat',
            description:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
          }
        ]
      }
    ]
  },
  variants: [
    {
      name: 'Utan bilder',
      label: 'Utan bilder',
      context: {
        sections: [
          {
            title: 'Två bildpuffar',
            colspan: 6,
            items: [
              {
                title: 'Quisque augue dui suscipit consequat',
                url: '#1',
                description:
                  'Lorem ipsum dolor sit amet. Aliquam dictum ac elit semper malesuada venenatis. Aliquam dictum ac elit semper malesuada venenatis.'
              },
              {
                title: 'Suscipit consequat quisque augue dui',
                url: '#2',
                description: 'Lorem ipsum dolor sit amet.'
              }
            ]
          }
        ]
      }
    },
    {
      name: 'Två bildpuffar',
      label: 'Två bildpuffar',
      context: {
        sections: [
          {
            title: 'Två bildpuffar',
            colspan: 6,
            items: [
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-3.jpg',
                title: 'Quisque augue dui suscipit consequat'
              },
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-1.jpg',
                title: 'Suscipit consequat quisque augue dui'
              }
            ]
          },
          {
            title: 'Två bildpuffar',
            colspan: 6,
            items: [
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-3.jpg',
                title: 'Quisque augue dui suscipit consequat'
              },
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-1.jpg',
                title: 'Suscipit consequat quisque augue dui'
              }
            ]
          }
        ]
      }
    },
    {
      name: 'Tre bildpuffar',
      label: 'Tre bildpuffar',
      context: {
        sections: [
          {
            title: 'Tre bildpuffar',
            colspan: 4,
            items: [
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-2.jpg',
                title: 'Vivamus placerat, neque quis rutrum feugiat turpis'
              },
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-3.jpg',
                title: 'Vivamus placerat, neque quis'
              },
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-1.jpg',
                title:
                  'Vivamus placerat, neque quis rutrum feugiat, turpis turpis placerat'
              }
            ]
          },
          {
            title: 'Tre bildpuffar',
            colspan: 4,
            items: [
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-2.jpg',
                title: 'Vivamus placerat, neque quis rutrum feugiat turpis'
              },
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-3.jpg',
                title: 'Vivamus placerat, neque quis'
              },
              {
                imageUrl: '/styleguide/tmp/img/people-16x9-1.jpg',
                title:
                  'Vivamus placerat, neque quis rutrum feugiat, turpis turpis placerat'
              }
            ]
          }
        ]
      }
    }
  ]
};
