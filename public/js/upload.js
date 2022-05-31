const btnUpload = document.querySelector("#upload");

btnUpload.addEventListener("click", (e) => {
  e.preventDefault();

  const bucket = document.querySelector("#buckets").value;
  const file = document.querySelector("#file").files[0];

  const formData = new FormData();
  formData.append("bucket", bucket);
  formData.append("file", file);

  uploadFile(formData);
});

const uploadFile = (formData) => {
  fetch("upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("🚀 ~ file: upload.js ~ line 24 ~ uploadFile ~ data", data);
    });
};
