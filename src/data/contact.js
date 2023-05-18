import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/eshatzky',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/ericshatzky',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/ericshatzky/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://twitter.com/eshatzky',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:eshatzky@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
