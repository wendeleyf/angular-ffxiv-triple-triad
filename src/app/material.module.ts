import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
	imports : [
		MatToolbarModule,
		MatTableModule,
		MatGridListModule,
		MatProgressSpinnerModule
	],
	exports : [
		MatToolbarModule,
		MatTableModule,
		MatGridListModule,
		MatProgressSpinnerModule
	]
})

export class MaterialModule {}