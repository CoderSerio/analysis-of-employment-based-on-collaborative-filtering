"use strict";
const translateToCN = {
  R: "\u73B0\u5B9E\u578B",
  E: "\u4F01\u4E1A\u578B",
  S: "\u793E\u4F1A\u578B",
  I: "\u79D1\u6280\u578B",
  C: "\u7EFC\u5408\u578B",
  A: "\u827A\u672F\u578B",
  Realistic: "\u73B0\u5B9E\u578B",
  Enterprising: "\u4F01\u4E1A\u578B",
  Social: "\u793E\u4F1A\u578B",
  Investigative: "\u79D1\u7814\u578B",
  Conventional: "\u7EFC\u5408\u578B",
  Artistic: "\u827A\u672F\u578B"
};
const resultDescription = {
  R: ["\u559C\u6B22\u5177\u4F53\u5B9E\u9645\u7684\u4E8B\u7269\uFF0C\u5766\u8BDA\u6E05\u6670\u5E76\u5BCC\u6709\u5E38\u8BC6", "\u4F7F\u7528\u624B\u5DE5\u6216\u673A\u68B0\u6280\u80FD\u5BF9\u7269\u4F53\u3001\u5DE5\u5177\u3001\u673A\u5668\u3001\u52A8\u7269\u7B49\u8FDB\u884C\u64CD\u4F5C\uFF0C\u4E0E\u201C\u4E8B\u7269\u201D\u5DE5\u4F5C\u7684\u80FD\u529B\u6BD4\u201C\u4EBA\u201D\u6253\u4EA4\u9053\u66F4\u51FA\u8272"],
  I: ["\u70ED\u7231\u5B66\u4E60\u77E5\u8BC6\uFF0C\u72EC\u7ACB\u81EA\u4E3B\u8FFD\u6C42\u6781\u81F4", "\u8FD0\u7528\u590D\u6742\u548C\u62BD\u8C61\u7684\u601D\u8003\u5206\u6790\u7814\u7A76\u95EE\u9898\uFF0C\u5E76\u4E14\u6709\u80FD\u529B\u63D0\u51FA\u521B\u9020\u6027\u7684\u89E3\u51B3\u65B9\u5F0F\uFF0C"],
  A: ["\u5BCC\u6709\u521B\u9020\u529B\u548C\u8868\u8FBE\u80FD\u529B\uFF0C\u4EE5\u72EC\u7279\u7684\u65B9\u5F0F\u6765\u8868\u73B0\u81EA\u5DF1\uFF0C\u601D\u60F3\u81EA\u7531\u5F00\u653E", "\u559C\u6B22\u81EA\u6211\u8868\u8FBE\uFF0C\u5728\u6587\u5B66\u3001\u97F3\u4E50\u548C\u827A\u672F\u7B49\u65B9\u9762\u6709\u51FA\u4F17\u7684\u9020\u8BE3"],
  S: ["\u5177\u6709\u826F\u597D\u7684\u4EBA\u9645\u4EA4\u5F80\u80FD\u529B\uFF0C\u5BCC\u6709\u8D23\u4EFB\u611F", "\u559C\u6B22\u4E0E\u4EBA\u5408\u4F5C\uFF0C\u70ED\u60C5\u5173\u5FC3\u4ED6\u4EBA\u7684\u5E78\u798F\u3002\u613F\u610F\u5E2E\u52A9\u4ED6\u4EBA\u6210\u957F\u6216\u8005\u89E3\u51B3\u56F0\u96BE"],
  E: ["\u5177\u6709\u56E2\u4F53\u51DD\u805A\u529B\u548C\u7EC4\u7EC7\u529B", "\u62E5\u6709\u8BF4\u670D\u4ED6\u4EBA\u6216\u8005\u652F\u914D\u4ED6\u4EBA\u7684\u80FD\u529B\uFF0C\u80FD\u591F\u6210\u4E3A\u56E2\u961F\u7684\u4E3B\u5BFC\uFF0C\u76EE\u6807\u660E\u786E\u5E76\u6562\u4E8E\u627F\u62C5\u98CE\u9669"],
  C: ["\u6761\u7406\u6E05\u6670\uFF0C\u4E3A\u4EBA\u968F\u548C\uFF0C\u5904\u4E8B\u4F4E\u8C03", "\u5BF9\u51C6\u786E\u6027\u6709\u7740\u8F83\u9AD8\u7684\u8981\u6C42\uFF0C\u4E3B\u52A8\u9075\u5B88\u5E76\u7EF4\u62A4\u89C4\u7AE0\u5236\u5EA6\uFF0C\u5C06\u4E00\u5207\u90FD\u5904\u7406\u5F97\u4E95\u4E95\u6709\u6761"]
};
const list = [
  {
    id: "R",
    text: "\u76F8\u8F83\u4E8E\u4E8B\u7269\uFF0C\u6211\u66F4\u5584\u4E8E\u548C\u4EBA\u6253\u4EA4\u9053"
  },
  {
    id: "E",
    text: "\u6211\u611F\u89C9\u6211\u4E0D\u592A\u559C\u6B22\u53BB\u9886\u5BFC\u4ED6\u4EBA"
  },
  {
    id: "S",
    text: "\u6211\u66F4\u559C\u6B22\u72EC\u7ACB\u5B8C\u6210\u4EFB\u52A1"
  },
  {
    id: "I",
    text: "\u5728\u601D\u8003\u8FD9\u65B9\u9762\uFF0C\u6211\u4E00\u822C\u4E0D\u4F1A\u60F3\u5F97\u592A\u590D\u6742"
  },
  {
    id: "C",
    text: "\u5BF9\u4E8E\u6709\u4E9B\u89C4\u7AE0\u5236\u5EA6\uFF0C\u6211\u60F3\u8FD8\u662F\u6253\u7834\u6BD4\u8F83\u597D"
  },
  {
    id: "A",
    text: "\u6211\u4E0D\u592A\u559C\u6B22\u81EA\u6211\u8868\u8FBE\uFF0C\u8FD8\u662F\u4F4E\u8C03\u4E00\u70B9\u6BD4\u8F83\u597D"
  }
];
const idList = [
  "R",
  "E",
  "S",
  "A",
  "C",
  "I"
];
exports.idList = idList;
exports.list = list;
exports.resultDescription = resultDescription;
exports.translateToCN = translateToCN;