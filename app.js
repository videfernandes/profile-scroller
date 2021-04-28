const data = [{
    name: 'Caio Rolando da Rocha',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'São Luís MA',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Afília Demaria de Nazaré',
    age: 21,
    gender: 'female',
    lookingfor: 'male',
    location: 'Rio de Janeiro RJ',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'MASSARO MIAMOTO',
    age: 34,
    gender: 'male',
    lookingfor: 'female',
    location: 'São Paulo SP',
    image: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    name: 'Sara Dores da Costa',
    age: 31,
    gender: 'female',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    name: 'Naída Navinda Navolta Pereira',
    age: 42,
    gender: 'female',
    lookingfor: 'female/male',
    location: 'Goiânia GO',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Passos Dias Aguiar',
    age: 32,
    gender: 'male',
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
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
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