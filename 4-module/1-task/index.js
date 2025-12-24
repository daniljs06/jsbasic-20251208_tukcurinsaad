function makeFriendsList(friends) {
  // ваш код...
  let elemUl = document.createElement('UL');
  friends.forEach(function(item) {
   let elemLi = document.createElement('LI')
   elemLi.textContent = item.firstName + ' ' + item.lastName;
   elemUl.appendChild(elemLi);
  });
   return elemUl;
}

