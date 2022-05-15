window.onload = function() {
  const url = `https://api.github.com/users/Jhonata-Tirloni`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      usernameGitHub.textContent = data.login
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
    })
}

const submit = document.querySelector('#submit')


const ModalClose = {
  close() {
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const ModalOpen = {
  open() {
    document.querySelector('.modal-overlay').classList.add('active')
  }
}

const ProfModalOpen = {
  open(){
    document.querySelector('.modal-overlay-prof').classList.remove('hidden')
    document.querySelector('.modal-overlay-prof').classList.add('active')
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const ProfModalClose = {
  close(){
    document.querySelector('.modal-overlay-prof').classList.remove('active')
    document.querySelector('.modal-overlay-prof').classList.add('hidden')
    document.querySelector('.modal-overlay').classList.add('active')
  }
}

const CursosModalOpen = {
  open(){
    document.querySelector('.modal-overlay-cursos').classList.remove('hidden')
    document.querySelector('.modal-overlay-cursos').classList.add('active')
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const CursosModalClose = {
  close(){
    document.querySelector('.modal-overlay-cursos').classList.remove('active')
    document.querySelector('.modal-overlay-cursos').classList.add('hidden')
    document.querySelector('.modal-overlay').classList.add('active')
  }
}


const ExpModalOpen = {
  open(){
    document.querySelector('.modal-overlay-exp').classList.remove('hidden')
    document.querySelector('.modal-overlay-exp').classList.add('active')
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const ExpModalClose = {
  close(){
    document.querySelector('.modal-overlay-exp').classList.remove('active')
    document.querySelector('.modal-overlay-exp').classList.add('hidden')
    document.querySelector('.modal-overlay').classList.add('active')
  }
}

const PortifModalOpen = {
  open(){
    document.querySelector('.modal-overlay-portif').classList.remove('hidden')
    document.querySelector('.modal-overlay-portif').classList.add('active')
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const PortifModalClose = {
  close(){
    document.querySelector('.modal-overlay-portif').classList.remove('active')
    document.querySelector('.modal-overlay-portif').classList.add('hidden')
    document.querySelector('.modal-overlay').classList.add('active')
  }
}


