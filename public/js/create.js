const btnCreate = document.querySelector("#create");

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();

  const newBucket = document.querySelector("#new").value;
  if (newBucket.length < 4) return;
  const formData = new FormData();
  formData.append("newBucket", newBucket);

  uploadBucket(formData);
});

const uploadBucket = (formData) => {
  fetch("uploadBucket", {
    method: "POST",
    body: formData,
  });
};
