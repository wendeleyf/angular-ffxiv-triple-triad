import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	imports : [
		MatToolbarModule,
		MatTableModule,
		MatGridListModule
	],
	exports : [
		MatToolbarModule,
		MatTableModule,
		MatGridListModule
	]
})

export class MaterialModule {}