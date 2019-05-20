import { Injectable } from '@angular/core';

import { QuestionBase }     from '../classes/question-base';
import { DropdownQuestion } from '../classes/question-dropdown';
import { TextboxQuestion }  from '../classes/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'rating',
        label: 'Angular Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Deepak',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: 'Preman',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
