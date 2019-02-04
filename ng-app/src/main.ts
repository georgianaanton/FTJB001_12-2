import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import {AppModule} from "./01-basic/app.module";
// import {AppModule} from "./02-templateVstemplateUrl/app.module";
import {AppModule} from "./03-templateVstemplateUrl/app.module";


platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));