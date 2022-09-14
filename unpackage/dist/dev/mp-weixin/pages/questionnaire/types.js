"use strict";
var Type = /* @__PURE__ */ ((Type2) => {
  Type2["Realistic"] = "R";
  Type2["Investigative"] = "I";
  Type2["Artistic"] = "A";
  Type2["Social"] = "S";
  Type2["Enterprising"] = "E";
  Type2["Conventional"] = "C";
  return Type2;
})(Type || {});
var Answer = /* @__PURE__ */ ((Answer2) => {
  Answer2[Answer2["NoChoice"] = 0] = "NoChoice";
  Answer2[Answer2["VeryMatched"] = 1] = "VeryMatched";
  Answer2[Answer2["Matched"] = 2] = "Matched";
  Answer2[Answer2["Mismatched"] = 3] = "Mismatched";
  Answer2[Answer2["VeryMismatched"] = 4] = "VeryMismatched";
  return Answer2;
})(Answer || {});
exports.Answer = Answer;
exports.Type = Type;
