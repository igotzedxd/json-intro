import userData from ".././data/users.json" assert { type: "json" };

const app = {};

app.init = () => {
  const cards = document.querySelector(".cards");
  const gridBtn = document.querySelector(".grid-btn");
  const listBtn = document.querySelector(".list-btn");
  const gridTmpl = (user) => {
    return `
        <div class="card grid-view">
          <div class="top"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.2017673318446!2d9.448194!3d56.464285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464be49bbbedfe9b%3A0xe25d8ea6a774bab!2sMedia%20College%20Denmark%20%2F%20Medieskolerne!5e0!3m2!1sda!2sdk!4v1707133776597!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          <img class="grid-img" src="${user.img}">
          <div class="bottom">
            <h3>${user.names}</h3>
            <h4>${user.user}</h4>
            <p>${user.mail}</p>
            <a href="">SE WEBSITE</a>
          </div>
        </div> `;
  };

  const listTmpl = (user) => {
    return `
        <div class="card list-view">
          <div class="user">
          <img class="avatar" src="${user.img}"<div class="info">
          <span>
            <h2>${user.names}</h2>
            <h3>${user.user}</h3>
          </span>
          </div>
          <p class="mail">${user.mail}</p>
          <a href="">SE WEBSITE</a>
        </div> `;
  };

  const renderGridView = () => {
    cards.replaceChildren();
    userData.forEach((user) => {
      cards.insertAdjacentHTML("beforeend", gridTmpl(user));
    });
  };

  const renderListView = () => {
    cards.replaceChildren();
    userData.forEach((user) => {
      cards.insertAdjacentHTML("beforeend", listTmpl(user));
    });
  };
  renderGridView();
  gridBtn.addEventListener("click", renderGridView);
  listBtn.addEventListener("click", renderListView);
};

app.init();
