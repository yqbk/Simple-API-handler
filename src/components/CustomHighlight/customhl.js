import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';

// only register json, html/xml
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

export default hljs;