/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  console.log("Download selesai");
  console.log(`Hasil download: ${result}`);
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show 
 */
const download = (callShowDownload) => {
  return new Promise((resolve) => {
    const result = "Windows-10.exe";
    setTimeout(() => {
      resolve(callShowDownload(result));
    }, 3000);
  });
};

const main = async () => { 
    const show = await download(showDownload);
    return show;
};

main();


/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
