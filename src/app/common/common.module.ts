import { NgModule } from '@angular/core';

@NgModule({
})

export class MyCommonModule {

  public static deepCopy(oldObj: any) {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === "object") {
      newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
      for (var i in oldObj) {
        newObj[i] = this.deepCopy(oldObj[i]);
      }
    }
    return newObj;
  }

}