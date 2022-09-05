function $(selector) {
  return document.querySelector(selector);
}

function getTeamHTML(team) {
  return `

<tr>
  <td>${team.promotion}</td>
  <td>${team.members}</td>
  <td>${team.name}</td>
  <td>
    <a href="${team.url}">open</a>
  </td>
  <td>🐇</td>
</tr>`;
}

function displayTeams(teams) {
  //var teamsHTML= teams.map(function (team){
  //return getTeamHTML(team);
  //});

  //transforna datele din json si face string din el si il transforma in html
  //transforma din jsoxn in html
  const teamsHTML = teams.map(getTeamHTML);

  //afiseaza
  $("table tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("http://localhost:3000/teams-json")
    .then((r) => r.json())
    //.then(function (r) {
    //return r.json();
    // })
    .then(function (teams) {
      displayTeams(teams);
    });
}

function submitForm(e) {
  e.preventDefault();
  const promotion = $("input[name=promotion]").value;
  const members = $("input[name=members]").value;
  const name = $("input[name=name]").value;
  const url = $("input[name=url]").value;

  const team = {
    promotion: promotion,
    members: members,
    name: name,
    url: url,
  };

  console.warn("adauga in teams.json:", JSON.stringify(team));
}

console.info(typeof initEvents);

var initEvents = function () {
  const form = document.getElementById("editForm");
  console.warn("form", form);
  form.addEventListener("submit", submitForm);
};

loadTeams();
initEvents();
