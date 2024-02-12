  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
     const imagedata =  reader.result;
     console.log(imagedata);
     setImage(imagedata)
    }
  }
