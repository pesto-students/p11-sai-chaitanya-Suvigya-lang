class CustomPromise {
    constructor(executor) {
      // Your code here
      try {
        callback(this._resolve, this._reject);
      } catch (err) {
        this._reject(err)
      }
    }
  
    then(onFulfilled, onRejected) {
      // Your code here
    }
  
    catch(onRejected) {
      // Your code here
    }
  
    static resolve(value) {
      // Your code here
    }
  
    static reject(reason) {
      // Your code here
    }
  }