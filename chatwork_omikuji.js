javascript:(function() {
  function getReviewers() {
    function shuffle(e) {
      for (var r, t, n = e.length; n;) t = Math.floor(Math.random() * n--), r = e[n], e[n] = e[t], e[t] = r;
      return e;
    }
    function getMembersByName(name) {
      return memberData = Object.keys(RL.rooms)
        .map(k=>RL.rooms[k])
        .find(r=>r._name===roomName)
        .member_dat;
    }
    function getMembersById(id) {
      return RL.rooms[id].member_dat;
    }
    const names = Object.keys(getMembersById(RL.focused_room_id))
      .map(id => ({ name: />([^<]*)</.exec(CW.getName(id))[1], id }));

    return shuffle(names);
  }
  let reviewers = getReviewers();
  let target = reviewers[0];
  let result = "[To:" + target.id + "]" + target.name + "君に決めた!\n";
  result += "[code]", reviewers.forEach(function(e) {
      result += e.name + ", "
  });
  result += "[/code]\n";
  document.getElementById("_chatText").value = result;
})();

