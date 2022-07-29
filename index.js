class Observable {
  constructor(funcThatTakesObserver) {
    this._funcThatTakesObserver = funcThatTakesObserver;
  }

  subscribe(observer) {
    return this._funcThatTakesObserver(observer);
  }
}

let myObservable = new Observable(observer => {
  setTimeout(() => {
    observer.next("got data!");
    observer.complete();
  }, 1000);
});

let myObserver = {
  next(data) {
    console.log(data);
  },
  error(e) {
    console.log(e);
  },
  complete() {
    console.log("request complete");
  }
}

myObservable.subscribe(myObserver);