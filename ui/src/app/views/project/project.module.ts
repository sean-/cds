import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProjectShowComponent} from './show/project.component';
import {ProjectAddComponent} from './add/project.add.component';
import {projectRouting} from './project.routing';
import {SharedModule} from '../../shared/shared.module';
import {ProjectAdminComponent} from './show/admin/project.admin.component';
import {ProjectRepoManagerComponent} from './show/admin/repomanager/list/project.repomanager.list.component';
import {ProjectRepoManagerFormComponent} from './show/admin/repomanager/form/project.repomanager.form.component';
import {RouterModule} from '@angular/router';
import {ProjectEnvironmentListComponent} from './show/environment/list/environment.list.component';
import {ProjectEnvironmentComponent} from './show/environment/list/item/environment.component';
import {ProjectEnvironmentFormComponent} from './show/environment/form/environment.form.component';
import {ProjectPipelinesComponent} from './show/pipeline/pipeline.list.component';
import {ProjectVariablesComponent} from './show/variable/variable.list.component';
import {ProjectApplicationListComponent} from './show/application/application.list.component';
import {ProjectWorkflowListComponent} from './show/workflow/workflow.list.component';

@NgModule({
    declarations: [
        ProjectAddComponent,
        ProjectAdminComponent,
        ProjectApplicationListComponent,
        ProjectEnvironmentFormComponent,
        ProjectEnvironmentListComponent,
        ProjectEnvironmentComponent,
        ProjectPipelinesComponent,
        ProjectVariablesComponent,
        ProjectRepoManagerComponent,
        ProjectRepoManagerFormComponent,
        ProjectShowComponent,
        ProjectWorkflowListComponent
    ],
    imports: [
        SharedModule,
        RouterModule,
        projectRouting,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ProjectModule {
}
