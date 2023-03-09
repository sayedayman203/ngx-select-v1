import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NgxSelectV1Component,
  NG_SELECT_DEFAULT_CONFIG,
} from "./ng-select.component";
import {
  NgOptionTemplateDirective,
  NgLabelTemplateDirective,
  NgHeaderTemplateDirective,
  NgFooterTemplateDirective,
  NgOptgroupTemplateDirective,
  NgNotFoundTemplateDirective,
  NgTypeToSearchTemplateDirective,
  NgLoadingTextTemplateDirective,
  NgMultiLabelTemplateDirective,
  NgTagTemplateDirective,
} from "./ng-templates.directive";
import { NgxOptionV1Component } from "./ng-option.component";
import { NgOptionHighlightDirective } from "./ng-option-highlight.directive";
import { NgDropdownPanelComponent } from "./ng-dropdown-panel.component";
import { WindowService } from "./window.service";
import { VirtualScrollService } from "./virtual-scroll.service";
import { ConsoleService } from "./console.service";

@NgModule({
  declarations: [
    NgDropdownPanelComponent,
    NgxOptionV1Component,
    NgxSelectV1Component,
    NgOptionHighlightDirective,
    NgOptgroupTemplateDirective,
    NgOptionTemplateDirective,
    NgLabelTemplateDirective,
    NgMultiLabelTemplateDirective,
    NgHeaderTemplateDirective,
    NgFooterTemplateDirective,
    NgNotFoundTemplateDirective,
    NgTypeToSearchTemplateDirective,
    NgLoadingTextTemplateDirective,
    NgTagTemplateDirective,
  ],
  imports: [CommonModule],
  exports: [
    NgxSelectV1Component,
    NgxOptionV1Component,
    NgOptionHighlightDirective,
    NgOptgroupTemplateDirective,
    NgOptionTemplateDirective,
    NgLabelTemplateDirective,
    NgMultiLabelTemplateDirective,
    NgHeaderTemplateDirective,
    NgFooterTemplateDirective,
    NgNotFoundTemplateDirective,
    NgTypeToSearchTemplateDirective,
    NgLoadingTextTemplateDirective,
    NgTagTemplateDirective,
  ],
  providers: [
    ConsoleService,
    WindowService,
    VirtualScrollService,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: "No items found",
        typeToSearchText: "Type to search",
        addTagText: "Add item",
        loadingText: "Loading...",
        clearAllText: "Clear all",
        disableVirtualScroll: false,
      },
    },
  ],
})
export class NgxSelectV1Module {}
