import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import {AppModule} from "./01-basic/app.module";
// import {AppModule} from "./02-templateVstemplateUrl/app.module";
// import {AppModule} from "./03-templateVstemplateUrl/app.module";
// import {AppModule} from "./04-templateVstemplateUrl/app.module";
// import {AppModule} from "./05-bootstrap/app.module";
// import {AppModule} from "./06-badge/app.module";
// import {AppModule} from "./07-events/app.module";
// import {AppModule} from "./08-databindings/app.module";
// import {AppModule} from "./09-parent-child/app.module";
// import {AppModule} from "./10-ng-content/app.module";
// import {AppModule} from "./11-encapsulation/app.module";
// import {AppModule} from "./12-animation/app.module";
// import {AppModule} from "./13-life_cycle/app.module";
import {AppModule} from "./14-routing/app.module";


platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));