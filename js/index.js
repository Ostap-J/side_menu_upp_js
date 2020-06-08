const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');


// This function closes navbar if user clicks anywhere outside of navbar once it's opened
// Does not leave unused event listeners on
// It's messy, but it works
function closeNavbar(e) {
  if (
    document.body.classList.contains('show-nav') &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavbar);
  } else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavbar);
  }
}

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  document.body.addEventListener('click', closeNavbar);
});

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

function hideShowP() {
  if(document.getElementByClassName('hideShowPar').checked) {
    document.getElementsByClassName('paragraph').style.display="none";
  } else {document.getElementsByClassName('paragraph').style.display="block";
  }
}

function hideShowTitle() {
  if(document.getElementById('Title').checked) {
    document.getElementById('title').style.display="none";
  } else {document.getElementById('title').style.display="block";
  }
}

function hideShowList() {
  if(document.getElementById('List').checked) {
    document.getElementById('list').style.display="none";
  } else {document.getElementById('list').style.display="block";
  }
}
/*

function change() {
  const filterchk = document.querySelectorAll(".pagefilter input[type='checkbox']");
  let filters = {
    pagefilter: getClassOfCheckedCheckboxes(filterchk)
  };
  filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
  const classes = [];

  if (checkboxes && checkboxes.length > 0) {
    for (let i = 0; i < checkboxes.length; i++) {
      let cb = checkboxes[i];

      if (cb.checked) {
        classes.push(cb.getAttribute("rel"));
      }
    }
  }

  return classes;
}

function filterResults(filters) {
  const rElems = document.querySelectorAll(".container");
  const hiddenElems = [];

  if (!rElems || rElems.length <= 0) {
    return;
  }

  for (let i = 0; i < rElems.length; i++) {
    const el = rElems[i];

    if (filters.pagefilter.length > 0) {
      let isHidden = true;

      for (let j = 0; j < filters.pagefilter.length; j++) {
        let filter = filters.pagefilter[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }

  }

  for (let i = 0; i < rElems.length; i++) {
    rElems[i].style.display = "block";
  }

  if (hiddenElems.length <= 0) {
    return;
  }

  for (let i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].style.display = "none";
  }
}*/
