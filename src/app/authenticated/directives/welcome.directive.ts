import { Directive, ViewContainerRef, Input, TemplateRef, HostListener } from "@angular/core";

@Directive({
    selector: '[welcomeTimer]'
})
export class WelcomeTimerDirective{

    @Input() public set welcomeTimer(val){
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