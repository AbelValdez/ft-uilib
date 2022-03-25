import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class FtLibService {
    constructor() { }
}
FtLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: FtLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FtLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: FtLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: FtLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class FtLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
FtLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: FtLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FtLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: FtLibComponent, selector: "ft-lib", ngImport: i0, template: `
    <p>
      ft-lib is working now!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: FtLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ft-lib',
                    template: `
    <p>
      ft-lib is working now!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class FtLibModule {
}
FtLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: FtLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FtLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: FtLibModule, declarations: [FtLibComponent], exports: [FtLibComponent] });
FtLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: FtLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: FtLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FtLibComponent
                    ],
                    imports: [],
                    exports: [
                        FtLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ft-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FtLibComponent, FtLibModule, FtLibService };
//# sourceMappingURL=ft-lib.mjs.map
