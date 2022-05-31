const select = document.querySelector("#contents");
const imageResult = document.querySelector("#image");
const linkDownload = document.querySelector("#link");

select.addEventListener("change", () => {
  const bucket = document.querySelector("#buckets").value;
  fetch(`download?bucket=${bucket}&key=${select.value}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("🚀 ~ file: download.js ~ line 13 ~ .then ~ data", data);
      imageResult.src = data;
      linkDownload.href = data;
    });
});
