import { Directive, ViewContainerRef, Input, TemplateRef} from "@angular/core";

@Directive({
    selector: '[removeTimer]'
})
export class RemoveTimerDirective{

    @Input() public set removeTimer(val){
        const time = Number(val);
        setTimeout(()=>{
            this._clearView();
        }, time)
    }

    constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>){
        const el: HTMLElement = viewContainer.createEmbeddedView(templateRef).rootNodes[0];
        el.addEventListener('click', ()=>{
            this._clearView();
        })
    }  

    private _clearView(){
        this.viewContainer.clear();
    }
}