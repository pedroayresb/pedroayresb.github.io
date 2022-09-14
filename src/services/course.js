import placeholder from '../imgs/placeholder.png';
import HTML from '../imgs/html.png';
import CSS from '../imgs/css.png';
import JavaScript from '../imgs/javascript.png';
import React from '../imgs/reactlogo.png';
import Redux from '../imgs/redux.png';
import Jest from '../imgs/jest.png';
import RTL from '../imgs/rtl.png'; 
import lessonslearned from '../imgs/lessonslearned.png';
import pixelArt1 from '../imgs/pixelArt1.png';
import pixelArt2 from '../imgs/pixelArt2.png';
import pixelArt3 from '../imgs/pixelArt3.png';
import mistery1 from '../imgs/mistery1.png';
import mistery2 from '../imgs/mistery2.png';
import mistery3 from '../imgs/mistery3.png';
import meme1 from '../imgs/meme1.png';
import meme2 from '../imgs/meme2.png';
import todo1 from '../imgs/todo1.png';
import todo2 from '../imgs/todo2.png';
import color1 from '../imgs/color1.png';
import color2 from '../imgs/color2.png';
import color3 from '../imgs/color3.png';
import warts1 from '../imgs/warts1.png';
import warts2 from '../imgs/warts2.png';
import warts3 from '../imgs/warts3.png';
import shopping1 from '../imgs/shopping1.png';
import shopping2 from '../imgs/shopping2.png';
import solar1 from '../imgs/solar1.png';
import solar2 from '../imgs/solar2.png';
import tryunfo1 from '../imgs/tryunfo1.png';
import tryunfo2 from '../imgs/tryunfo2.png';
import tryunfo3 from '../imgs/tryunfo3.png';

export const trybeCourse = {
  startDate: {
    year: 2022,
    month: 3,
    day: 20,
  },
  endDate: {
    year: 2023,
    month: 3,
    day: 20,
  },
  modules: [
    {
      name: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      startdate: {
        year: 2022,
        month: 3,
        day: 20,
      },
      enddate: {
        year: 2022,
        month: 5,
        day: 20,
      },
    },
    {
      name: {
        'pt-br':'Desenvolvimento Front-end',
        en: 'Front-end Development',
      },
      startdate: {
        year: 2022,
        month: 5,
        day: 20,
      },
      enddate: {
        year: 2022,
        month: 9,
        day: 1,
      },
    },
    {
      name: {
        'pt-br': 'Desenvolvimento Back-end',
        en: 'Back-end Development',
      },
      startdate: {
        year: 2022,
        month: 9,
        day: 1,
      },
      enddate: {
        year: 2023,
        month: 0,
        day: 20,
      },
    },
    {
      name: {
        'pt-br':'Ciência da Computação',
        en: 'Computer Science',
      },
      startdate: {
        year: 2023,
        month: 0,
        day: 20,
      },
      enddate: {
        year: 2023,
        month: 3,
        day: 20,
      },
    },
  ],
  projects: [
    {
      id: 1,
      name: 'Lessons Learned',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo dos blocos de Unix & Bash, Github e HTML e CSS, onde fizemos a criação de uma página web estática como portfólio pessoal.',
        en: 'Lessons learned throughout the Unix & Bash, Github and HTML and CSS blocks, where we created a static web page as a personal portfolio.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [lessonslearned],
      techs: [HTML, CSS],
      link: 'linkedin.com/pedroayresb',
      startdate: '11-05-2022',
      enddate: '11-05-2022',
    }, {
      id: 2,
      name: 'Playground Functions',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo dos blocos de Introdução à JavaScript e Lógica de Programação, onde fizemos a criação de uma biblioteca de funções matemáticas.',
        en: 'Lessons learned throughout the Introduction to JavaScript and Programming Logic blocks, where we created a mathematical functions library.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [placeholder, placeholder, placeholder],
      techs: [JavaScript],
      link: 'linkedin.com/pedroayresb',
      startdate: '18-05-2022',
      enddate: '20-05-2022',
    }, {
      id: 3,
      name: 'Pixel Art',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo dos blocos de Introdução à JavaScript e Lógica de Programação, onde fizemos a criação de uma página web que permite desenhar pixels em um quadro de pixels.',
        en: 'Lessons learned throughout the Introduction to JavaScript and Programming Logic blocks, where we created a web page that allows you to draw pixels in a pixel board.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [pixelArt1, pixelArt2, pixelArt3],
      techs: [HTML, CSS, JavaScript],
      link: 'linkedin.com/pedroayresb',
      startdate: '25-05-2022',
      enddate: '27-05-2022',
    }, {
      id: 4,
      name: 'Mistery Letter',
      description: {
        'pt-br': 'Projeto bônus do bloco de JavaScript, onde fizemos a criação de uma página web dinâmica para criar cartas misteriosas.',
        en: 'Bonus project of the JavaScript block, where we created a dynamic web page to create mystery letters.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [mistery1, mistery2, mistery3],
      techs: [HTML, CSS, JavaScript],
      link: 'linkedin.com/pedroayresb',
      startdate: '25-05-2022',
      enddate: '29-05-2022',
    }, {
      id: 5,
      name: 'Meme Generator',
      description: {
        'pt-br': 'Projeto bônus do bloco de JavaScript, onde fizemos a criação de uma página web dinâmica para criar memes.',
        en: 'Bonus project of the JavaScript block, where we created a dynamic web page to create memes.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [meme1, meme2],
      techs: [HTML, CSS, JavaScript],
      link: 'linkedin.com/pedroayresb',
      startdate: '25-05-2022',
      enddate: '30-05-2022',
    }, {
      id: 6,
      name: 'To Do List',
      description: {
        'pt-br': 'Projeto bônus do bloco de JavaScript, onde fizemos a criação de uma página web dinâmica para criar uma lista de tarefas.',
        en: 'Bonus project of the JavaScript block, where we created a dynamic web page to create a to-do list.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [todo1, todo2],
      techs: [HTML,CSS, JavaScript],    
      link: 'linkedin.com/pedroayresb',
      startdate: '25-05-2022',
      enddate: '30-05-2022',
    }, {
      id: 7,
      name: 'Color Guess',
      description: {
        'pt-br': 'Projeto bônus do bloco de JavaScript, onde fizemos a criação de uma página web dinâmica para adivinhar cores.',
        en: 'Bonus project of the JavaScript block, where we created a dynamic web page to guess colors.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [color1, color2, color3],
      techs: [HTML,CSS, JavaScript],
      link: 'linkedin.com/pedroayresb',
      startdate: '01-06-2022',
      enddate: '01-06-2022',
    }, {
      id: 8,
      name: 'TrybeWarts',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de JavaScript, onde, em dupla, fizemos a criação de uma página web dinâmica com um formulário para uma escola de bruxaria.',
        en: 'Lessons learned throughout the JavaScript block, where, in pairs, we created a dynamic web page with a form for a school of witchcraft.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [warts1, warts2, warts3],
      techs: [HTML,CSS, JavaScript],
      link: 'linkedin.com/pedroayresb',
      startdate: '07-06-2022',
      enddate: '07-06-2022',
    }, {
      id: 9,
      name: 'Unit Tests',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de JavaScript, onde fizemos a criação de testes unitários para funções JavaScript.',
        en: 'Lessons learned throughout the JavaScript block, where we created unit tests for JavaScript functions.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [placeholder, placeholder, placeholder],
      techs: [JavaScript, Jest],
      link: 'linkedin.com/pedroayresb',
      startdate: '20-06-2022',
      enddate: '21-06-2022',
    }, {
      id: 10,
      name: 'Zoo Functions',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de JavaScript, onde fizemos a criação de funções para manipular dados de um zoológico.',
        en: 'Lessons learned throughout the JavaScript block, where we created functions to manipulate data from a zoo.',
      },
      module: {
        'pt-br': 'Fundamentos do Desenvolvimento Web',
        en: 'Web Development Fundamentals',
      },
      screenshots: [placeholder, placeholder, placeholder],
      techs: [JavaScript],
      link: 'linkedin.com/pedroayresb',
      startdate: '29-06-2022',
      enddate: '01-07-2022',
    }, {
      id: 11,
      name: 'Shopping Cart',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de JavaScript, onde fizemos a criação de uma página web dinâmica para um carrinho de compras utilizando a API do MercadoLive.',
        en: 'Lessons learned throughout the JavaScript block, where we created a dynamic web page for a shopping cart using the MercadoLivre API.',
      },
      module: {
        'pt-br': 'Desenvolvimento Front-end',
        en: 'Front-end Development',
      },
      screenshots: [shopping1, shopping2],
      techs: [HTML,CSS, JavaScript],
      link: 'linkedin.com/pedroayresb',
      startdate: '11-07-2022',
      enddate: '13-07-2022',
    }, {
      id: 12,
      name: 'Solar System',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de JavaScript, onde fizemos a criação de uma página web dinâmica para visualizar informações sobre o sistema solar.',
        en: 'Lessons learned throughout the JavaScript block, where we created a dynamic web page to view information about the solar system.',
      },
      module: {
        'pt-br': 'Desenvolvimento Front-end',
        en: 'Front-end Development',
      },
      screenshots: [solar1, solar2],
      techs: [HTML,CSS, JavaScript, React],
      link: 'linkedin.com/pedroayresb',
      startdate: '20-07-2022',
      enddate: '22-07-2022',
    }, {
      id: 13,
      name: 'Tryunfo',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de React, onde fizemos a criação de uma página web dinâmica para um jogo de cartas.',
        en: 'Lessons learned throughout the React block, where we created  a dynamic web page for a card game.',
      },
      module: {
        'pt-br': 'Desenvolvimento Front-end',
        en: 'Front-end Development',
      },
      screenshots: [tryunfo1, tryunfo2, tryunfo3],
      techs: [HTML,CSS, JavaScript, React],
      link: 'linkedin.com/pedroayresb',
      startdate: '25-07-2022',
      enddate: '27-07-2022',
    }, {
      id: 14,
      name: 'TrybeTunes',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de React, onde fizemos a criação de uma página web dinâmica para um reprodutor de música utilizando API da AppleMusic.',
        en: 'Lessons learned throughout the React block, where we created a dynamic web page for a music player using the AppleMusic API.',
      },
      module: {
        'pt-br': 'Desenvolvimento Front-end',
        en: 'Front-end Development',
      },
      screenshots: [placeholder, placeholder, placeholder],
      techs: [HTML,CSS, JavaScript, React],
      link: 'linkedin.com/pedroayresb',
      startdate: '01-08-2022',
      enddate: '07-08-2022',
    }, {
      id: 15,
      name: 'Frontend Online Store',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de React, onde, em grupo, fizemos a criação de uma página web dinâmica para uma loja online utilizando API do MercadoLive.',
        en: 'Lessons learned throughout the React block, where, in a group, we created a dynamic web page for an online store using the MercadoLivre API.',
      },
      module: {
        'pt-br': 'Desenvolvimento Front-end',
        en: 'Front-end Development',
      },
      screenshots: [placeholder, placeholder, placeholder],
      techs: [HTML,CSS, JavaScript, React],
      link: 'linkedin.com/pedroayresb',
      startdate: '05-08-2022',
      enddate: '10-08-2022',
    }, {
      id: 16,
      name: 'RTL Tests',
      description: {
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de React, onde fizemos a criação de testes unitários para funções React.',
        en: 'Lessons learned throughout the React block, where we created unit tests for React functions.',
      },
      module:{
        'pt-br': 'Desenvolvimento Front-end',
        en: 'Front-end Development',
      },
      screenshots: [placeholder, placeholder, placeholder],
      techs: [Jest, RTL],
      link: 'linkedin.com/pedroayresb',
      startdate: '15-08-2022',
      enddate: '17-08-2022',
    }, {
      id: 17,
      name: 'TrybeWallet',
      description:{
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de React, onde fizemos a criação de uma página web dinâmica para um gerenciador de finanças pessoais.',
        en: 'Lessons learned throughout the React block, where we created a dynamic web page for a personal finance manager.',
      },
      module:{
        'pt-br': 'Desenvolvimento Front-end',
        en: 'Front-end Development',
      },
      screenshots: [placeholder, placeholder, placeholder],
      techs: [HTML,CSS, JavaScript, React, Redux, Jest, RTL],
      link: 'linkedin.com/pedroayresb',
      startdate: '27-08-2022',
      enddate: '28-08-2022',
    }, {
      id: 18,
      name: 'Trivia Game',
      description:{
        'pt-br': 'Aprendizados adquiridos ao longo do bloco de React, onde, em grupo, fizemos a criação de uma página web dinâmica para um jogo de perguntas e respostas utilizando API do Open Trivia DB.',
        en: 'Lessons learned throughout the React block, where, in a group, we created a dynamic web page for a trivia game using the Open Trivia DB API.',
      },
      module:{
        'pt-br': 'Desenvolvimento Front-end',
        en: 'Front-end Development',
      },
      screenshots: [placeholder, placeholder, placeholder],
      techs: [HTML, CSS, JavaScript, React, Redux, Jest, RTL],
      link: 'linkedin.com/pedroayresb',
      startdate: '08-09-2022',
      enddate: '13-09-2022',
    }],
  }

export const miniProjects = [
  {
    id: 1,
    name: 'Lessons Learned',
    description: {
      'pt-br': 'Aprendizados adquiridos ao longo dos blocos de Unix & Bash, Github e HTML e CSS, onde fizemos a criação de uma página web estática como portfólio pessoal.',
      en: 'Lessons learned throughout the Unix & Bash, Github and HTML and CSS blocks, where we created a static web page as a personal portfolio.',
    },
    module: {
      'pt-br': 'Fundamentos do Desenvolvimento Web',
      en: 'Web Development Fundamentals',
    },
    screenshots: [placeholder, placeholder, placeholder],
    techs: [HTML, CSS],
    link: 'linkedin.com/pedroayresb',
    startdate: '11-05-2022',
    enddate: '11-05-2022',
  }, {
    id: 2,
    name: 'Pixel Art',
    description: {
      'pt-br': 'Aprendizados adquiridos ao longo dos blocos de Introdução à JavaScript e Lógica de Programação, onde fizemos a criação de uma página web que permite desenhar pixels em um quadro de pixels.',
      en: 'Lessons learned throughout the Introduction to JavaScript and Programming Logic blocks, where we created a web page that allows you to draw pixels in a pixel board.',
    },
    module: {
      'pt-br': 'Fundamentos do Desenvolvimento Web',
      en: 'Web Development Fundamentals',
    },
    screenshots: [placeholder, placeholder, placeholder],
    techs: [HTML, CSS, JavaScript],
    link: 'linkedin.com/pedroayresb',
    startdate: '25-05-2022',
    enddate: '27-05-2022',
  }, {
    id: 3,
    name: 'TrybeTunes',
    description: {
      'pt-br': 'Aprendizados adquiridos ao longo do bloco de React, onde fizemos a criação de uma página web dinâmica para um reprodutor de música utilizando API da AppleMusic.',
      en: 'Lessons learned throughout the React block, where we created a dynamic web page for a music player using the AppleMusic API.',
    },
    module: {
      'pt-br': 'Desenvolvimento Front-end',
      en: 'Front-end Development',
    },
    screenshots: [placeholder, placeholder, placeholder],
    techs: [HTML,CSS, JavaScript, React],
    link: 'linkedin.com/pedroayresb',
    startdate: '01-08-2022',
    enddate: '07-08-2022',
  }, {
    id: 4,
    name: 'Frontend Online Store',
    description: {
      pt: 'Aprendizados adquiridos ao longo do bloco de React, onde, em grupo, fizemos a criação de uma página web dinâmica para uma loja online utilizando API do MercadoLive.',
      en: 'Lessons learned throughout the React block, where, in a group, we created a dynamic web page for an online store using the MercadoLivre API.',
    },
    module: {
      'pt-br': 'Desenvolvimento Front-end',
      en: 'Front-end Development',
    },
    screenshots: [placeholder, placeholder, placeholder],
    techs: [HTML,CSS, JavaScript, React],
    link: 'linkedin.com/pedroayresb',
    startdate: '05-08-2022',
    enddate: '10-08-2022',
  }, {
    id: 5,
    name: 'TrybeWallet',
    description:{
      'pt-br': 'Aprendizados adquiridos ao longo do bloco de React, onde fizemos a criação de uma página web dinâmica para um gerenciador de finanças pessoais.',
      en: 'Lessons learned throughout the React block, where we created a dynamic web page for a personal finance manager.',
    },
    module:{
      'pt-br': 'Desenvolvimento Front-end',
      en: 'Front-end Development',
    },
    screenshots: [placeholder, placeholder, placeholder],
    techs: [HTML,CSS, JavaScript, React, Redux, Jest, RTL],
    link: 'linkedin.com/pedroayresb',
    startdate: '27-08-2022',
    enddate: '28-08-2022',
  }];
