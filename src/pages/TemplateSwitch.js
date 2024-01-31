import { useEffect } from 'react';
import ReactGA from 'react-ga4';

import Default from './templates/Default';
import Landing from './templates/Landing';
import Theory from './templates/Theory';
import Milestones from './templates/Milestones';
import Book from './templates/Book';
import About from './templates/About';
import Model from './templates/Model';
import Glossary from './templates/Glossary';
import Engagements from './templates/Engagements';

export default function TemplateSwitch({ page }) {

  useEffect(() => {
    ReactGA.initialize('G-KKYF4TD22J');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  switch (page?.template.templateName) {
    case 'Landing': {
      return <Landing page={page} />;
    }
    case 'Theory': {
      return <Theory page={page} />;
    }
    case 'Milestones': {
      return <Milestones page={page} />;
    }
    case 'Book': {
      return <Book page={page} />;
    }
    case 'About': {
      return <About page={page} />;
    }
    case 'Model': {
      return <Model page={page} />;
    }
    case 'Glossary': {
      return <Glossary page={page} />;
    }
    case 'Engagements': {
      return <Engagements page={page} />;
    }

    default: {
      return <Default page={page} />;
    }
  }
}