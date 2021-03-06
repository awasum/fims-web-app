/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {FimsSharedModule} from '../../../common/common.module';
import {CaseRoutes} from './case.routes';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CaseTasksComponent} from './tasks/task.component';
import {CasePaymentsComponent} from './payments/payments.component';
import {CaseDetailFormComponent} from './form/detail/detail.component';
import {CaseCreateComponent} from './form/create.component';
import {CaseFormComponent} from './form/form.component';
import {CaseListComponent} from './case.list.component';
import {CaseDetailComponent} from './case.detail.component';
import {CaseEditComponent} from './form/edit.component';
import {CasesStore, caseStoreFactory} from './store/index';
import {Store} from '@ngrx/store';
import {CaseExistsGuard} from './case-exists.guard';
import {CaseDetailPaymentCycleComponent} from './payment-cycle/payment-cycle.component';
import {CasePaymentsApiEffects} from './store/payments/effects/service.effects';
import {EffectsModule} from '@ngrx/effects';
import {CaseTasksApiEffects} from './store/tasks/effects/service.effects';
import {CaseNotificationEffects} from './store/effects/notification.effects';
import {CaseRouteEffects} from './store/effects/route.effects';
import {CaseApiEffects} from './store/effects/service.effects';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdOptionModule, MdRadioModule,
  MdSelectModule,
  MdToolbarModule
} from '@angular/material';
import {
  CovalentCommonModule, CovalentDataTableModule, CovalentMessageModule,
  CovalentStepsModule
} from '@covalent/core';
import {CaseStatusComponent} from './status/status.component';

@NgModule({
  imports: [
    RouterModule.forChild(CaseRoutes),
    FimsSharedModule,
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    MdIconModule,
    MdListModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonModule,
    MdOptionModule,
    MdSelectModule,
    MdRadioModule,
    MdCardModule,
    CovalentCommonModule,
    CovalentStepsModule,
    CovalentDataTableModule,
    CovalentMessageModule,

    EffectsModule.run(CaseApiEffects),
    EffectsModule.run(CaseRouteEffects),
    EffectsModule.run(CaseNotificationEffects),

    EffectsModule.run(CaseTasksApiEffects),
    EffectsModule.run(CasePaymentsApiEffects)
  ],
  declarations: [
    CaseListComponent,
    CaseFormComponent,
    CaseCreateComponent,
    CaseEditComponent,
    CaseDetailFormComponent,
    CaseDetailComponent,
    CaseDetailPaymentCycleComponent,
    CasePaymentsComponent,
    CaseTasksComponent,
    CaseStatusComponent
  ],
  providers: [
    CaseExistsGuard,
    { provide: CasesStore, useFactory: caseStoreFactory, deps: [Store]}
  ]
})
export class CaseModule{}
