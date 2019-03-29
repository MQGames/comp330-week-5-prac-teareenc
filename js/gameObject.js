"use strict";

class GameObject {
	
	construction() {
		this._parent = null;
		this._children = [];
	}
	
	/**
	* Use a getter/setter to handle bookkeeping
	* when the parent is reset
	*/
	
	get parent () {
		return this._parent;
	}
	
	set parent(p) {
		if (this._parent !== null) {
			// remove it from its existing parent
			let index = this._parent._children.indexOf(this);
			this._parent._children.slice(index, 1);
		}
	}
	
	set parent(p) {
		if (this._parent !== null) {
			// remove it from its existing parent
			let index = this._parent._children.indexOf(this);
			this._parent._children.slice(index, 1);
		}
		
		// connect it to its new parent
		this._parent = p;
		
		if (p !== null) {
			// add it to the new parent
			p._children.push(this);
		}
	}
}