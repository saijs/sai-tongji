# sai-tongji [![spm version](http://spmjs.io/badge/sai-tongji)](http://spmjs.io/package/sai-tongji)

---

Sai 的百度统计插件。

使用 Sai.js 捕获异常，并基于百度统计进行异常分析。

---

## Install

```
$ spm install sai-tongji --save
```

## Usage

```js
require('sai-tongji');
```

sai-tongji 会自动将捕获的 JavaScript 异常发送到
[百度统计](http://tongji.baidu.com/)，您无需其他操作。

建议使用 [zpm](https://github.com/zpmjs/zpm) 编译并置于页面顶部、sai.js 之后。
