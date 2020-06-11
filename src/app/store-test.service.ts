import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTestService {

  forNewBlog = [
    {id: 1, image: 'https://via.placeholder.com/560x380?text=Visit', subtitle: 'Blog Post',
      titl: 'How to optimize your Facebook & Instagram video ads for success', text: 'Instagram and Facebook video ads are extremely ' +
        'popular among marketers these days. Not only are they more engaging and entertaining, they`re loved by many ...',
      button: 'Read Story'
    }
  ];

  forSidebar = [
    {id: 1, image: 'https://via.placeholder.com/130x135?text=Visit',
      titl: 'Report',
      text: 'Explore Instagram Video: How to convert, engage, and get more Instagra...',
      read: 'Read Report'
    },
    {id: 2, image: 'https://via.placeholder.com/130x135?text=Visit',
      titl: 'Blog Post',
      text: 'How to make social video work for your marketing team',
      read: 'Read Store'
    },
    {id: 3, image: 'https://via.placeholder.com/130x135?text=Visit',
      titl: 'Webinar',
      text: 'The video Forecast: 2019 predictions from industry leaders',
      read: 'Watch Webinar'
    },
    {id: 4, image: 'https://via.placeholder.com/130x135?text=Visit',
      titl: 'Report',
      text: 'Winning strategies for digital video',
      read: 'Read report'
    }
  ];

  forNewBlogPosts = [
    {id: 1, image: 'https://via.placeholder.com/320x260?text=Visit',
      titl: 'Blog Post',
      text: '4 organic ways to improve your website KPIs',
      read: 'Read Story'
    },
    {id: 2, image: 'https://via.placeholder.com/320x260?text=Visit',
      titl: 'Blog Post',
      text: 'How to turn your next event into a video content goldmine',
      read: 'Read Store'
    },
    {id: 3, image: 'https://via.placeholder.com/320x260?text=Visit',
      titl: 'Blog Post',
      text: 'How to quickly turn your podcast into a video script',
      read: 'Read Story'
    },
  ];

  forEvents = [
    {id: 1, image: 'https://via.placeholder.com/120x120?text=Visit',
      titl: 'Blog Post',
      text: 'The Basic: Distributing Your Videos Across Different Channels',
      read: 'Read Story'
    },
    {id: 2, image: 'https://via.placeholder.com/120x120?text=Visit',
      titl: 'Webinar',
      text: 'The Basic: Structuring Your Video Marketing Strategy',
      read: 'Watch Webinar'
    },
    {id: 3, image: 'https://via.placeholder.com/120x120?text=Visit',
      titl: 'Report',
      text: 'The Basic: Structuring Marketing Strategy',
      read: 'Read Report'
    },
  ];

  forPopular = [
    {id: 1, image: 'https://via.placeholder.com/320x260?text=Visit',
      titl: 'Webinar',
      text: 'Micro-influencers and B2C brand videos: A match made in heaven',
      read: 'Watch Webinar'
    },
    {id: 2, image: 'https://via.placeholder.com/320x260?text=Visit',
      titl: 'Webinar',
      text: 'Webinar: Improving content marketing trough visual storytelling',
      read: 'Watch Webinar'
    },
    {id: 3, image: 'https://via.placeholder.com/320x260?text=Visit',
      titl: 'Webinar',
      text: 'How to reach audiences with social video: From Millennials to Gen Z',
      read: 'Watch Webinar'
    },
  ];

  forNews = [
    {id: 1, image: 'https://via.placeholder.com/250x250?text=Visit', titl: 'Announcing V2.9.7 Release',
      name: 'Kirti Joshi', date: 'April 21, 2020', text: 'At Froala, our mission has always been ' +
        'about pushing web editing beyond its conceived limits—this vision has served as the guiding ' +
        'philosophy for all Froala releases from Version 1.x to'},

    {id: 2, image: 'https://via.placeholder.com/250x250?text=Visit', titl: 'Doing Wonders With Images In the Froala',
      name: 'Kirti Joshi', date: 'April 1, 2020', text: 'Froala Editor can enhance your editing experience by providing methods to ' +
        'customize and manipulate creative images. Read more to learn what\'s possible!'},

    {id: 3, image: 'https://via.placeholder.com/250x250?text=Visit', titl: 'Quick and Easy Methods to Adjust the Size of Your Froala',
      name: 'Kirti Joshi', date: 'March 24, 2020', text: 'Froala Editor offers developers the complete flexibility and creativity' +
        ' to adjust the look and feel of the editor to suit their application. In a recent blog post, we discussed how'},

    {id: 4, image: 'https://via.placeholder.com/250x250?text=Visit', titl: 'Using Multiple Froala Editors On a Single Webpage',
      name: 'Kirti Joshi', date: 'March 12, 2020', text: 'Froala Editor is a lightweight WYSIWYG HTML Editor written in ' +
        'Javascript that enables rich text editing capabilities for your applications. Froala Editor provides users with customizable' +
        ' features and parameters that'},

    {id: 5, image: 'https://via.placeholder.com/250x250?text=Visit', titl: '3 Easy Steps to Designing Impressive Email Templates with Froala',
      name: 'Kirti Joshi', date: 'January 27, 2020', text: 'Have you ever come across a stunning website, app or an impressive email ' +
        'design that made you stop right there to browse further? Pretty sure we all have—at least once,'},
  ];

  forContinue = [
    {id: 1, image: 'https://via.placeholder.com/250x360?text=Visit', titl: 'Ready to continue your video marketing journey?',
      text: 'Explore our latest report for all the best practices & insights you`ll' +
        'need to easily navigate the video marketing landscape',
      button: 'Explore Report'},
  ];

  forArticles = [
    {id: 1, titl: 'Recieve articles like this in your mailbox',
      text: 'Sign up to get weekly insights & inspiration in your inbox',
      subtext: '@ Enter work email', button: 'Subscribe'},
  ];

  forDrive = [
    { id: 1, titl: 'Ready to take a test drive',
      text: 'We`ll help you video content strategy.' +
        'Prices starting from $49 a month.', minitext: 'See pricing',
      subtext: '@ Enter work email', button: 'Try it Free'},
  ];

  forErik = [
    {id: 1, image: 'https://via.placeholder.com/80x80?text=Erik', name: 'Erik Mathes',
      profession: 'Content Marketing Strategist', subtext: 'Follow me on:'},
  ];

  forHeader = [
    {id: 1, image: 'https://via.placeholder.com/30x20?text=Visit',
      titl: 'wibbitz',
      item1: 'Articles',
      item2: 'Events',
      item3: 'Reports',
      item4: 'Customer Stories',
      icon: 'search',
      input: 'Enter work email',
      button: 'Subscribe'}
  ];

  forFooter = [
    {id: 1, text: 'The online video editor trusted by content creators to make professional video in minutes',
      titl_1: 'Solutions', item_1: 'Studio', item_2: 'Lightbox', item_3: 'Wavi', titl_2: 'Why Wibbitz',
      item_4: 'Marketing', item_5: 'Social Media', item_6: 'News & Editorial', item_7: 'Agencies',
      item_8: 'Internal', item_9: 'Communications', item_10: 'Enterprise', titl_3: 'Resources',
      item_11: 'Blog', item_12: 'Customers', item_13: 'Video Showcase', item_14: 'Watch Video',
      titl_4: 'Pricing', titl_5: 'Company', item_15: 'About Us', item_16: 'Jobs', item_17: 'Press',
      titl_6: 'Legal', item_18: 'Terms and Conditions', item_19: 'Jobs',
      subtext_1: 'Choose language', subtext_2: 'English (United States)', subtext_3: 'French'
    }
  ]

  // getSidebar() {
  //   return this.forSidebar;
  // }

  // getNewBlogPosts() {
  //   return this.forNewBlogPosts;
  // }
  //
  // getPopular() {
  //   return this.forPopular;
  // }
  //
  // getEvents() {
  //   return this.forEvents;
  // }
  //
  // getNews() {
  //   return this.forNews;
  // }
  //
  // getNewBlog() {
  //   return  this.forNewBlog;
  // }
  //
  // getContinue() {
  //   return  this.forContinue;
  // }
  //
  // getArticles() {
  //   return  this.forArticles;
  // }
  //
  // getDrive() {
  //   return  this.forDrive;
  // }
  //
  // getErik() {
  //   return  this.forErik;
  // }

  public sum(
    a1: number,
    b1: number
  ): number {
    return a1 + b1;
  }

  constructor() { }
}
