const contents = document.querySelector("#contents");

const bucket = document.querySelector("#buckets");

bucket.addEventListener("change", () => {
  getObjects(bucket.value);
});

const getObjects = (bucket) => {
  fetch(`getObjects/${bucket}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((objects) => {
      const option =
        '<option value="" selected disabled>Selected a option</option>';

      contents.innerHTML = option;
      objects.forEach((element) => {
        const option = document.createElement("option");
        option.value = element.Key;
        option.text = element.Key;
        contents.appendChild(option);
      });
    });
};
