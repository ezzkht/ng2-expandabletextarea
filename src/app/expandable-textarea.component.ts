import { Component, Input, Output, ElementRef, EventEmitter, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    moduleId: module.id,
    selector: 'expandable-textarea',
    templateUrl: 'expandable-textarea.component.html',
    styleUrls: ['expandable-textarea.component.css']

})
export class ExpandableTextAreaComponent implements OnInit {
    @Input() value: string;
    @Input() placeholder: string;
    @Input() classes: string;
    @Input() height: string;
    @Input() readonly: boolean = false;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    private isExpanded: boolean = false;

    constructor(
        private _elementRef: ElementRef
    ) {
    }

    ngOnInit() {
        let el = this._elementRef.nativeElement;
        let textArea = $(el).find('.expandabletextarea');
        textArea.addClass(this.classes);
        textArea.css('height', this.height);

        /*if (this.disabled)
            textArea.prop("disabled", "true");
        else
            textArea.removeProp("disabled");

        if (this.readonly)
            textArea.prop("readonly", "true");
        else
            textArea.removeProp("readonly");*/
    }

    valueChanged(newValue: string) {
        this.valueChange.next(newValue);
    }

    toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }

    handleKeyPress(keyEvent: KeyboardEvent) {
        if (keyEvent.which === 27)
            this.isExpanded = false;
    }
}
