var routes = [
  {path: '/',name: "page-home", componentUrl: 'pages/home.html'},
  {path: '/tentang/', url: 'pages/about.html'},
  {path: '/film/', componentUrl: 'pages/film.html'},
  {path: '/dfilm/', componentUrl: 'pages/detailfilm.html'},
  {path: '/bca', componentUrl: 'pages/bca.html'},
  {path: '(.*)', url:'pages/404.html'}
];