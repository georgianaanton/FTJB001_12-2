import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';


@Directive({
    selector: '[unless]'
})
export class UnlessDirective{

    constructor(private tempRef:TemplateRef<any>, private vcRef:ViewContainerRef){
        console.log(this.tempRef)
        console.log(this.vcRef)
    }

    @Input()
    set unless(condition:boolean){
        console.log(condition);
        if(condition == true){
            // this.tempRef.clear();
            this.vcRef.clear();
        } else {
            this.vcRef.createEmbeddedView(this.tempRef);
        }
    }


}