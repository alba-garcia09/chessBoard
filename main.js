function buildPage() {
  const root = document.getElementById('root');

  const myHeader = document.createElement('header');
  myHeader.id = "myHeader";

  const myH1 = document.createElement('h1');
  myH1.id = "myH1";
  myH1.innerText = '.chessBoard';
  myHeader.appendChild(myH1);

  const myMain = document.createElement('main');
  myMain.id = "myMain";

  const myBack = document.createElement('div');
  myBack.id = "myBack";
  myMain.appendChild(myBack);

  root.appendChild(myHeader);
  root.appendChild(myMain);
}

function createChessBoard(column, row) {
  const myBack = document.getElementById('myBack');

  for (let i = 1; i <= column; i++) {
    const myColumn = document.createElement('div');
    myColumn.setAttribute('class', 'myColumn');
    myColumn.setAttribute('id', 'myColumn' + i);

    for (let j = 1; j <= row; j++) {
      const myBox = document.createElement('div');
      myBox.setAttribute('class', 'myBox');
      myBox.setAttribute('id', 'myBox' + i + j);
      myColumn.appendChild(myBox);
    }
    myBack.appendChild(myColumn);
  }
}

function createColors(column, row) {

  for (let i = 1; i <= column; i++) {
    const myColumn = document.getElementById(`myColumn${i}`);

    if (i % 2 === 0) {
      for (let j = 1; j <= row; j += 2) {
        const myBox = document.getElementById(`myBox${i}${j}`);
        myBox.setAttribute('class', 'myBlackBox');
      }

    } else {
      for (let j = 2; j <= row; j += 2) {
        const myBox = document.getElementById(`myBox${i}${j}`);
        myBox.setAttribute('class', 'myBlackBox');
      }
    }
  }
}


function interactive() {
  //cuando me pulse, que me diga que numero es
}

// const myButton = document.getElementById('myButtonId');

// function onEventFunction(param) {
//   console.log('onEventFunction', param);
// }

// myButton.onclick = onEventFunction;

// function addEventListenerFunction(param) {
//   console.log('addEventListenerFunction', param);
// }

// myButton.addEventListener('click', addEventListenerFunction);



function runApp() {
  buildPage();
  createChessBoard(8, 8);
  createColors(8, 8);
  interactive();
}

runApp();