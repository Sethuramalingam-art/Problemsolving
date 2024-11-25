/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current=head;
    while(current && current.next) {
        if (current.val===current.next.val) {
            let nextNode = current.next.next;
            current.next=nextNode
        } else {
            current = current.next
        }
    }
    return head
};
