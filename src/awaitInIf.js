function ajax() {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("Fertig");
    }, 2000);
  });
}

async function middleWare() {
  return await ajax();
}

async function go() {
  console.log("===== START ====");

  if ((await middleWare()) === "Fertig") {
    console.log("Hallo");
  } else {
    console.log("nicht Fertig");
  }

  console.log("===== ENDE ====");
}

go();

export { middleWare };
