const persiapan = () => {
  console.log("Persiapan...");
};

const rebusAir = () => {
  console.log("Rebus air...");
};

const masak = () => {
  console.log("Memasak mie...");
  console.log("Selesai");
};

const main = () => {
  setTimeout(() => {
    persiapan();

    setTimeout(() => {
      rebusAir();

      setTimeout(() => {
        masak();
      }, 3000);
    }, 7000);
  }, 5000);
};

main();
