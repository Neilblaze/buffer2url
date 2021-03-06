# buffer2url | @npm_node.js


<a href="https://raw.githubusercontent.com/Neilblaze/buffer2url/master/license.txt"><img src="https://img.shields.io/github/license/Neilblaze/buffer2url?style=flat-square" alt="License"/></a>
<a href="https://actions-badge.atrox.dev/Neilblaze/buffer2url/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FNeilblaze%2Fbuffer2url%2Fbadge" alt="Build status"/></a> <a href="https://github.com/Neilblaze/buffer2url/commits"><img src="https://img.shields.io/github/commits-since/Neilblaze/buffer2url/v1.0.0?style=flat-square&logo=github" alt="Commits since v1.0.0"/></a> <a href="https://github.com/Neilblaze/buffer2url/commits"><img src="https://img.shields.io/github/last-commit/Neilblaze/buffer2url?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Neilblaze/buffer2url/issues"><img src="https://img.shields.io/github/issues/Neilblaze/buffer2url?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/buffer2url"><img src="https://img.shields.io/npm/v/buffer2url?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://npmjs.com/package/buffer2url"><img src="https://img.shields.io/npm/dm/buffer2url?style=flat-square&logo=npm" alt="Downloads"/></a>

**Creates a data URL (base64-encoded) from a Buffer and a mimetype for Node.js.**





## Installation

<a href="https://npmjs.com/package/buffer2url"><img src="https://img.shields.io/badge/npm-buffer2url-C23039?style=flat-square&logo=npm" alt="buffer2url on npm"/></a>

```bash
npm install --save buffer2url@^1.0.0
```

<a href="https://yarnpkg.com/package/buffer2url"><img src="https://img.shields.io/badge/Yarn-buffer2url-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="buffer2url on Yarn"/></a>

```bash
yarn add buffer2url@^1.0.0
```

<a href="https://github.com/Neilblaze/buffer2url/packages"><img src="https://img.shields.io/badge/GitHub Packages-@Neilblaze/buffer2url-24282e?style=flat-square&logo=github" alt="@Neilblaze/buffer2url on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @Neilblaze/buffer2url@^1.0.0
```



## Example


```javascript
import buffer2url from "buffer2url"

const imageBuffer = fs.readFileSync("pikachu_8x8.png")
const dataUrl = buffer2Url("image/png", imageBuffer)
```

Variable `result` will be:

```javascript
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARklEQVQoU2P8/Z/hPwMewEiUAhaG/wyMjIwMv6FmIfPBJrAyQuyAKUDmo1iBrhCkifG/oBrY4D/vbqE4lUVIDcwnrICQLwAWoihJ/lJMVwAAAABJRU5ErkJgggAA"
```

















## Development



Setting up:
```bash
git clone git@github.com:Neilblaze/buffer2url.git
cd buffer2url
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/Neilblaze/buffer2url/master/license.txt)  
Copyright © 2020, Neilblaze \<neilblaze007@gmail.com> (https://github.com/Neilblaze)
