import { middleWare } from "./awaitInIf";

// not allowed
/**
async function awaitAsDefaultParam(t = (await middleWare())) {
  console.log(t);
}
 */

// allowed
async function awaitAsDefaultParam(t) {
  if (t === undefined) t = await middleWare();
  console.log(t);
}
awaitAsDefaultParam();
