const url = "https://di-week-08-demo.onrender.com";

document.getElementById("button").addEventListener("click", async () => {
  document.getElementById("mylist").innerHTML = "<p>Loading......</p>";

  const response = await fetch(url + "/books");
  const data = await response.json();
  document.getElementById("mylist").innerHTML = "";
  data.forEach((thing) => {
    const newp = document.createElement("ul");
    newp.textContent = thing;
    document.getElementById("mylist").appendChild(newp);
  });
});
