/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */

const addBtn = document.getElementById('addBtn');
const textfeild = document.getElementById('textfeild');
const records = document.getElementById('records');

let userArry = [];
let editId = null;
const objstr = localStorage.getItem('user');
if (objstr != null) {
  userArry = JSON.parse(objstr);
}
function saveinfo(userArry) {
  const str = JSON.stringify(userArry);
  localStorage.setItem('user', str);
}

function displayinfo() {
  let statement = '';
  userArry.forEach((user, i) => {
    statement += `
      <li>
       <label>${i + 1}</label>
       <label>${user.name}</label>
        <div class="icon">
          <i class="fa-solid fa-pen-to-square" onclick ="editinfo(${i})"></i>
          <i class="fa-solid fa-trash" onclick ="deleteinfo(${i})"></i>
        </div>
    </li>
    `;
    records.innerHTML = statement;
  });
}

displayinfo();
addBtn.onclick = () => {
  const name = textfeild.value;
  if (editId != null) {
    userArry.splice(editId, 1, { name });
  } else {
    userArry.push({ name });
  }
  saveinfo(userArry);
  textfeild.value = '';
  displayinfo();
  addBtn.innerText = 'Add';
};

function editinfo(id) {
  editId = id;
  textfeild.value = userArry[id].name;
  addBtn.innerText = 'Edit';
}

function deleteinfo(id) {
  userArry.splice(id, 1);
  saveinfo(userArry);
  displayinfo();
  location.reload();
}
