let node8= {v:28, next: null}
let node7= {v:12, next: node8}
let node6= {v:9, next: node7}
let node5= {v:5, next: node6}
let node4= {v:4, next: node5}
let node3= {v:3, next: node4}
let node2= {v:2, next: node3}
let head = {v:1, next: node2}


const printList = (head)=>{
  if (head!=null) {
    console.log(head.v);
    printList(head.next);
  }

  
}

printList(head);

function findNextOdd (head) {
  if (head == null) {
    return head;
  }
  if (head.v % 2 !== 0 ) {
    return head;
  }
  return findNextOdd(head.next);
}

const removeEven = (head) => {
  let prevHead = findNextOdd(head);

  head.next = findNextOdd(head.next);

  if (head.v % 2 === 0) {
    prevHead.next = head.next
    removeEven(head.next);
  }    
}

removeEven(head);
printList(head)