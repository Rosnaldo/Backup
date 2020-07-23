const mergeTwoLists = (l1, l2) => {
  let head = '';
  let cur;
  while (l1 || l2) {
    if (!l1) {
      if (!head) {
        head = new ListNode(l2.val);
        cur = head;
      } else {
        cur.next = new ListNode(l2.val);
        cur = cur.next;
      };
      l2 = l2.next;
      continue;
    };
    if (!l2) {
      if (!head) {
        head = new ListNode(l1.val);
        cur = head;
      } else {
        cur.next = new ListNode(l1.val);
        cur = cur.next;
      };
      l1 = l1.next;
      continue;
    };
    if (l1.val < l2.val) {
      if (!head) {
        head = new ListNode(l1.val);
        cur = head;
      } else {
        cur.next = new ListNode(l1.val);
        cur = cur.next;
      };
      l1 = l1.next;
    } else {
      if (!head) {
        head = new ListNode(l2.val);
        cur = head;
      } else {
        cur.next = new ListNode(l2.val);
        cur = cur.next;
      };
      l2 = l2.next;
    };
  };
  return head;
};
