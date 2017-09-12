import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { BodyComponent } from './components/body/body.component';
import { ScholarComponent } from './scholar/scholar.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ExperienceComponent } from './experience/experience.component';

ExperienceComponent

const appRoutes: Routes = [
	{path: '', component: BodyComponent},
	{path: 'home', component: BodyComponent},
	{path: 'scholar', component: ScholarComponent},
	{path: 'curriculum', component: CurriculumComponent},
	{path: 'experience', component: ExperienceComponent}

	//{path: 'producto/:id', component: ProductoDetailComponent},
	//{path: 'editar-producto/:id', component: ProductoEditComponent},
	//{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);