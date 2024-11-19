function beforesubmit() {
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  let res = inputdate.value;
  console.log(res);
  let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formatteddate;
}
