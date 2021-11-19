var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// netlify/functions/pets.ts
__export(exports, {
  handler: () => handler
});
var pets = [
  {
    id: 1,
    name: "fluffy",
    type: "dog"
  },
  {
    id: 2,
    name: "mittens",
    type: "gerbil"
  },
  {
    id: 2,
    name: "bruiser",
    type: process.env.SECRET_VALUE
  }
];
var handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pets)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=pets.js.map
