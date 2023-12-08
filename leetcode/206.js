var reverseList = function(head) {
  let cur = head;
  let prev = null;

  while (cur !== null) {
      let holdNext = cur.next;
      cur.next = prev;
      prev = cur
      cur = holdNext
  }
  return prev;
};