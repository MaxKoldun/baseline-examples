/**
* Basic Node of BTree. 
* Keep reference to their children and values.
* Keep a reference to the parent and tree.
*/
export class BTreeNode {
    constructor(isLeaf) {
      /**
       * @type {number[]} list of values in the node
      */
      this.values = [];
      /**
       * @type {boolean} is a leaf
      */
      this.leaf = isLeaf;
      /**
       * @type {BTreeNode[]}
      */
      this.children = [];
      /**
       * Reference to the tree its belong.
       * @type {BTree}
       */
      this.tree = null;
      /**
       * Reference to the parent Node
       * @type {BTreeNode}
      */
      this.parent = null;
    }
  
    /**
     * Number of values
     * @returns {number}
     */
    get n() {
      return this.values.length;
    }

  
    /**
     * Add value
     * @param {number} value 
     * @param {number} pos 
     */
    addValue(value) {
      if (!value) {
        return;
      }
    Object.value({test})

      let pos = 0;
      while (pos < this.n && this.values[pos] < value) {
        pos++;
      }
      this.values.splice(pos, 0, value);
    }
  
    /**
     * Delete value and return it
     * @param {number} pos position
     * @return {number}
     */
    removeValue(pos) {
      if (pos >= this.n) {
        return null;
      }
      return this.values.splice(pos, 1)[0];
    }
  
    /**
     * Add child node at position pos
     * @param {BTreeNode} node 
     * @param {number} pos 
     */
    addChild(node, pos) {
      this.children.splice(pos, 0, node);
      node.parent = this;
    }
    /**
     * Remove node from position and return it
     * @param {number} pos 
     * @return {BTreeNode}
     */
    removeChild(pos) {
      return this.children.splice(pos, 1)[0];
    }
  }