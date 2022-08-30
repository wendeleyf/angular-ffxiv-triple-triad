import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
	imports : [
		MatToolbarModule,
		MatTableModule,
		MatGridListModule,
		MatProgressSpinnerModule,
		MatDialogModule
	],
	exports : [
		MatToolbarModule,
		MatTableModule,
		MatGridListModule,
		MatProgressSpinnerModule,
		MatDialogModule
	]
})

export class MaterialModule {}