const data = [{
    name: 'Caio Rolando da Rocha',
    age: 32,
    gender: 'male',
    profession: 'Alpinista',
    lookingfor: 'female',
    location: 'São Luís MA',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Ana Lisa',
    age: 21,
    gender: 'female',
    profession: 'Psicóloga',
    lookingfor: 'male',
    location: 'Rio de Janeiro RJ',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Décio Machado',
    age: 34,
    gender: 'male',
    profession: 'Lenhador',
    lookingfor: 'female',
    location: 'São Paulo SP',
    image: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    name: 'Iná Lemos',
    age: 31,
    gender: 'female',
    profession: 'Pneumologista',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    name: 'Ema Thomas',
    age: 42,
    gender: 'female',
    profession: 'Traumatologista',
    lookingfor: 'female/male',
    location: 'Goiânia GO',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Passos Dias Aguiar',
    age: 32,
    gender: 'male',
    profession: 'Instrutor de auto escola',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
];

const profiles = profileIterator(data);

//call first profile => avoid empty
nextProfile();

//next event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Nome: ${currentProfile.name}</li>
        <li class="list-group-item">Idade: ${currentProfile.age}</li>
        <li class="list-group-item">Localização: ${currentProfile.location}</li>
        <li class="list-group-item">Profissão: ${currentProfile.profession}</li>
      `;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    //no more profiles
    window.location.reload();
  }
}

//profile iterator

function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      };
    }
  };
}