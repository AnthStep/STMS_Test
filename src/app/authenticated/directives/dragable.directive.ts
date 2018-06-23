import { Directive, Input, HostBinding, HostListener, ElementRef, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Directive({
    selector: '[dragable]',
    host: {
        '[style.position]': "'absolute'",
        '[style.zIndex]': "'100'",
        '[style.cursor]': "'pointer'",
        '[style.userSelect]': "'none'",
        '[style.userDrag]': "'none'",
    }
})
export class DragableDirective{
    @Input()
    public set dragable(pos: {x: number, y: number}){
        if(pos){
            this.posX = pos.x;
            this.posY = pos.y;
        }
    }

    @Output() 
    private positionChange: EventEmitter<{x:number;y:number}> = new EventEmitter();

    @HostBinding('style.left.px')
    public posX = 0;
    @HostBinding('style.top.px')
    public posY = 0;

    private _startPos: {x: number,y: number} = {x: 0, y:0};
    private _dragable: boolean = false;

    private hostElement: HTMLElement;
    private parentElement: HTMLElement;
    constructor(private element: ElementRef){
        this.hostElement = element.nativeElement;
        this.parentElement = this.hostElement.parentElement;
    }

    @HostListener('mousedown', ['$event'])
    public onMouseDown(event: MouseEvent){
        if(!this._dragable && event.button != 2){
            this._startPos = {x: event.clientX, y: event.clientY};
            this._dragable = true;
            event.preventDefault();            
        }
    }

    @HostListener('document:mouseup', ['$event'])
    public onMouseUp(event){
        if(this._dragable && event.button != 2){
            this._dragable = false;
            this.positionChange.emit({x: this.posX,y: this. posY});
        }
        
    }

    @HostListener('document:mousemove', ['$event'])
    public onmousemove(event: MouseEvent){
        if(this._dragable && event.button != 2){
            const deltaX = event.clientX - this._startPos.x;
            const deltaY = event.clientY - this._startPos.y;
            this.posX = Math.max(Math.min(this.posX + deltaX, this.parentElement.offsetWidth - this.hostElement.offsetWidth), 0);
            this.posY = Math.max(Math.min(this.posY + deltaY, this.parentElement.offsetHeight - this.hostElement.offsetHeight), 0);;
            this._startPos = {x: event.clientX, y: event.clientY};
        }
    }
}