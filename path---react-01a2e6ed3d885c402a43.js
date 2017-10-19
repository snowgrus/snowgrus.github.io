webpackJsonp([1676073966197],{478:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Gruis.w Blog",author:"gruis.w"}},markdownRemark:{id:"/Users/gruis/work/test/gatsby-blog/src/pages/2015-05-01-react-component-decisions/index.md absPath of file >>> MarkdownRemark",html:'<blockquote>\n<p>在React 组件开发的过程中我们常常会遇到一些抉择，下面我将选取其中一些个人认为重要的抉择来一一分析。但请记住以下所说的都只是我的建议，你还是需要依据实际情况自己选择最合适的，切勿随波逐流。</p>\n</blockquote>\n<h2>抉择 1：开发环境搭建</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/26b75be1a23051bc0ba6db40910f7bc2-dc421.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 506px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 76.6798418972332%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrUlEQVQ4y62T3W6cMBCFeeO0veoz9KJPkbeIqkq9qNpebMSmAbMLW8zyD8u/2exic2Jb1VZVpSRUGelozIA/fJjB4ELgOPYQYoaYl4nLPewsLlI1g/MJn64/wlp9xa1p4t6yYK7XCMMdRtbgqWDTjB+lwN2Bw++EvjYUNaFbjOOINC8RZznarsdLQu0dpz+a599Ac2XB83ZwpWgQgBAHtk2wdV0E+z22W1fe8+BsNvAp1c+quk0IDlX110sM9Q0dZwPLtjWA0kDbJn6EddJjFXU6k4K96NSGkEAaxkiyAnXbIZG206JEWTf4nzBOfMabm1949yXD1Y2Pt58jrStZe2/yf/TB5k8DVeu/hx2sesLP6gy74XLNL5m0AqSbL9oN8/OWfWm5lhbTLENRFIjjBPswlDkGY2yZZdWUb7f3ElQiSVNEEhJGke6271MwOU6LgOqExPPhBRGcHYVLI92kPM+RSQ3DsBQ4I68aHNoeRdWiqFs0crDVoCu752laDqwkrBtGtD3DMB71upa148Np+dioP+U1QwOrppNqdc4PFR7kyYqqXnTCno04nSc8AqHeglaTsiZKAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Types"\n        title=""\n        src="/static/26b75be1a23051bc0ba6db40910f7bc2-ba7d6.png"\n        srcset="/static/26b75be1a23051bc0ba6db40910f7bc2-9e5a4.png 163w,\n/static/26b75be1a23051bc0ba6db40910f7bc2-fff70.png 325w,\n/static/26b75be1a23051bc0ba6db40910f7bc2-ba7d6.png 650w,\n/static/26b75be1a23051bc0ba6db40910f7bc2-3ed62.png 975w,\n/static/26b75be1a23051bc0ba6db40910f7bc2-dc421.png 1012w"\n        sizes="(max-width: 506px) 100vw, 506px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>新手建议使用 <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>，如果当create-react-app不能满足你的需求时，如果有能力自己开发吧。</p>\n<h4>其他可替代</h4>\n<ul>\n<li><a href="https://github.com/gatsbyjs/gatsby">Gatsby</a> 适用于开发静态网站</li>\n<li><a href="https://github.com/zeit/next.js">Next.js</a> 适用于前后端同构方案</li>\n</ul>\n<h2>抉择 2：类型</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/6adb5cd639212d1983f70fd39554f5c7-40669.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 505px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 81.1881188118812%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABi0lEQVQ4y62UyU7DMBRF+6FQiQW/wyew4hMQSEgs2LBgKm3VNKXN2CFN3SZpBidtbF9ig0AICZHAk64cO3rH13nPaTHOkdMEnAtwUU+sysn2/ENyrcVYieuzE2hPt+h0uxhoGrq9HmYzEzSL8FNkpcDdmqO/YbBjruYtSfWcMSilWK7WWPgrbOMEvwmZS8tPCfEOHA0MmJYFy7ZhWTYM01ROHcdV6/poBEIIhroObTiE67qYkxDPixheXHzZRAH/MxRwPJlgYhjKgXQjnYmGG7V4VeWFT+BV3y/axmokmxDrMGoGLJhA+9JB+8rD4YWLg3MLRzchju+Z0qnJ6zoUeDQ9dGxf6cHw0J8HeCEZlpQhLUV9oD334XoE5nSB2bI6PgkQJBSM8fpHljelo42VhmPz71WWwJ4+gW7YcKdT+KuVGsMogu04Tapc3cd8h3y3//aSMdYMGGwTREmKvNip5zjNEMZp88YuyzcnsidlyHnzxq4SpaO8KCp3MaLqx5DSHEG0rQVKMordvsQrMgraEvIMM/MAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Types"\n        title=""\n        src="/static/6adb5cd639212d1983f70fd39554f5c7-db19a.png"\n        srcset="/static/6adb5cd639212d1983f70fd39554f5c7-d77ad.png 163w,\n/static/6adb5cd639212d1983f70fd39554f5c7-8a454.png 325w,\n/static/6adb5cd639212d1983f70fd39554f5c7-db19a.png 650w,\n/static/6adb5cd639212d1983f70fd39554f5c7-060c2.png 975w,\n/static/6adb5cd639212d1983f70fd39554f5c7-40669.png 1010w"\n        sizes="(max-width: 505px) 100vw, 505px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n如果你懒得折腾，那 prop-types 可以满足你的类型验证，也会避免大部分的类型BUG。</p>\n<p>如果你喜欢折腾，还有下面两种选择：</p>\n<ul>\n<li><a href="https://github.com/Microsoft/TypeScript">TypeScript</a> </li>\n<li><a href="https://github.com/facebook/flow">Flow</a> </li>\n</ul>\n<h2>抉择 3：ES5(createClass) VS ES6(class)</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/2c6d1c66c72fa20daee10eedf09cb471-8752c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 503px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 81.31212723658051%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABq0lEQVQ4y52Uy27bMBBF/d9p0z/oP/QfuuoiXSTopoVRI1bi6GG9JVJSLNsUrepB3pCsgwQo4lQeYECIgo7uzFxyNgqBvmshpJyco5DgvTDZDsLszVq+xbcvn+FYc/xeLHC/Wpk1Szx0Hcep4IPEDRWwNiNipqEKqKmJuwRrODJamtw3p0HPoRUehpeUWuGhbeF6Hnw/QBhGiOPEqPTWaziOi7Xvw6VbLDKGZVrjwbYRJ8mbPzEKT4V85/0/QK3QdhyjKopi3NEGtzmDXXKsigbzdA9L7S2JUkgaBPXfAb4J7PoeKSlAigrbPUNRbUDKCuVjjXNi1g8j5pYNyw0QhKHpY5bnRm0YRaiqahpwGAUe/Ah+QhBmFDEpEabETLtX6icr1EANC1J6hBaIFDij1XlAXfKv25UpW693ro88J6CUmhZMnvK2k7i48vDpB8WH7wEubzJ8vE5weZ3iq5UZz+nj+d/AbpT4+fg6xTEl8lZOL1mo49McWmWZBrz9g1pZh/EDdoyfZxtt0kH1UYc4lvb8fBZwVFPesQba4PWOmUtCXw7VZpqx9bda0BNcjNb7tYO5NQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Types"\n        title=""\n        src="/static/2c6d1c66c72fa20daee10eedf09cb471-4330f.png"\n        srcset="/static/2c6d1c66c72fa20daee10eedf09cb471-16805.png 163w,\n/static/2c6d1c66c72fa20daee10eedf09cb471-035cd.png 325w,\n/static/2c6d1c66c72fa20daee10eedf09cb471-4330f.png 650w,\n/static/2c6d1c66c72fa20daee10eedf09cb471-601cf.png 975w,\n/static/2c6d1c66c72fa20daee10eedf09cb471-8752c.png 1006w"\n        sizes="(max-width: 503px) 100vw, 503px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n如果你开发环境使用的是ES5，那你没得选择只能react15以前使用createCalss。其他使用<a href="https://reactjs.org/docs/react-without-es6.html">create-react-class</a></p>\n<p>如果你开发环境使用ES6语法，强烈建议使用 class，因为这是趋势</p>\n<h2>抉择 4：类 VS 纯函数</h2>\n<p>如果你不需要使用生命周期，尽可能使用纯函数，他能帮你更好的设计的你组件。</p>\n<h2>抉择 5：State</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/88f2761d8bf0a60c8a50d2e60e4d07a6-f5478.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 501px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 84.03193612774452%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB8klEQVQ4y6VUy4rbMBT1z7YUuuiq2y76D/2VdlEIQ6GEtGQSSOzEjl+MZ5zE70f8ln16pSGBMIs6M4LDlSz56NyXJNb3qKsKPVkOxthlPmaU3XBB1w+QyrLEty+f8Wc2xc/JHWZ/55jc/cJ8sfwvWc0GTP0eetJjFTIULRFyhaZpoWka5KcCeVEgI1vVzSiFnPSssB+IsKpqWJaNraoKYm513YCy2SCMImi7HWRFwYPjiH3LtqFqmrAcfC+Ok8sFUk3KTNPETtcF3P2eSHQYhonNditiesuQmrYVSpIkge/7OByPiGidpimiOEaWZcjzHF3XoaTk8bXvB8LGtM/PBmGIgdy9ED65B+wMCwfPh/PoQifX7AcHh8NRkPpBgNPpJMAvfnJdsin25M3R8+CRkHNVSC3rIQeVgBq3kP1SzLcRhSIfBJxiGO9yXPd4993Ah8ke73+Y+Pg7wad7doWv6/FxlNqOYa2ZkAmmZaGiOL1lSB1l8Rhl8OIcRdVcdcjYbnmhcKloUHQbi/WWkvIIh2qOZ47XGU/MzYTT+xUWio7ZUsZ8rWK10URZvMpl3npN212hY/3bYhgmGdK8QJJTrRWV6OU4zVHW9WsVtiIBXB0TT9jzt3P130ZIP3NFRVnRa1MiiGK01GZpdqIX5zaFIXXPPwmFHnWhRRWpAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Types"\n        title=""\n        src="/static/88f2761d8bf0a60c8a50d2e60e4d07a6-84875.png"\n        srcset="/static/88f2761d8bf0a60c8a50d2e60e4d07a6-adecd.png 163w,\n/static/88f2761d8bf0a60c8a50d2e60e4d07a6-7e92e.png 325w,\n/static/88f2761d8bf0a60c8a50d2e60e4d07a6-84875.png 650w,\n/static/88f2761d8bf0a60c8a50d2e60e4d07a6-075ab.png 975w,\n/static/88f2761d8bf0a60c8a50d2e60e4d07a6-f5478.png 1002w"\n        sizes="(max-width: 501px) 100vw, 501px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>抉择 6：绑定（Binding）</h2>\n<p>一张图搞定\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/6c24a16c0ea892d59c798cb0c9792411-af9a1.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 481px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 71.3097713097713%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3QVR/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAQABBQKaMU//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAbEAACAwADAAAAAAAAAAAAAAAAEQEhMRBhgf/aAAgBAQABPyG5boc+CHbC2cf/2gAMAwEAAgADAAAAEMDP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGRABAQEBAQEAAAAAAAAAAAAAAREAIUFR/9oACAEBAAE/EHk5+I7rQGLbhjctdXJNC8hyaHzf/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Types"\n        title=""\n        src="/static/6c24a16c0ea892d59c798cb0c9792411-af9a1.jpg"\n        srcset="/static/6c24a16c0ea892d59c798cb0c9792411-54f3f.jpg 163w,\n/static/6c24a16c0ea892d59c798cb0c9792411-4379f.jpg 325w,\n/static/6c24a16c0ea892d59c798cb0c9792411-af9a1.jpg 481w"\n        sizes="(max-width: 481px) 100vw, 481px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>抉择 7：样式（Styling）</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/0401059fbd988ab8be278e6b409c2040-4af1c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 60.61493411420204%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABqUlEQVQoz4VSy06DQBTl/3cuXJio0cSNMfE/XGg0tmnEdqAtjwJDaSkwQIHjvVOJtfUxycmduY8z92VMMwWbkNZb/HaKpoG12fn9d4yz0xMMRyPMHRdZnv/oVKkUgRhCxjGkjP8mHAzeEEaRJqvqGkVRoCxLbMotZd2ibDqoPMHk5QFZoVBTJW3b6uC269AdwPAdD4sgQCSlJg7CUL/dIIIfr7CQS+T02ft4AmHZsKdTmO9jjCcCgqqK8wLxeq3jY6rAeHQ3yLIMhVJQqtTBijLcP5yJoswq6iVn8WfJF88hrl4lzp88XL6EuDZz3IgKsvwKTOsO588LXA8i3Jpr3E1y3M9bjaT6/oEx90NYcw+242NTlOAEdvhybJoWFtm1T5Z/9uvYTxOaYgbLtiGEwJT6U1XVURlbIhy8jWFSH2ezme7VryWzM59+SjxBJuVJs6xp8iwPdT2OCA8VTNgHMhQNi98MJuD3vv6IkNNPkgSr1UrLNa1Af2cZ0Ar1PmyTtB6sXy6XSNNUSwbbWBqO48D3fbiuq+F5nv75MJNe6hWj5Wfwiu3b+P0BJvGbTWBHbkAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Types"\n        title=""\n        src="/static/0401059fbd988ab8be278e6b409c2040-10273.png"\n        srcset="/static/0401059fbd988ab8be278e6b409c2040-9b14a.png 163w,\n/static/0401059fbd988ab8be278e6b409c2040-94962.png 325w,\n/static/0401059fbd988ab8be278e6b409c2040-10273.png 650w,\n/static/0401059fbd988ab8be278e6b409c2040-2fc6f.png 975w,\n/static/0401059fbd988ab8be278e6b409c2040-a8a2c.png 1300w,\n/static/0401059fbd988ab8be278e6b409c2040-4af1c.png 1366w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>抉择 8：复用逻辑</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/a2ee5e5084616609ff0a623368254c33-40669.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 505px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 80.59405940594058%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABw0lEQVQ4y6VUWXLaQBDVJb3kJ7lEDuYqXElVLmA7wRhMAElhkYQWIwRoR9vopXtiXMlHHIK76lW3RprXr3t6pDRCoCgKiLb9f4gWWSUk8lrINWW/L/Dxw3t0Otfo3vegajruH/q4ub2TiV6zrG5x4wt83zSwEiYlQmbtfu0himKsgg38YIundYC6bvAva2gvkxzQSoWkYqKqcF0XlmVB03WYz35kB+g5MQZegpnlyLXFwoBhmvIbVdPget4fSZSyqjB4HMLwAtwaAUarFH03wTc7gr7OJFmX4r4by7W8el25UjcNVMo8GA6xtB1MKOvEi/Cw3EIPMowpwcRPZSKOOUHZiL8Tcg+dXQo3zCTmqy2WG+pnvEdctRLcm2NN4Q3nHQPvvjzh7GqKi082zq9NXH52pOd3xi4/npDncDDWoc0tjPQZYY7xjwXKssQpJgm9IESY5NhGKfmMfEJDK04kbH4p9H0fhmGerOy3Uxa4648wnE0xtqdw1uHbCPk+FlX9gpLwJkIuOaK+7eIUOd3rMEnlM/vTFNKMFWUFHnD2fBhVXT/Hx8/fYVZlyVm+R5JmSMnz3a6o7JBO+pgfxMEiqohF/QTN9NIzPW4B/gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Types"\n        title=""\n        src="/static/a2ee5e5084616609ff0a623368254c33-db19a.png"\n        srcset="/static/a2ee5e5084616609ff0a623368254c33-d77ad.png 163w,\n/static/a2ee5e5084616609ff0a623368254c33-8a454.png 325w,\n/static/a2ee5e5084616609ff0a623368254c33-db19a.png 650w,\n/static/a2ee5e5084616609ff0a623368254c33-060c2.png 975w,\n/static/a2ee5e5084616609ff0a623368254c33-40669.png 1010w"\n        sizes="(max-width: 505px) 100vw, 505px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>抉择 9：目录结构</h2>',frontmatter:{title:"React组件开发中面临的重要抉择",date:"October 17, 2017"}}},pathContext:{path:"/react/"}}}});
//# sourceMappingURL=path---react-01a2e6ed3d885c402a43.js.map