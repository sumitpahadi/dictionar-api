function dict() {
  let data = document.getElementById("data").value;
  const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${data}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae1cd46734msh5eedce6a817fec9p1e5048jsnb09ca729c2af",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      const text = result.definition;
      const regex = /\d+\.\s(.*?)(?=\d+\.|\s*$)/g;
      const points = [];
      let match;
      let count = 0;

      while ((match = regex.exec(text)) !== null && count < 3) {
        points.push(match[1].trim());
        count++;
      }

     

      let descr = document.getElementsByClassName("meaning")[0];

      descr.innerHTML = `${points}`;
    })
    .catch((error) => {
      console.error(error);
    });
}
