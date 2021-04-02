const imageLoader = async (file) => {
  const url = "https://api.cloudinary.com/v1_1/dcil8rawn/upload";
  const formData = new FormData();
  const span = document.querySelector(".image_span");

  formData.append("file", file);
  formData.append("upload_preset", "vnvxzryj");

  const imageFile = await fetch(url, {
    method: "POST",
    body: formData,
  }) //
    .then((res) => res.json());
  span.innerText = imageFile.original_filename + " 이미지 추가!";
  span.dataset.image = imageFile.secure_url;
};

const imageUploaderInit = () => {
  const uploadBtn = document.querySelector(".add_image");
  uploadBtn.addEventListener("change", (e) => {
    imageLoader(e.target.files[0]);
  });
};
imageUploaderInit();
